const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/api(.*)$': '<rootDir>/src/api/$1',
    '^@/components(.*)$': '<rootDir>/src/components/$1',
    '^@/features(.*)$': '<rootDir>/src/features/$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks/$1',
    '^@/pages(.*)$': '<rootDir>/src/pages/$1',
    '^@/store(.*)$': '<rootDir>/src/store/$1',
    '^@/styles(.*)$': '<rootDir>/src/styles/$1',
    '^@/utils(.*)$': '<rootDir>/src/utils/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
