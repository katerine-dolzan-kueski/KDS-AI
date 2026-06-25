const COMMIT_PARSER_OPTIONS = {
  // mergePattern: /^Merge\sbranch\s'([a-zA-Z0-9-]+)'\sinto\s'(\w*)'$/,
  revertCorrespondence: ['header'],
  revertPattern: /^Revert\s"([\s\S]*)"/,
};

const COMMIT_GROUPS = [
  { id: 'feat', level: 'minor', name: 'New Features' },
  { id: 'revert', level: 'minor', name: 'Reverts' },
  { id: 'fix', level: 'patch', name: 'Bug Fixes' },
  { id: 'deprecated', level: 'patch', name: 'Deprecations' },
  { id: 'perf', level: 'patch', name: 'Performance Enhancements' },
  { id: 'refactor', level: 'patch', name: 'Refactors' },
  { id: 'style', level: 'patch', name: 'Styling Changes' },
  { id: 'security', level: null, name: 'Security Updates' },
  { id: 'chore', level: null, name: 'Chores' },
  { id: 'docs', level: null, name: 'Document' },
  { id: 'test', level: null, name: 'Unit Tests' },
  { id: 'build', level: null, name: 'Build Enhancements' },
  { id: 'ci', level: null, name: 'CI Enhancements' },
  { id: 'merge', level: null, name: 'Merges' },
  { id: 'breaking', level: 'mayor', name: 'Merges' },
];

module.exports = {
  COMMIT_GROUPS,
  COMMIT_PARSER_OPTIONS,
};
