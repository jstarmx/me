import React, { Component } from 'react';
import { bindAll } from 'lodash';

import Store from '../flux/store';

class Lightbox extends Component {
  constructor() {
    super();
    this.state = { url: null };
    bindAll(this, '_click', '_change');
  }

  componentDidMount() {
    Store.addChangeListener(this._change);
  }

  _change() {
    this.setState({ url: Store.get('lightboxUrl') });
  }

  _click(e) {
    if (!e.target.classList.contains('lightbox__image')) {
      this.setState({ url: null });
    }
  }

  render() {
    return (
      <div>
        { this.state.url &&
          <button className="lightbox__overlay" onClick={ this._click }>
            <img src={ this.state.url } className="lightbox__image" role="presentation" />
          </button>
        }
      </div>
    );
  }
}

export default Lightbox;
