/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@tribeplatform/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', '@tribeplatform/eslint-plugin', 'unused-imports'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    '**/dist/**',
    '**/node_modules/**',
    '**/bin/**',
    '**/stack/**',
    '**/*.generated.ts',
    'jest.config.ts',
  ],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'consistent-return': 0,
    'eol-last': 'warn',
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-default-export': 'warn',
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 'off',
    'import/no-webpack-loader-syntax': 0,
    'import/order': [
      'warn',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'object'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@tribeplatform/**/*',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
      },
    ],
    indent: 'off', // Let prettier handle this
    'max-len': [
      'warn',
      {
        code: 110,
        ignorePattern: '^\\s*(static|public|protected|private)\\s+(.+)$',
        ignoreComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-console': 1,
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    'no-unused-vars': 'off', // Handled by @typescript-eslint/no-unused-vars
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ImportDeclaration[specifiers.length = 0]',
        message: 'Empty imports are not allowed',
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'never'],
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  settings: {
    'import/ignore': ['node_modules'],
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
}
