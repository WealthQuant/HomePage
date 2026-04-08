/* eslint-env node */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'vue/multi-word-component-names': 'off'
  },
  ignorePatterns: [
    'dist/',
    'node_modules/',
    '*.min.js',
    '*.config.js',
    '*.config.ts'
  ]
}
