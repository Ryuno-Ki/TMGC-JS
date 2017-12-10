import { join } from 'path';

import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import resolve from 'rollup-plugin-node-resolve';

const plugins = [
  globals(),
  builtins(),
  resolve(),
  commonjs()
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
