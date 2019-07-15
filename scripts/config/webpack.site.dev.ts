import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import base from './webpack.base';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { getProjectPath } from '../utils/projectHelper';

const config: webpack.Configuration = {
  mode: 'development',
  entry: {
    site: getProjectPath('site', 'index'),
  },
  resolve: {
    alias: {
      components: getProjectPath('components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'tyche-ui',
      template: getProjectPath('site', 'index.html'),
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8088,
    historyApiFallback: true,
  },
};

export default webpackMerge(base, config);
