module.exports = () => ({
  preset: 'react-native',
  rootDir: '.',
  cacheDirectory: '.jest/cache',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community)',
  ],
  testMatch: ['**/src/**/*.(test|spec).(ts|tsx|js)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
});
