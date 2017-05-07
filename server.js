require('babel-register');
const express = require('express');

const app = express();

const Pages = require('./lib/pages');
const Paths = require('./lib/paths');

app.set('port', (process.env.PORT || 5000));
app.set('views', Paths.views);
app.set('view engine', 'ejs');
app.use(express.static(Paths.build));

app.get('/', (req, res) => Pages.home(req, res));
app.get('/dev', (req, res) => Pages.dev(req, res));
app.get('/snap', (req, res) => Pages.gallery(req, res));

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port')); // eslint-disable-line no-console
});

module.exports = app;
