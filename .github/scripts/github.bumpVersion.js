/* eslint-disable no-console */
const { extractJiraAndDescription, updateAppVersion, bumpVersionWithCommits } = require('./helpers/version.utils');
const packageJson = require('../../package.json');
const { readFromMaster, toOutput } = require('./helpers/github.utils');
const { getCurrentBranch, commitAndPush } = require('./helpers/git.utils');

const { PR_TITLE, PR_BASE } = process.env;

function toCommitObject(message = '') {
  const [, type, scope, subject] = message.match(/^(\w+)\(([A-Z-0-9]+)\)!?:\s(.*)/) ?? [null, null, null];
  return { scope, subject, type };
}

async function getBumpVersion() {
  const branch = await getCurrentBranch();
  const { version } = packageJson;
  console.log(`Verifying current version is correct (${version})`);

  const { version: masterVersion } = await readFromMaster('package.json', PR_BASE);

  if (!masterVersion) throw new Error('No application version found');
  console.log(`Master version is ${masterVersion}, calculating expected version...`);

  const prCommit = toCommitObject(PR_TITLE);

  if (!prCommit?.type) throw new Error(`PR Title doesn\'t follow a Conventional Commit format - ${PR_TITLE}`);
  console.log('✅ PR Title is correct');

  const { jiraTicket } = prCommit ? extractJiraAndDescription(prCommit) : branch;
  const expectedVersion = bumpVersionWithCommits(masterVersion, [prCommit]);

  if (expectedVersion === version) {
    console.log(`✅ Current version is correct (${expectedVersion})`);
    return;
  }
  console.log(`Expected version is ${expectedVersion}`);

  toOutput({ expectedVersion })

  /*
  updateAppVersion(expectedVersion);

  console.log('✅ Version updated, committing changes...');

  toOutput

  await commitAndPush('package.json', `chore(${jiraTicket}): Update version to ${expectedVersion}`);

  console.log('✅ Version bump commited!');
  */
}

getBumpVersion();
