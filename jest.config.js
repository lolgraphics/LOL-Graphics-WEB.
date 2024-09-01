export default {
  setupFilesAfterEnv: ['./src/setupTest.ts'],
  moduleNameMapper: {
    '^@Pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@Components/(.*)$': '<rootDir>/src/components/$1',
    '^@Utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/**/*.test.[jt]s?(x)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'json'],
  reporters: [
    'default',
    ['jest-sonar', {
      outputDirectory: 'coverage/sonar',
      outputName: 'coverage-report.xml',
    }],
  ],
};