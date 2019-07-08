module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  verbose: true,
  // collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    '!components/index.{ts,tsx}',
    '!components/*/style/index.tsx',
    '!components/style/index.tsx',
    '!components/*/locale/index.tsx',
    '!components/*/__tests__/**/type.tsx',
    '!components/**/*/interface.{ts,tsx}',
  ],
  transformIgnorePatterns: ['/node_modules/(?!(lodash-es|fecha)/)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'md'],
  setupFiles: ['./tests/setup.js'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
    transform: {
      '^.+\\.(js|jsx|mjs)$': 'babel-jest',
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/file-mock.js',
    '\\.(css|sass|scss)$': '<rootDir>/tests/__mocks__/object-mock.js',
    '^lodash-es$': 'lodash',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: [`<rootDir>/components/**/__test__/**/*.test.(js|jsx|ts|tsx)`],
};
