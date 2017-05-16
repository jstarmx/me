import React from 'react';
import PropTypes from 'prop-types';

const Gallery = ({ images }) => (
  <main className="gallery">
    { images.map(section =>
      <section className="gallery__section" key={ section.title }>
        <h2>{ section.title }</h2>
        <ul className="gallery__images">
          { section.images.map(image =>
            <li
              className="thumb"
              style={ { backgroundImage: `url("${image.thumb}")` } }
              key={ image.path }
            >
              <a
                className="thumb__link"
                href={ image.path }
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="thumb__title">{ image.title }</span>
              </a>
            </li>
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
