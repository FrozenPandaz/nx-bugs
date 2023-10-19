const baseConfig = require('../eslint.base.config.js');
const { FlatCompat } = require('@eslint/eslintrc');
const baseConfig = require('../eslint.config.js');
const nxEslintPlugin = require('@nx/eslint-plugin');
const js = require('@eslint/js');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});
module.exports = [
  ...baseConfig,
  ...baseConfig,
  ...compat.extends('plugin:cypress/recommended'),
  {
    files: ['e2e/**/*.js', 'e2e/**/*.jsx'],
    rules: {},
  },
  {
    files: ['e2e/**/*.ts', 'e2e/**/*.tsx', 'e2e/**/*.js', 'e2e/**/*.jsx'],
    rules: {},
  },
];
