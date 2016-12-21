const path = require('path');

const root = path.join(__dirname, '..');

module.exports = {
  build: path.join(root, 'public'),
  images: path.join(root, 'app', 'images'),
  scripts: path.join(root, 'app', 'scripts'),
  styles: path.join(root, 'app', 'styles'),
  views: path.join(root, 'app', 'views'),
};
