import React from 'react';
import PropTypes from 'prop-types';

import MenuLink from './menu_link';

const Menu = ({ active, horizontal }) => (
  <ul className={ `menu ${horizontal ? 'menu--horizontal' : ''}` }>
    <MenuLink active={ active } name="dev" />
    <MenuLink active={ active } name="design" />
    <MenuLink active={ active } name="shoot" />
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
