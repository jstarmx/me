import { h, render } from 'preact';

import galleries from '../../../lib/galleries';
import Gallery from '../components/gallery';
import Lightbox from '../components/lightbox';

render(
  <Gallery images={ galleries.design } />,
  document.querySelector('#design')
);

render(
  <Lightbox />,
  document.querySelector('#lightbox')
);
