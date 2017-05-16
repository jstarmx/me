import React from 'react';
import { render } from 'react-dom';

import galleries from '../../../lib/galleries';
import Gallery from '../components/gallery2';

render(
  <Gallery images={ galleries.design } />,
  document.querySelector('#design')
);
