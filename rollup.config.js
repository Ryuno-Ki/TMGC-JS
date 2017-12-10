import { join } from 'path';

const plugins = [];

export default [
  'food',
  'pet'
].map((filename) => {
  return {
    input: join(__dirname, 'src', 'js', `${filename}.js`),
    output: {
      file: join(__dirname, 'test', `${filename}Model.js`),
      format: 'cjs',
      name: 'App',
    },
    plugins: plugins
  };
});
