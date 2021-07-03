module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    context: 'readonly',
    Feature: 'readonly',
    Scenario: 'readonly',
    actor: 'readonly',
    given: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'react/jsx-props-no-spreading': 'off',
    'linebreak-style': 0,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-curly-newline': 0,
    'no-return-await': 0,
    'import/prefer-default-export': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': 0,
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
          webpack: {
            config: 'webpack.config.js',
          },
        },
      },
    },
  ],
};
