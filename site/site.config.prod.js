const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('../webpack.config');

module.exports = Object.assign({}, base, {
  mode: 'production',
  entry: {
    site: path.resolve(__dirname, './index'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, '../components'),
    },
  },
  output: {
    path: path.resolve(__dirname, '../docs'),
  },
  plugins: [
    ...base.plugins,
    new HtmlWebpackPlugin({
      title: 'tyche-ui',
      template: path.resolve(__dirname, './index.html'),
      favicon: path.resolve(__dirname, './tycheUI.png'),
    }),
  ],
});
