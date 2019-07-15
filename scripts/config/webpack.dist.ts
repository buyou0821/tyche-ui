import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import base from './webpack.base';
import { getProjectPath } from '../utils/projectHelper';
const postcssConfig = require('./postcssConfig');

const config: webpack.Configuration = {
  mode: 'production',
  entry: {
    index: [getProjectPath('index')],
  },
  output: {
    filename: 'tyche.js',
    path: getProjectPath('dist'),
    library: 'tyche-ui',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
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
};

export default webpackMerge(base, config);
