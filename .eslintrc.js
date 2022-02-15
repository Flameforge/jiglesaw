module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  plugins: ['gb', 'jest'],
  extends: ['plugin:gb/recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/*.spec.ts'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
  ],
  rules: {
    'prettier/prettier': 'warn',
    '@typescript-eslint/unbound-method': 'error',
  },
};
