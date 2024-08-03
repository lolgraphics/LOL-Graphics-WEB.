import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.cjs';
import devConfig from './webpack.dev.cjs';
import prodConfig from './webpack.prod.cjs';

module.exports = (env) => {
  switch (env) {
    case 'development':
      return merge(commonConfig, devConfig);
    case 'production':
      return merge(commonConfig, prodConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};
