import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import base from './webpack.base';
const postcssConfig = require('./postcssConfig');
import { getProjectPath } from '../utils/projectHelper';

const config: webpack.Configuration = {
  mode: 'production',
  entry: {
    site: getProjectPath('site', 'index'),
  },
  resolve: {
    alias: {
      components: getProjectPath('components'),
    },
  },
  output: {
    path: getProjectPath('docs'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: Object.assign({}, postcssConfig, { sourceMap: true }),
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'tyche-ui',
      template: getProjectPath('site', 'index.html'),
      favicon: getProjectPath('site', 'tycheUI.png'),
    }),
  ],
};

export default webpackMerge(base, config);
