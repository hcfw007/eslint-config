import babelParser from '@babel/eslint-parser'
import js from '@eslint/js'

module.exports = [
  js.configs.recommended, {
  files: [
    'src/**/*.js'
  ],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: babelParser,
  },
  rules: {

  }
}]