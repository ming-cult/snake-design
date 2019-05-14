module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^components$': '<rootDir>/components/index.tsx',
    '^components(.*)$': '<rootDir>/components/$1'
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/es/'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  setupFilesAfterEnv: ['react-testing-library/cleanup-after-each', 'jest-dom/extend-expect'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  setupFiles: ['<rootDir>/setup.js']
}
