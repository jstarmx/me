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

const express = require('express');
const Pages = require('../lib/pages');
const Paths = require('../lib/paths');

express.static = jest.fn(path => path);
Paths.views = 'views';
Paths.build = 'build';
Pages.gallery = jest.fn();
console.log = jest.fn(); // eslint-disable-line no-console
const res = {};
res.render = jest.fn();

const app = require('../server.js');

describe('Server', () => {
  it('receives the correct settings', () => {
    expect(app.set).toBeCalledWith('port', '1234');
    expect(app.set).toBeCalledWith('views', 'views');
    expect(app.set).toBeCalledWith('view engine', 'ejs');
    expect(app.use).toBeCalledWith('build');
  });

  describe('routing', () => {
    it('serves the homepage', () => {
      navigate['/']('req', res);
      expect(res.render).toBeCalledWith('pages/home');
    });

    it('serves the gallery page', () => {
      navigate['/snap']('req', res);
      expect(Pages.gallery).toBeCalledWith('req', res);
    });
  });

  describe('running', () => {
    it('reports the port it is running on', () => {
      expect(console.log).toBeCalledWith('Node app is running on port', '1234'); // eslint-disable-line no-console
    });
  });
});
