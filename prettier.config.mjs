export default {
  overrides: [
    {
      files: ['**/*.json'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  ignorePath: '.prettierignore',
};
