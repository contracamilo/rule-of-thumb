import React, { useRef } from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Search from '../Search';
import Button from '../Button';
import Modal from '../Modal';
import SingInForm from '../forms/signInForm';

/**
 * Ui component for user interaction.
 *
 * @param {object} props passed properties, check prop-types for details.
 * @return {JSX} Header ui component.
 */
const Header = ({ title, label, navItems }) => {
  const singInModal = useRef(null);

  return (
    <header className="header">
      <Link to={'/'}>
        <h2>{title}</h2>
      </Link>
      <div className="header__nav">
        <Nav aria={label} items={navItems} additionalAction={true}>
          <Button onClick={() => singInModal.current.open()}>sing in</Button>
        </Nav>
        <Search />
      </div>
      <div className="header__mobile-menu">MENU</div>
      <Modal ref={singInModal}>
        <SingInForm title={'Sing In'} />
      </Modal>
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
