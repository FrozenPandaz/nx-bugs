const baseConfig = require('../eslint.base.config.js');
module.exports = [
  ...baseConfig,
  {
    files: ['app2/**/*.ts', 'app2/**/*.tsx', 'app2/**/*.js', 'app2/**/*.jsx'],
    rules: {},
  },
  {
    files: ['app2/**/*.ts', 'app2/**/*.tsx'],
    rules: {},
  },
  {
    files: ['app2/**/*.js', 'app2/**/*.jsx'],
    rules: {},
  },
  ...compat.extends('plugin:@nx/react'),
];
