import React from 'react';
import PropTypes from 'prop-types';

import Thumb from './thumb';

const Gallery = ({ images }) => (
  <main className="gallery">
    { images.map(section =>
      <section className="gallery__section" key={ section.title }>
        <h2>{ section.title }</h2>
        <ul className="gallery__images">
          { section.images.map(image =>
            <Thumb
              path={ image.path }
              thumb={ image.thumb }
              title={ image.title }
              key={ image.path }
            />
          ) }
        </ul>
      </section>
    ) }
  </main>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      thumb: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
  })),
};

export default Gallery;
