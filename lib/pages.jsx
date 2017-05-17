const React = require('react');
const render = require('react-dom/server').renderToString;

const Menu = require('../app/scripts/components/menu');

export const home = (req, res) =>
  res.render('pages/home', {
    menu: render(<Menu />),
  });

export const dev = (req, res) =>
  res.render('pages/dev', {
    menu: render(<Menu horizontal active="dev" />),
  });

export const design = (req, res) =>
  res.render('pages/design', {
    menu: render(<Menu horizontal active="design" />),
  });

export const shoot = (req, res) =>
  res.render('pages/shoot', {
    menu: render(<Menu horizontal active="shoot" />),
  });
