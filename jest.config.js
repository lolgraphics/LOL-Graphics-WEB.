export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/unit/**/*.test.[jt]s?(x)'], 
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Coverage settings
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'json'],

  // Reporter configuration
  reporters: [
    'default',
    ['jest-sonar', {
      outputDirectory: 'coverage/sonar',
      outputName: 'coverage-report.xml'
    }]
  ],
};
