import { h, render } from 'preact';

import { paint } from '../../../lib/galleries';
import Gallery from '../components/gallery';
import Lightbox from '../components/lightbox';

render(
  <Gallery images={ paint } />,
  document.querySelector('#paint')
);

render(
  <Lightbox />,
  document.querySelector('#lightbox')
);
