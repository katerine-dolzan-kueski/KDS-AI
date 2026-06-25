/* eslint-disable import/no-extraneous-dependencies */
const conventionalCommitsParser = require('conventional-commits-parser');
const { callGithub } = require('./github.utils');
const { arrayToStream, readStream } = require('./stream.utils');
const { COMMIT_GROUPS, COMMIT_PARSER_OPTIONS } = require('./changelog.models');

function generateChangelog(commits, templateFn) {
  const emptyGroups = Object.fromEntries(COMMIT_GROUPS.map(group => [group.name, []]));
  const changelogGroups = commits
    .reduce((groups, commit) => {
      const groupTitle = COMMIT_GROUPS.find(group => group.id === commit.type)?.name || 'Others';
      const updatedGroup = groups[groupTitle] || [];
      updatedGroup.push(commit);
      return {
        ...groups,
        [groupTitle]: updatedGroup,
      };
    }, emptyGroups);

  const changelogTable = Object
    .entries(changelogGroups)
    .reduce((changelog, [group, commitList]) => (
      !commitList.length
        ? changelog
        : [...changelog, `## ${group}\n\n${commitList.map(templateFn).join('\n')}`]
    ), []);

  return `${changelogTable.join('\n\n')}`;
}

function tagRevertOrphans(commits) {
  return commits.map(commit => {
    if (commit.type || !commit.header?.match(/^revert\s/i)) return commit;

    return {
      ...commit,
      type: 'revert',
    };
  });
}

function removeMergeCommits(commits) {
  return commits.filter(commit => !commit.header?.match(/^merge\s/i));
}

async function gitRawCommits({ from, to }) {
  const diffResponse = await callGithub(`compare/${from}...${to}`);
  const diffMessages = diffResponse?.commits?.map(commit => commit?.commit?.message || 'missed') ?? [];

  return arrayToStream(diffMessages);
}

async function getCommitDiff(from, to) {
  const rawCommitsStream = await gitRawCommits({ from, to });
  const commitStream = rawCommitsStream.pipe(conventionalCommitsParser(COMMIT_PARSER_OPTIONS));

  const allCommits = await readStream(commitStream);

  return removeMergeCommits(tagRevertOrphans(allCommits));
}

module.exports = {
  COMMIT_GROUPS,
  generateChangelog,
  getCommitDiff,
};
