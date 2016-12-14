const _ = require('lodash/fp');
const path = require('path');
const genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
const wixNodeBuildConfig = require('wix-node-build/config/webpack.config.storybook');

module.exports = (config, env) => {
  return _.merge(wixNodeBuildConfig(genDefaultConfig(config, env)), {
    resolve: {
      alias: {
        'wix-style-react': path.resolve(__dirname, '../src')
      }
    }
  });
};
