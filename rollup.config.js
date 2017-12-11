import { env } from 'process';

import { getDevConfig } from './rollup.config.dev';
import { getTestConfig } from './rollup.config.test';

let config;

switch (env.NODE_ENV) {
  case 'TEST':
    config = getTestConfig();
    break;
  default:
    config = getDevConfig();
}

export default config;
