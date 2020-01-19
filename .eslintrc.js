module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  plugins: ['unicorn'],
  rules: {
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'jsx-quotes': [
      'warn',
      'prefer-single',
    ],
    'linebreak-style': ['error', 'unix'],
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-console': 'off',
    'object-curly-newline': 'off',
    'object-shorthand': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed'],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'unicorn/no-unused-properties': 'warn',
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'react': {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2017,
        project: './tsconfig.json',
      },
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        // Via https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/402#issuecomment-368305051
        // Required until https://github.com/zeit/next.js/issues/5533 is resolved
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            components: ['Link'],
            aspects: ['invalidHref', 'preferButton'],
          },
        ],
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.jsx', '.tsx'],
          },
        ],
        // Disabled until https://github.com/yannickcr/eslint-plugin-react/issues/1848 is fixed
        'react/jsx-one-expression-per-line': 'off',
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'generic',
          },
        ],
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
      settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
    },
  ],
};
