module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
    '\\.js$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
};