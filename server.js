require('babel-register');

const express = require('express');
const app = express();
const Pages = require('./lib/pages');

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  return Pages.gallery(req, res);
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
