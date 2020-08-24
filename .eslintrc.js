module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'no-use-before-define': 0,
    'comma-dangle': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'react/button-has-type': 0,
    'arrow-parens': 0,
    'react/jsx-one-expression-per-line': 0,
    'class-methods-use-this': 0,
    'no-shadow': 0,
  }
};
