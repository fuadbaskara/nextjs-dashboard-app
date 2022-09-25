module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:import/typescript',
  ],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  plugins: ['testing-library', 'prettier'],
  rules: {
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'arrow-body-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': 'off',
    'implicit-arrow-linebreak': 'off',
    '@typescript-eslint/indent': 'off',
    'import/extensions': 'off',
    'object-curly-newline': 'off',
  },
};
