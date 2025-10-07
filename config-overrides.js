const path = require('path');

module.exports = function override(config, env) {
  // 支持可选链语法（?.）
  config.module.rules.forEach(rule => {
    if (rule.oneOf) {
      rule.oneOf.forEach(loader => {
        if (loader.loader && loader.loader.includes('babel-loader')) {
          loader.options.plugins = [
            ...(loader.options.plugins || []),
            '@babel/plugin-proposal-optional-chaining',
            '@babel/plugin-proposal-nullish-coalescing-operator'
          ];
        }
      });
    }
  });

  // 加入路径别名支持：~ 映射到 src/
  config.resolve.alias['~'] = path.resolve(__dirname, 'src');

  return config;
};
