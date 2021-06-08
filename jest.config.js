module.exports = {

  // clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*index.ts',
    '!<rootDir>/src/**/*protocols.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/infra/db/**',
    '!<rootDir>/src/domain/models/**'],

  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: ['interfaces'],

  // coverageProvider: 'v8',

  roots: [
    '<rootDir>/src'
  ],

  testEnvironment: 'node',

  transform: {
    '.+\\.ts$': 'ts-jest'
  },

  watchPathIgnorePatterns: ['globalConfig']

}
