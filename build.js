const fs = require('fs')
const path = require('path')

const docDir = path.resolve(__dirname, './doc')
const buildDir = path.resolve(__dirname, './build')

try {
  fs.rmSync(docDir, { recursive: true, force: true })
  fs.renameSync(buildDir, docDir)
} catch (err) {
  console.log(err)
}
