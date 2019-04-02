const base = require('./.jest');

module.exports = Object.assign({}, base, {
  collectCoverage: false,
  reporters: ['default', 'jest-junit'],
});
