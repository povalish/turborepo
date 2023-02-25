/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
  resetMocks: false,
  testPathIgnorePatterns: ['<rootDir>/e2e'],
};

const config = async () => ({
  ...customJestConfig,
  moduleNameMapper: {
    // Jest overrides svg mapper, we should keep it first
    '\\.svg': '<rootDir>/src/modules/testing/mocks/svg.ts',
    ...customJestConfig.moduleNameMapper,
  },
});

module.exports = config;
