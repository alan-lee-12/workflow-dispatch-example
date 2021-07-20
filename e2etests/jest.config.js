module.exports = {
  verbose: true,
  preset: 'ts-jest',

  // These 2 configs allow Jest to skip subsequent `test` blocks when a prev
  // one fails.
  testRunner: 'jest-circus/runner'
}
