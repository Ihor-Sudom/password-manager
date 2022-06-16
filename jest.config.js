module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'tsx', 'ts'],
  moduleDirectories: ['node_modules', 'src'],
  testRegex: '__tests__/.*\\.spec\\.js$',
  setupFilesAfterEnv: ['./tools/setupTests.js'],
  collectCoverage: true,
  roots: ['<rootDir>', 'src'],
  modulePaths: ['<rootDir>', 'src'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
}
