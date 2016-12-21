jest.mock('path');
const path = require('path');

path.join = jest.fn();
const expectedPaths = ['build', 'images', 'scripts', 'styles', 'views'];

const Paths = require('../paths');

describe('Paths', () => {
  it('creates directory paths', () => {
    expect(Object.keys(Paths)).toEqual(expectedPaths);
  });
});
