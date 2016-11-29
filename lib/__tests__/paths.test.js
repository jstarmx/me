jest.mock('path');
const path = require('path');

path.join = jest.fn();

const Paths = require('../paths');

describe('Paths', () => {
  it('creates directory paths', () => {
    expect(Object.keys(Paths)).toEqual(['build', 'scripts', 'styles', 'views']);
  });
});
