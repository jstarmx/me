const Actions = require('../app/scripts/flux/actions');
const Api = require('../app/scripts/api');
const Gallery = require('../app/scripts/components/gallery');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Store = require('../app/scripts/flux/store');

const Pages = {
  gallery (req, res) {
    function render () {
      return res.render('gallery', {
        body: ReactDOMServer.renderToString(<Gallery />),
        preloadedState: Store.get('photos'),
      });
    }

    if (Store.has('photos')) {
      render();
    } else {
      Actions.fetch(Api.flickr);
      Store.addChangeListener(render);
    }
  },
};

module.exports = Pages;
