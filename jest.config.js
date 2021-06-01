module.exports = {

  // clearMocks: true,

  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/**/*index.ts', '!<rootDir>/src/**/*protocols.ts'],

  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: ['interfaces'],

  // coverageProvider: 'v8',

  roots: [
    '<rootDir>/src'
  ],

  testEnvironment: 'node',

  transform: {
    '.+\\.ts$': 'ts-jest'
  }

}
