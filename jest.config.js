module.exports = {

  // clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/**/*index.ts', '!<rootDir>/src/**/*protocols.ts'],

  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: ['interfaces'],

  // coverageProvider: 'v8',
  preset: '@shelf/jest-mongodb',

  roots: [
    '<rootDir>/src'
  ],

  testEnvironment: 'node',

  transform: {
    '.+\\.ts$': 'ts-jest'
  },

  watchPathIgnorePatterns: ['globalConfig']

}
