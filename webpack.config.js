const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const validate = require('webpack-validator');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const PATHS = {
  build: path.join(__dirname, 'public'),
  scripts: path.join(__dirname, 'app', 'scripts'),
  styles: path.join(__dirname, 'app', 'styles'),
  views: path.join(__dirname, 'app', 'views'),
};

const common = {
  entry: {
    app: [
      path.join(PATHS.scripts, 'app.jsx'),
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
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
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

let config;

switch (process.env.npm_lifecycle_event) {
  case 'build':
  case 'postinstall':
    config = merge(
      common,
      {
        devtool: 'source-map',
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

  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map',
        module: {
          preLoaders: [
            {
              test: /\.jsx?$/,
              loaders: ['eslint'],
            },
          ],
        },
        plugins: [
          new StyleLintPlugin({
            context: PATHS.styles,
            syntax: 'scss',
          }),
          new WebpackNotifierPlugin(),
        ],
        postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
      }
    );
}

module.exports = validate(config);
