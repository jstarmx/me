import React from 'react';
import PropTypes from 'prop-types';

const MenuLink = ({ active, name }) => (
  <li className="menu__item">
    <a
      className={ `menu__link ${active === name ? 'menu__link--active' : ''}` }
      href={ `/${name}` }
    >
      { name }
    </a>
  </li>
);

MenuLink.propTypes = {
  active: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

module.exports = MenuLink;
