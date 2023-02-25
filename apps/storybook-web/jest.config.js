/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js
  // and .env files in your test environment
  dir: './',
});

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

const config = async () => {
  const jestConfig = await createJestConfig(customJestConfig)();
  return {
    ...jestConfig,
    moduleNameMapper: {
      // Jest overrides svg mapper, we should keep it first
      '\\.svg': '<rootDir>/src/modules/testing/mocks/svg.ts',
      ...jestConfig.moduleNameMapper,
    },
  };
};

module.exports = config;
