import { h } from 'preact';
import PropTypes from 'prop-types';

import Thumb from './thumb';

const Gallery = ({ images }) => (
  <main className="gallery">
    { images.map(section =>
      <section className="gallery__section" key={ section.id }>
        { section.title &&
          <h2 className="gallery__heading">{ section.title }</h2>
        }
        <ul className="gallery__images">
          { section.images.map(image =>
            <Thumb
              path={ image.path }
              thumb={ image.thumb || image.path }
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
    title: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      thumb: PropTypes.string,
      title: PropTypes.string.isRequired,
    })).isRequired,
  })),
};

module.exports = Gallery;
