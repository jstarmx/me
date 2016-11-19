const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Store = require('../app/scripts/flux/store');
const Actions = require('../app/scripts/flux/actions');
const Gallery = require('../app/scripts/components/gallery');

const Pages = {
  gallery (req, res) {
    function render () {
      return res.render('gallery', {
        body: ReactDOMServer.renderToString(<Gallery />),
        preloadedState: Store.get('photos'),
      });
    };

    if (Store.has('photos')) {
      return render();
    } else {
      Actions.fetchPhotos();
      Store.addChangeListener(render);
    }
  },
};

module.exports = Pages;
