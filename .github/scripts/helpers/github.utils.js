const { exec } = require('child_process');
const fs = require('fs');
const { Readable } = require('stream');
const { finished } = require('stream/promises');

const GH_BASE = 'https://api.github.com/repos/kueski-dev/kueski-design-system';

async function callGithub(path, query = {}, overrideHeaders = [], data = null, method = null) {
  const { GITHUB_TOKEN } = process.env;
  const headers = new Headers();
  const params = new URLSearchParams(query).toString();
  const searchParams = params ? `?${params}` : '';

  headers.append('Accept', 'application/vnd.github+json');
  headers.append('Authorization', `Bearer ${GITHUB_TOKEN}`);
  headers.append('X-GitHub-Api-Version', '2022-11-28');

  overrideHeaders.forEach(([key, value]) => headers.append(key, value));

  const fetchConfig = {
    body: data ? JSON.stringify(data) : undefined,
    headers,
    method: method || data ? 'POST' : 'GET',
  };

  const response = await fetch(`${GH_BASE}/${path}${searchParams}`, fetchConfig);
  const mediaType = response.headers.get('x-github-media-type');

  if (!mediaType?.includes('format=json')) return response;

  return response.json();
}

/* I/O */

function getInput(name) {
  const inputName = name.replace(/ /g, '_').toUpperCase();
  const val = process.env[`INPUT_${inputName}`] || process.env[inputName] || '';

  return val.trim();
}

function toOutput(variables = {}) {
  const variableTable = Object.entries(variables);

  if (variableTable.length === 0) return;

  const printableVariables = variableTable
    .map(([key, value]) => {
      if (!value) return null;
      const output = `${key}=${JSON.stringify(value)}`;
      // eslint-disable-next-line no-console
      console.log('Adding to output', output);
      return output;
    })
    .filter(Boolean)
    .join('\n');

  exec(`echo "${printableVariables}" >> $GITHUB_OUTPUT`);
}

/* Artifacts */

function getWorkflowArtifacts(workflow) {
  return callGithub(`actions/runs/${workflow}/artifacts`);
}

async function downloadArtifact(artifact, fileName, errorMessage) {
  const response = await callGithub(`actions/artifacts/${artifact}/zip`);

  if (!response.body) throw new Error(errorMessage || response.message || 'Artifacts not found or already expired');

  const file = fs.createWriteStream(`${fileName}.zip`, { flags: 'wx' });

  return finished(Readable.fromWeb(response.body).pipe(file));
}

/* Tags */

async function findTag(findFunction) {
  const result = await callGithub('tags');

  return result ? result.find(findFunction) : null;
}

/* Requests */

async function findWorkflow(name, params = {}) {
  const term = name.toLowerCase();
  const result = await callGithub('actions/workflows', params);
  const { workflows } = result;

  if (!workflows) return null;

  return workflows.find(workflow => workflow.name.toLowerCase().includes(term));
}

async function getWorkflowsFor(workflow, params) {
  const { branch = '', commit = '' } = params;
  const sanitizedBranch = branch.split('/').pop();
  const response = await callGithub(`actions/workflows/${workflow}/runs`, { branch: sanitizedBranch, head_sha: commit });

  return response.workflow_runs;
}

/* File Read */

async function readFromMaster(filePath, ref = 'master') {
  const masterPackage = await callGithub(
    `contents/${filePath}`,
    { ref },
    [['Accept', 'application/vnd.github.raw+json']],
  );

  return masterPackage;
}

/* Release */

async function getActiveReleases() {
  const allReleases = await callGithub('releases');

  return allReleases.filter(({ draft, prerelease }) => !draft && !prerelease);
}

async function getLastReleaseTagSha() {
  const {
    AURORA_LAST_RELEASE_ID,
    AURORA_LAST_RELEASE_SHA,
    AURORA_LAST_RELEASE_TAG,
    AURORA_LAST_RELEASE_TITLE,
  } = process.env;
  if (AURORA_LAST_RELEASE_SHA && AURORA_LAST_RELEASE_TAG && AURORA_LAST_RELEASE_ID) {
    return {
      lastId: AURORA_LAST_RELEASE_ID,
      lastSha: AURORA_LAST_RELEASE_SHA,
      lastTag: AURORA_LAST_RELEASE_TAG,
      lastTitle: AURORA_LAST_RELEASE_TITLE,
    };
  }
  const result = await callGithub('releases/latest');
  const {
    tag_name: lastTag, target_commitish: lastSha, id: lastId, name: lastTitle,
  } = result;

  toOutput({
    AURORA_LAST_RELEASE_ID: lastId,
    AURORA_LAST_RELEASE_SHA: lastSha,
    AURORA_LAST_RELEASE_TAG: lastTag,
    AURORA_LAST_RELEASE_TITLE: lastTitle,
  });

  return {
    lastId, lastSha, lastTag, lastTitle,
  };
}

async function getReleaseForTag(tag) {
  const release = await callGithub(`releases/tags/${tag}`);

  return release?.id ? release : null;
}

function createRelease({
  body, sha, tag, version,
}) {
  const releaseData = {
    body,
    draft: false,
    name: `v${version}`,
    tag_name: tag,
    target_commitish: sha,
  };

  return callGithub('releases', {}, [], releaseData);
}

function updateRelease(releaseId, {
  body, sha, tag, version,
}) {
  const releaseData = {
    body,
    draft: false,
    name: `v${version}`,
    tag_name: tag,
    target_commitish: sha,
  };

  return callGithub(`releases/${releaseId}`, {}, [], releaseData, 'PATCH');
}

/* Deployments */

async function getLastDeployment(environment = 'staging') {
  const deploymentList = await callGithub('deployments', { environment, per_page: 20 });
  let validDeploy;

  while (deploymentList.length && !validDeploy) {
    const currentTarget = deploymentList.shift();
    // eslint-disable-next-line no-await-in-loop
    const statusHistory = await callGithub(`deployments/${currentTarget.id}/statuses`);
    const successfulDeploy = statusHistory?.find(deploymentStatus => deploymentStatus.state === 'success');

    validDeploy = successfulDeploy ? currentTarget : null;

    // eslint-disable-next-line no-console
    console.log(`Deploy from branch "${currentTarget.ref}" (${currentTarget.sha}) was ${validDeploy ? 'indeed' : 'not'} successful`);
  }

  return validDeploy;
}

module.exports = {
  callGithub,
  createRelease,
  downloadArtifact,
  findTag,
  findWorkflow,
  getActiveReleases,
  getInput,
  getLastDeployment,
  getLastReleaseTagSha,
  getReleaseForTag,
  getWorkflowArtifacts,
  getWorkflowsFor,
  readFromMaster,
  toOutput,
  updateRelease,
};
