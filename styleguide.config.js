/* eslint-disable */
const path = require('path');
module.exports = {
  // set your styleguidist configuration here
  title: 'Base Components',
  defaultExample: true,
  components: 'src/components/**/Base[A-Z]*.vue',
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  webpackConfig: process.env.NODE_ENV === 'production' ? require('./build/webpack.prod.conf.js') : require('./build/webpack.dev.conf.js'),
  usageMode: 'expand',
  require: [
    path.join(__dirname, './src/styles/app.scss')
  ],
  // these are components used internally however not included in the package
  ignore: [
    'src/components/BaseBox/*',
    'src/components/BaseCheckBox/*',
    'src/components/BaseToolTip/*',
    'src/components/BaseChip/*',
  ],
  dangerouslyUpdateWebpackConfig(webpackConfig) {
    let filteredFirstHMR = false;

    webpackConfig.plugins = webpackConfig.plugins.filter(plugin => {
      if (plugin.constructor.name === 'HotModuleReplacementPlugin' && !filteredFirstHMR) {
        filteredFirstHMR = true;
        return false;
      }

      return true;
    });

    return webpackConfig;
  }
}
