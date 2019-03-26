module.exports = {
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'md'],
  // setupFiles: ['./tests/setup.js'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.test.json',
    },
  },
};
