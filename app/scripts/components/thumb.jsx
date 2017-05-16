import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindAll } from 'lodash';

import { setLightbox } from '../flux/actions';

class Thumb extends Component {
  constructor() {
    super();
    bindAll(this, '_click');
  }

  _click(e) {
    e.preventDefault();
    setLightbox(this.props.path);
  }

  render() {
    const { thumb, path, title } = this.props;

    return (
      <li
        className="thumb"
        style={ { backgroundImage: `url("${thumb}")` } }
        key={ path }
      >
        <a
          className="thumb__link"
          href={ path }
          onClick={ this._click }
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="thumb__title">{ title }</span>
        </a>
      </li>
    );
  }
}

Thumb.propTypes = {
  path: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Thumb;
