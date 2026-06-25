const fs = require('fs');
const path = require('path');
const packageJson = require('../../../package.json');
const Semver = require('./Semver');
const { COMMIT_GROUPS } = require('./changelog.models');

function extractJiraAndDescription({ subject, scope, header }) {
  const description = subject || header || '';
  const jiraTicket = scope || description.match(/([A-Z]+-\d+)/)?.shift();

  return { description, jiraTicket };
}

function getBumpLevelForType(type) {
  const groupConfig = COMMIT_GROUPS.find(({ id }) => id === type);

  return groupConfig?.level ?? 'unknown';
}

function bumpVersionWithCommits(currentVersion, commits = []) {
  const version = new Semver(currentVersion);
  commits.forEach(({ type }) => version.bump(getBumpLevelForType(type)));
  return version.toString();
}

function updateAppVersion(version) {
  packageJson.version = version;
  const filePath = path.join(process.cwd(), 'package.json');

  fs.writeFileSync(filePath, JSON.stringify(packageJson, null, '  '));
}

module.exports = {
  bumpVersionWithCommits,
  extractJiraAndDescription,
  getBumpLevelForType,
  updateAppVersion,
};
