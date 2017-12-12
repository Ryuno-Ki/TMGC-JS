import { join } from 'path'

import commonjs from 'rollup-plugin-commonjs'
import copy from 'rollup-plugin-copy'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import resolve from 'rollup-plugin-node-resolve'
import scss from 'rollup-plugin-scss'
import url from 'rollup-plugin-url'

const copyOptions = {
  'src/index.html': 'dist/index.html',
  'src/img/chars/00/hatch.gif': 'dist/img/chars/00/hatch.gif',
}

const urlOptions = {
  include: [ 'src/img/**/*.gif' ]
}

const resolveOptions = {
  browser: true
}

const scssOptions = {
  output: 'dist/app.css'
}

const plugins = [
  copy(copyOptions),
  scss(scssOptions),
  globals(),
  builtins(),
  resolve(resolveOptions),
  commonjs(),
  url(urlOptions),
]

function getProdConfig() {
 return {
    input: join(__dirname, 'src', 'index.js'),
    output: {
      file: join(__dirname, 'dist', 'app.js'),
      format: 'iife',
      name: 'App',
    },
    plugins: plugins
  }
}

export default getProdConfig()
