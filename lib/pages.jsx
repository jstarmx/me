const Actions = require('../app/scripts/flux/actions');
const Api = require('../app/scripts/api');
const Gallery = require('../app/scripts/components/gallery');
const Menu = require('../app/scripts/components/menu');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Store = require('../app/scripts/flux/store');

module.exports = {
  home (req, res) {
    return res.render('pages/home', {
      menu: ReactDOMServer.renderToString(<Menu />),
    });
  },

  dev (req, res) {
    return res.render('pages/dev', {
      menu: ReactDOMServer.renderToString(<Menu horizontal active="dev" />),
    });
  },

  gallery (req, res) {
    function render () {
      return res.render('pages/snap', {
        body: ReactDOMServer.renderToString(<Gallery />),
        menu: ReactDOMServer.renderToString(<Menu horizontal />),
        preloadedState: Store.get('photos'),
      });
    }

    if (Store.has('photos')) {
      return render();
    }

    Actions.fetch(Api.flickr);
    return Store.addChangeListener(render);
  },
};
