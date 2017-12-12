import { join } from 'path'

import url from 'rollup-plugin-url'

const urlOptions = {
  include: [ 'src/img/**/*.gif' ]
}

const plugins = [
  url(urlOptions)
]

function getTestConfig() {
  return [
    'avatar',
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
    }
  })
}

export default getTestConfig()
