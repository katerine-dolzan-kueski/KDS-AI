/* eslint-disable no-console */
const {
  getCommitDiff,
  generateChangelog,
} = require('./helpers/changelog.utils');
const packageJson = require('../../package.json');
const { extractJiraAndDescription } = require('./helpers/version.utils');
const {
  createRelease, getReleaseForTag, updateRelease, getLastReleaseTagSha, toOutput,
} = require('./helpers/github.utils');
const { validateReleaseTag } = require('./helpers/release.utils');
const { getArgs } = require('./helpers/getArgs');

const SHORTCUTS = {
  c: 'commit',
  t: 'tag',
};

function commitTemplate(commit) {
  const { description, jiraTicket } = extractJiraAndDescription(commit);
  const scope = jiraTicket ? `[${jiraTicket}](https://kueski.atlassian.net/browse/${jiraTicket}): ` : '';

  return `- ${scope}${description}`;
}

async function makeRelease({ commit: currentSha, tag: providedTag }) {
  const { version } = packageJson;
  const { lastTag, lastSha } = await getLastReleaseTagSha();

  const currentTag = providedTag ? validateReleaseTag(providedTag) : `v${version}`;

  console.log(`✅ Current Release Tag: "${currentTag}" on commit ${currentSha}`);
  console.log(`✅ Last Release Tag: "${lastTag}" on commit ${lastSha}`);

  const currentRelease = await getReleaseForTag(currentTag);
  if (currentRelease) console.log(`✅ An existing release was found for tag ${currentTag}, contents will be updated`);

  const commits = await getCommitDiff(lastTag, currentSha);

  if (!commits?.length) throw new Error('No new commits found since last release');
  console.log(`✅ ${commits.length} new commits found since last release`);

  console.log('Generating Changelog...');
  const changelog = generateChangelog(commits, commitTemplate);

  console.log('Generating PreRelease...');
  const releasePayload = {
    body: changelog,
    prerelease: true,
    sha: currentSha,
    tag: currentTag,
    version,
  };
  const releaseResult = currentRelease
    ? await updateRelease(currentRelease.id, releasePayload)
    : await createRelease(releasePayload);

  if (currentRelease) console.log(`✅ Release ${currentRelease.id} will be updated`);
  else console.log('✅ A new release will be created');

  const {
    html_url: releaseUrl,
    id,
    upload_url: upload,
  } = releaseResult;

  console.log(`✅ v${version} Release ${currentRelease ? 'updated' : 'created'}: ${releaseUrl}`);

  toOutput({
    GENERATED_RELEASE_ID: id,
    GENERATED_RELEASE_TAG: currentTag,
    GENERATED_RELEASE_UPLOAD_URL: upload,
  });
}

const terminalArgs = getArgs(SHORTCUTS);

if (!terminalArgs.commit) throw new Error('A Commit is required. Use "--commit" (-c) to provide one');

makeRelease(terminalArgs);
