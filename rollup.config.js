import { env } from 'process';

import * as devConfig from './rollup.config.dev';
import * as testConfig from './rollup.config.test';

let config;

switch (env.NODE_ENV) {
  case 'TEST':
    config = testConfig;
    break;
  default:
    config = devConfig;
}

export default config.default;
