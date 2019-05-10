const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('../webpack.config');

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    site: path.resolve(__dirname, './index.tsx'),
  },
  output: {
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, '../components'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'tyche-ui',
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: '8088',
    historyApiFallback: true,
    noInfo: true,
    progress: true,
  },
});
