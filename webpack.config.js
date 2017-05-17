const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const paths = require('./lib/paths');
const webpack = require('webpack');

const config = {
  entry: {
    app: path.join(paths.STYLES, 'app.scss'),
    design: path.join(paths.SCRIPTS, 'pages', 'design.jsx'),
    paint: path.join(paths.SCRIPTS, 'pages', 'paint.jsx'),
  },
  output: {
    path: paths.BUILD,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: paths.STYLES,
        loader: 'import-glob-loader',
        enforce: 'pre',
      },
      {
        test: /\.jsx?$/,
        include: paths.SCRIPTS,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        include: paths.STYLES,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new CopyWebpackPlugin([{ from: paths.IMAGES, to: paths.BUILD }]),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
  ],
};

module.exports = config;
