module.exports = {
  displayName: 'app1',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageDirectory: '../../coverage/apps/app1',
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular',
    '^.+\\.(mjs)$': 'jest-preset-angular',
    // '^.+\\.(mjs)$': 'babel-jest',
    // '^.+\\.(mjs)$': '@swc/jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@angular)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
