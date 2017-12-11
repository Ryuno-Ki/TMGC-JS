import { join } from 'path';

import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import eslint from 'rollup-plugin-eslint';
import coverage from 'rollup-plugin-istanbul';
import livereload from 'rollup-plugin-livereload';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';

const copyOptions = {
  "src/index.html": "dist/index.html",
  "src/img/chars/00/main.gif": "dist/img/chars/00/main.gif",
  "src/img/chars/00/hatch.gif": "dist/img/chars/00/hatch.gif",
  "src/img/chars/01/main.gif": "dist/img/chars/01/main.gif",
};

const coverageOptions = {
  exclude: [
    "test/*.js",
  ]
};

const livereloadOptions = {
  watch: 'dist'
};

const serveOptions = {
  contentBase: 'dist',
  port: 8080,
};

const plugins = [
  copy(copyOptions),
  globals(),
  builtins(),
  resolve(),
  commonjs(),
  eslint(),
  coverage(coverageOptions),
  serve(serveOptions),
  livereload(livereloadOptions),
];

export default {
  input: join(__dirname, 'src', 'index.js'),
  output: {
    file: join(__dirname, 'dist', 'app.js'),
    format: 'iife',
    name: 'App',
  },
  plugins: plugins
};
