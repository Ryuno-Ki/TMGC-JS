import { join } from 'path'

import commonjs from 'rollup-plugin-commonjs'
import copy from 'rollup-plugin-copy'
import eslint from 'rollup-plugin-eslint'
import image from 'rollup-plugin-image'
import coverage from 'rollup-plugin-istanbul'
import livereload from 'rollup-plugin-livereload'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import resolve from 'rollup-plugin-node-resolve'
import scss from 'rollup-plugin-scss'
import serve from 'rollup-plugin-serve'

const copyOptions = {
  'src/index.html': 'dist/index.html',
  'src/img/chars/00/hatch.gif': 'dist/img/chars/00/hatch.gif',
}

const coverageOptions = {
  exclude: [
    'test/*.js',
  ]
}

const eslintOptions = {
  exclude: [
    'node_modules/**',
    'src/img/**'
  ]
}

const livereloadOptions = {
  watch: 'dist'
}

const resolveOptions = {
  browser: true
}

const scssOptions = {
  output: 'dist/app.css'
}

const serveOptions = {
  contentBase: 'dist',
  port: 8080,
}

const plugins = [
  copy(copyOptions),
  scss(scssOptions),
  globals(),
  builtins(),
  resolve(resolveOptions),
  commonjs(),
  eslint(eslintOptions),
  coverage(coverageOptions),
  image(),
  serve(serveOptions),
  livereload(livereloadOptions),
]

export function getDevConfig() {
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
