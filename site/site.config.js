const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const markdownRenderer = require('react-markdown-reader').renderer;
const base = require('../webpack.config');
const webpack = require('webpack');

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    site: path.resolve(__dirname, './index'),
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
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: false,
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              pedantic: true,
              renderer: markdownRenderer([
                'javascript',
                'bash',
                'xml',
                'css',
                'less',
                'json',
                'diff',
                'typescript',
              ]),
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'tyche-ui',
      template: path.resolve(__dirname, './index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    host: '0.0.0.0',
    port: '8088',
    historyApiFallback: true,
    noInfo: true,
    progress: true,
  },
});
