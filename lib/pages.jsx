const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Menu = require('../app/scripts/components/menu');

export const home = (req, res) =>
  res.render('pages/home', {
    menu: ReactDOMServer.renderToString(<Menu />),
  });

export const dev = (req, res) =>
  res.render('pages/dev', {
    menu: ReactDOMServer.renderToString(<Menu horizontal active="dev" />),
  });

export const design = (req, res) =>
  res.render('pages/design', {
    menu: ReactDOMServer.renderToString(<Menu horizontal active="design" />),
  });
