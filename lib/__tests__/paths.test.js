const path = require('path');
const Paths = require('../paths');

const expectedPaths = {
  build: '/Users/jamesstarkie/me/public',
  scripts: '/Users/jamesstarkie/me/app/scripts',
  styles: '/Users/jamesstarkie/me/app/styles',
  views: '/Users/jamesstarkie/me/app/views',
}

describe('Paths', () => {
  it('creates directory paths', () => {
    expect(Paths).toEqual(expectedPaths);
  });
});
