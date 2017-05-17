require('babel-register');
const express = require('express');

const app = express();

const Pages = require('./lib/pages');
const paths = require('./lib/paths');

app.set('port', (process.env.PORT || 5000));
app.set('views', paths.VIEWS);
app.set('view engine', 'ejs');
app.use(express.static(paths.BUILD));

app.get('/', (req, res) => Pages.home(req, res));
app.get('/dev', (req, res) => Pages.dev(req, res));
app.get('/design', (req, res) => Pages.design(req, res));
app.get('/shoot', (req, res) => Pages.shoot(req, res));
app.get('*', (req, res) => res.redirect('/'));

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
