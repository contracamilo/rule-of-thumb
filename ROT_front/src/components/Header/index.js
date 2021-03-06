import React from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Search from '../Search';

/**
 * Ui component for user interaction.
 *
 * @param {object} props passed properties, check prop-types for details.
 * @return {JSX} Header ui component.
 */
const Header = ({ title, label, navItems }) => {
  return (
    <header className="header">
      <Link to={'/'}>
        <h2>{title}</h2>
      </Link>
      <div className="header__nav">
        <Nav aria={label} items={navItems} />
        <Search />
      </div>
      <div className="header__mobile-menu">MENU</div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
  aria: PropTypes.string,
  items: PropTypes.array,
};

Header.defaultProps = {
  title: 'Rule of Thumb.',
  aria: 'rule of thumb',
  items: [],
};
