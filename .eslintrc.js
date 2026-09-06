module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['jsx-a11y'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
        trailingComma: 'all',
        arrowParens: 'always',
      },
    ],
    'no-constant-condition': ['error', { checkLoops: false }],
    'react/prop-types': 'off',
    'react/display-name': 0,
    'react/jsx-filename-extension': 'off',
    'import/no-cycle': 'off',
    'import/first': 'error',
    'import/order': 'off',
    'import/newline-after-import': 'error',
    'class-methods-use-this': 0,
    'no-console': 'off',
  },
};
