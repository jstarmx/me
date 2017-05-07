import React from 'react';
import PropTypes from 'prop-types';

const MenuLink = ({ active, name }) => (
  <a
    className={`menu__link ${active === name ? 'menu__link--active' : ''}`}
    href={`/${name}`}
  >
    {name}
  </a>
);

MenuLink.propTypes = {
  active: PropTypes.string.isRequired,
  name: PropTypes.bool.isRequired,
};

const Menu = ({ active, horizontal }) => (
  <ul className={`menu ${horizontal ? 'menu--horizontal' : ''}`}>
    <li className="menu__item">
      <MenuLink active={active} name="dev" />
    </li>
    <li className="menu__item">
      <MenuLink active={active} name="design" />
    </li>
    <li className="menu__item">
      <MenuLink active={active} name="shoot" />
    </li>
    <li className="menu__item">
      <MenuLink active={active} name="snap" />
    </li>
    <li className="menu__item">
      <MenuLink active={active} name="paint" />
    </li>
  </ul>
);

Menu.propTypes = {
  active: PropTypes.string,
  horizontal: PropTypes.bool,
};

Menu.defaultProps = {
  active: '',
  horizontal: false,
};

module.exports = Menu;
