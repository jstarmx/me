const Actions = require('../app/scripts/flux/actions');
const Api = require('../app/scripts/api');
const Gallery = require('../app/scripts/components/gallery');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Store = require('../app/scripts/flux/store');

module.exports = {
  gallery (req, res) {
    function render () {
      return res.render('pages/snap', {
        body: ReactDOMServer.renderToString(<Gallery />),
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
