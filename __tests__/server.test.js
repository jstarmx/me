const express = require('express');
const Pages = require('../lib/pages');
const paths = require('../lib/paths');

process.env.PORT = 1234;
const navigate = {};

jest.mock('babel-register');
jest.mock('../lib/pages');
jest.mock('../lib/paths');
jest.mock('express', () => (() =>
  ({
    set: jest.fn(),
    use: jest.fn(),
    listen: jest.fn((object, callback) => callback()),
    get: jest.fn((string, callback) => {
      if (callback) {
        navigate[string] = callback;
      }
      if (string === 'port') {
        return process.env.PORT;
      }
      return this;
    }),
  })
));

express.static = jest.fn(path => path);
paths.VIEWS = 'views';
paths.BUILD = 'build';
Pages.gallery = jest.fn();
console.log = jest.fn(); // eslint-disable-line no-console
const res = { render: jest.fn() };

const app = require('../server.js');

it('receives the correct settings', () => {
  expect(app.set.mock.calls).toEqual([
    ['port', '1234'],
    ['views', 'views'],
    ['view engine', 'ejs'],
  ]);
  expect(app.use).toBeCalledWith('build');
});

describe('routing', () => {
  it('serves the homepage', () => {
    navigate['/']('req', res);
    expect(Pages.home).toBeCalledWith('req', res);
  });

  it('serves the dev page', () => {
    navigate['/dev']('req', res);
    expect(Pages.dev).toBeCalledWith('req', res);
  });

  it('serves the design page', () => {
    navigate['/design']('req', res);
    expect(Pages.design).toBeCalledWith('req', res);
  });
});

describe('running', () => {
  it('reports the port it is running on', () => {
    // eslint-disable-next-line no-console
    expect(console.log).toBeCalledWith('Node app is running on port', '1234');
  });
});
