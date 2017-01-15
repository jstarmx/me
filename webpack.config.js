const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const Paths = require('./lib/paths');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const validate = require('webpack-validator');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const common = {
  entry: {
    app: path.join(Paths.styles, 'app.scss'),
    snap: path.join(Paths.scripts, 'pages', 'snap.jsx'),
    vendor: ['react', 'react-dom', 'superagent'],
  },
  output: {
    path: Paths.build,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    preLoaders: [
      {
        test: /\.scss$/,
        loader: 'import-glob-loader',
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: Paths.scripts,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        include: Paths.styles,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new CopyWebpackPlugin([{ from: Paths.images, to: Paths.build }]),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
  ],
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
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
            configFile: './.stylelintrc.json',
            context: Paths.styles,
            syntax: 'scss',
          }),
          new WebpackNotifierPlugin(),
        ],
      }
    );
}

module.exports = validate(config);
