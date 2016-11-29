jest.mock('autoprefixer');
jest.mock('extract-text-webpack-plugin');
// jest.mock('webpack-merge');
jest.mock('path');
jest.mock('../lib/paths');
jest.mock('stylelint-webpack-plugin');
jest.mock('webpack-validator', () => jest.fn((config) => config));
jest.mock('webpack', () => jest.fn(() => {
  return {
    optimize: {
      CommonsChunkPlugin: function () {}
    }
  }
})());
jest.mock('webpack-notifier');

// const path = require('path');
// const ExtractTextPlugin = require('stylelint-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const validate = require('webpack-validator');

//
// path.join = jest.fn();
// const Paths = {
//   build: () => jest.fn(),
//   scripts: () => jest.fn(),
//   styles: () => jest.fn(),
// };
// ExtractTextPlugin.extract = jest.fn();
// const webpack = {};
// webpack.optimize = {
//   CommonsChunkPlugin: function () {},
//   UglifyJsPlugin: () => jest.fn(),
// };

const config = require('../webpack.config');

describe('Webpack config', () => {
  it('does something', ()=>{
    expect(config).toEqual('goat');
  });
});
