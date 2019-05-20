const fs = require('fs')
const path = require('path')
const ora = require('ora')
const { rollup } = require('rollup')
const commenjs = require('rollup-plugin-commonjs')
const { terser } = require('rollup-plugin-terser')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

let building = ora('building...')

async function buildES() {
  try {
    const result = await rollup({
      input: path.resolve(rootPath, ''),
      // plugins: [
      //   commenjs(),
      //   terser(),
      // ],
      external: ['tslib']
    })
    await result.write({
      file: `lib/${pkg.name}.back.js`,
      format: 'esm'
    })
  } catch (e) {
    throw e
  }
}

async function build() {
  if (!fs.existsSync(path.resolve(__dirname, '../', 'lib'))) {
    fs.mkdirSync(path.resolve(__dirname, '../', 'lib'))
  }
  building.start()
  Promise.all([
    await buildES()
    // await buildLib(),
  ])
    .then(([result1, result2, result3]) => {
      building.stop()
    })
    .catch(e => {
      building.stop()
      throw e
    })
}

build()
