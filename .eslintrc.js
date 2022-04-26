module.exports = {
    root: true,
    env: {
      node: true,
      browser: true,
      es6: true,
    },
    'extends': [
      "eslint:recommended",
      'plugin:vue/vue3-essential',
      "plugin:@typescript-eslint/eslint-recommended",
      '@vue/typescript/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  }
  