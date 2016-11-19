require('babel-register');
const express = require('express');

const app = express();

const Pages = require('./lib/pages');
const path = require('path');

const PATHS = {
  build: path.join(__dirname, 'public'),
  views: path.join(__dirname, 'app', 'views'),
};

app.set('port', (process.env.PORT || 5000));
app.set('views', PATHS.views);
app.set('view engine', 'ejs');
app.use(express.static(PATHS.build));

app.get('/', (req, res) => Pages.gallery(req, res));

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port')); // eslint-disable-line no-console
});
