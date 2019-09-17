module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb'],
  plugins: ['unicorn'],
  rules: {
    'arrow-parens': ['warn', 'always'],
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
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
    'operator-linebreak': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['warn', 'single'],
    'react/react-in-jsx-scope': 'off',
    'semi': ['error', 'always'],
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
        // Via https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/402#issuecomment-368305051
        // Required until https://github.com/zeit/next.js/issues/5533 is resolved
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            components: ['Link'],
            aspects: ['invalidHref', 'preferButton'],
          },
        ],
        'jsx-quotes': ['warn', 'prefer-single'],
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.jsx', '.tsx'],
          },
        ],
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
        '@typescript-eslint/no-use-before-define': 'off',
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
