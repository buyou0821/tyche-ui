const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './components/index.ts',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'tyche-ui',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
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
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
