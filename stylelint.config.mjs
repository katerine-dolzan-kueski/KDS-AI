export default {
  defaultSeverity: 'warning',
  extends: 'stylelint-config-standard',
  overrides: [
    {
      customSyntax: 'postcss-styled-syntax',
      files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.ts', '**/*.tsx'],
    },
  ],
  rules: {
    'alpha-value-notation': null,
    'at-rule-empty-line-before': null,
    // Tailwind
    'at-rule-no-unknown': [true, { ignoreAtRules: ['theme'] }],
    // makes it harder to change
    'color-hex-length': null,
    'comment-empty-line-before': null,
    'custom-property-empty-line-before': null,
    'custom-property-pattern': null,
    // empty lines help with readability
    'declaration-empty-line-before': null,
    // our bundler understands the simple notation we use
    'import-notation': null,
    'media-feature-range-notation': null,
    'no-empty-source': null,
    'selector-class-pattern': null,
    'string-no-newline': null,
    // not compatible with prettier
    'value-keyword-case': null,
  },
};
