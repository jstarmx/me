const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  build: path.join(__dirname, 'public'),
  scripts: path.join(__dirname, 'app', 'scripts'),
  styles: path.join(__dirname, 'app', 'styles'),
  views: path.join(__dirname, 'app', 'views'),
};

const common = {
  entry: {
    app: [
      path.join(PATHS.scripts, 'app.js'),
      path.join(PATHS.styles, 'app.scss'),
    ],
    vendor: ['react'],
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: PATHS.scripts,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        include: PATHS.styles,
        loader: ExtractTextPlugin.extract('style', 'css!sass'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
  ],
};

var config;

switch (process.env.npm_lifecycle_event) {
  case 'build':
  case 'postinstall':
    config = merge(
      common,
      {
        plugins: [
          new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production'),
            },
          }),
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false,
            },
          }),
        ],
      }
    );
    break;

  case 'dev':
    config = merge(common, {});
}

module.exports = validate(config);
