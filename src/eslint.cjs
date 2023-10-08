// const babelParser = require('@babel/eslint-parser')
// const js = require('@eslint/js')

module.exports = {
  plugins: ['import', 'standard'],
  rules: {
    semi: [2, 'never'],
    quotes: [2, 'single'],
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'standard/array-bracket-even-spacing': [2, 'always', {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    }],
    'standard/object-curly-even-spacing': [2, 'always'],
    'comma-dangle': [2, 'only-multiline'],
  }
}