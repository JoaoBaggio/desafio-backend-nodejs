module.exports = {

  // clearMocks: true,

  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/**/index.ts'],

  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: ['interfaces', '<rootDir>/src/presentation/controllers/signup/signup-protocols.ts'],

  // coverageProvider: 'v8',

  roots: [
    '<rootDir>/src'
  ],

  testEnvironment: 'node',

  transform: {
    '.+\\.ts$': 'ts-jest'
  }

}
