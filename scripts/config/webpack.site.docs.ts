import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { getProjectPath } from '../utils/projectHelper';
import base from './webpack.base';
const postcssConfig = require('./postcssConfig');

const config: webpack.Configuration = {
  mode: 'production',
  entry: {
    site: getProjectPath('site', 'index'),
  },
  output: {
    path: getProjectPath('docs'),
    filename: '[name].[hash].js',
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
    new MiniCssExtractPlugin({
      filename: 'tyche.[hash].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'tyche-ui',
      template: getProjectPath('site', 'index.html'),
      favicon: getProjectPath('site', 'tycheUI.png'),
    }),
  ],
};

export default webpackMerge(base, config);
