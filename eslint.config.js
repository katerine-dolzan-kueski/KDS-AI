const globals = require('globals');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const betterStyledComponents = require('eslint-plugin-better-styled-components');
const sortKeysFix = require('eslint-plugin-sort-keys-fix');

const tsParser = require('@typescript-eslint/parser');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  ...compat.extends(
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jasmine,
        ...globals.jest,
        globalThis: 'readonly',
        BigInt: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        global: 'readonly',
        React: 'readonly',
        JSX: 'readonly',
      },

      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        project: [
          './tsconfig.eslint.json',
          './packages/react/tsconfig.eslint.json',
          './packages/react/tsconfig.test.json',
          './packages/utils/tsconfig.json',
        ],

        tsconfigRootDir: __dirname,
      },
    },

    plugins: {
      '@typescript-eslint': typescriptEslint,
      'better-styled-components': betterStyledComponents,
      'sort-keys-fix': sortKeysFix,
    },

    settings: {
      react: {
        version: 'detect',
      },

      'import/resolver': {
        node: {
          extensions: ['.mjs', '.js', '.json', '.ts', '.tsx', '.jsx'],
        },
      },

      'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
      'import/core-modules': [],
      'import/ignore': ['node_modules', '\\.(css|svg|json)$'],

      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },

      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    },

    rules: {
      'no-param-reassign': 'off',
      'max-classes-per-file': 'off',
      'arrow-body-style': 'off',
      'no-continue': 'off',
      'no-prototype-builtins': 'off',
      'prefer-destructuring': 'off',
      'id-denylist': ['error', 'e'],
      'no-underscore-dangle': 'off',
      'no-restricted-exports': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-throw-literal': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/lines-between-class-members': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          caughtErrors: 'none',
        },
      ],

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',

      'react/no-unknown-property': [
        'error',
        {
          ignore: ['sx', 'fill-rule', 'clip-rule'],
        },
      ],

      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.js', '.tsx'],
        },
      ],

      'react/jsx-fragments': 'off',
      'react/function-component-definition': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',

      'react-hooks/exhaustive-deps': [
        'error',
        {
          additionalHooks: '(useEnhancedEffect|useIsoLayoutEffect)',
        },
      ],

      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-cycle': 'off',
      'import/extensions': 'off',
      'import/no-duplicates': 'off',
      'import/order': 'off',
      'import/no-self-import': 'off',
      'import/no-useless-path-segments': 'off',
      'import/no-relative-packages': 'off',
      'import/no-named-as-default': 'off',

      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['to'],
          aspects: ['noHref', 'invalidHref', 'preferButton'],
        },
      ],

      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          assert: 'either',
        },
      ],

      'jsx-a11y/no-autofocus': 'off',

      'no-irregular-whitespace': [
        'warn',
        {
          skipJSXText: true,
          skipStrings: true,
        },
      ],

      'react/no-unescaped-entities': [
        'warn',
        {
          forbid: ['>', '}'],
        },
      ],

      'react/jsx-no-useless-fragment': [
        'error',
        {
          allowExpressions: true,
        },
      ],

      'no-console': 'off',
      'no-restricted-syntax': 'off',
      'no-await-in-loop': 'off',
      'consistent-return': 'off',
    },
  },
  {
    ignores: [
      '**/node_modules/',
      '**/dist/',
      '**/build/',
      '**/coverage/',
      '**/*.min.js',
      '**/.next/',
      '**/.cache/',
      '**/public/',
      '**/cli/',
      '**/lib/',
      '**/scripts/',
      '**/*.json',
      'packages/react-legacy/**/*',
    ],
  },
  {
    files: ['**/*.mjs'],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'always',
          mjs: 'always',
        },
      ],
      'no-underscore-dangle': 'off',
    },
  },
  {
    files: ['**/__tests__/**/*', '**/*.test.*', '**/*.spec.*'],

    languageOptions: {
      globals: {
        ...globals.jest,
        expect: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        vi: 'readonly',
      },
      parserOptions: {
        project: null,
      },
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-useless-constructor': 'off',
      'lines-between-class-members': 'off',
    },
  },
  {
    files: ['**/*.stories.*'],

    languageOptions: {
      parserOptions: {
        project: null,
      },
    },

    rules: {
      'import/no-extraneous-dependencies': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/src/test/**/*'],

    languageOptions: {
      parserOptions: {
        project: null,
      },
    },

    rules: {
      'import/no-extraneous-dependencies': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: [
      '**/vite.config.*',
      '**/rollup.config.*',
      '**/webpack.config.*',
      '**/*.config.*',
      '**/.storybook/**/*',
      '**/.babelrc.js',
    ],

    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        project: null,
      },
    },

    rules: {
      'import/no-extraneous-dependencies': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-unresolved': 'off',
      'no-use-before-define': 'off',
      'no-shadow': 'off',
      'func-names': 'off',
    },
  },
  {
    files: ['packages/react-legacy/**/*'],

    rules: {
      'react-hooks/exhaustive-deps': 'off',
      'react/destructuring-assignment': 'off',
      '@typescript-eslint/no-redeclare': 'off',
      'id-denylist': 'off',
    },
  },
  {
    ignores: [
      '**/.git',
      '**/node_modules/',
      '**/.pnpm-store/',
      '**/.nx',
      '**/dist/',
      '**/build/',
      '**/out/',
      '**/.next/',
      '**/.output/',
      '**/storybook-static/',
      '**/dist-ssr',
      '**/.cache/',
      '.nx/cache/',
      '**/.vite/',
      '**/.npm',
      '**/logs',
      '**/*.log',
      '**/npm-debug.log*',
      '**/yarn-debug.log*',
      '**/yarn-error.log*',
      '**/pnpm-debug.log*',
      '**/lerna-debug.log*',
      '**/coverage/',
      '**/*.lcov',
      '**/.nyc_output/',
      '**/test-results/',
      'cypress/screenshots/',
      'cypress/videos/',
      '**/.eslintcache',
      '**/.stylelintcache',
      '**/*.tsbuildinfo',
      '**/*.tgz',
      '**/.yarn-integrity',
      '**/.env',
      '**/.env.development.local',
      '**/.env.test.local',
      '**/.env.production.local',
      '**/.env.local',
      '**/.DS_Store',
      '**/.DS_Store?',
      '**/._*',
      '**/.Spotlight-V100',
      '**/.Trashes',
      '**/.AppleDouble',
      '**/.LSOverride',
      '**/ehthumbs.db',
      '**/Thumbs.db',
      '**/Desktop.ini',
      '**/*.local',
      '**/.vscode/',
      '!.vscode/extensions.json',
      '**/.vscode-test',
      '**/.idea/',
      '**/*.swp',
      '**/*.swo',
      '**/*~',
      '**/tmp/',
      '**/temp/',
      '.yarn/cache',
      '.yarn/unplugged',
      '.yarn/build-state.yml',
      '.yarn/install-state.gz',
      '**/.pnp.*',
      '**/ios/',
      '**/android/',
      '**/.expo/',
      'docs/_build/',
      '**/*.mov',
      '**/*.mp4',
      '**/*.avi',
      '**/*.mkv',
      '**/*.wmv',
      '**/*.flv',
      '**/*.webm',
      '**/*.m4v',
      '**/*.psd',
      '**/*.ai',
      '**/*.eps',
      '**/*.pdf',
      '**/*.suo',
      '**/*.ntvs*',
      '**/*.njsproj',
      '**/*.sln',
      '**/*.zip',
      '**/*.tar.gz',
      '**/*.rar',
      '**/*.7z',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/pnpm-lock.yaml',
      'lib',
      '**/debug-storybook.log',
      '**/catalog-info.yaml',
      '**/.github',
      '**/.husky',
      '**/.tf',
    ],
  },
];
