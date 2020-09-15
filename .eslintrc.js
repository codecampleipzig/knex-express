module.exports = {
  env: {
    es6: true,
    node: true,
    'cypress/globals': true
  },
  extends: 'standard',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
  },
  plugins: [
    'cypress'
  ]
}
