#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const pkgUp = require('pkg-up')

const ESLINTRC_YAML_CONTENT = `
const rules = {
}
module.exports = {
  extends: '@nickwang',
  rules,
}
`

const ESLINT_IGNORE_CONTENT = `
# don't ever lint node_modules
node_modules
# don't lint build output (make sure it's set to your correct build folder name)
dist
# don't lint nyc coverage output
coverage
`
async function main() {
  const cwd = path.join(__dirname, '..', '..')
  const pkgFile = await pkgUp({ cwd })
  if (!pkgFile) {
    return 0
  }
  const pkgDir = path.dirname(pkgFile)

  const eslintRcJsFile = path.join(pkgDir, '.eslintrc.js')

  if (!fs.existsSync(eslintRcJsFile)) {
    console.info(`@juzibot/eslint-config: auto generated ${eslintRcJsFile}`)
    fs.writeFileSync(eslintRcJsFile, ESLINTRC_YAML_CONTENT)
  }

  const eslintIgnoreFile = path.join(pkgDir, '.eslintignore')
  if (!fs.existsSync(eslintIgnoreFile)) {
    fs.writeFileSync(eslintIgnoreFile, ESLINT_IGNORE_CONTENT)
  }

  // remove tslint.json
  const tslintJson = path.join(pkgDir, 'tslint.json')
  if (fs.existsSync(tslintJson)){
    fs.unlinkSync(tslintJson);
  }

  return 0
}

main()
  .then(process.exit)
  .catch(e => {
    console.info(e)
    process.exit(1)
  })