import React, { useRef, useContext, useState } from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Search from '../Search';
import Button from '../Button';
import Modal from '../Modal';
import SingInForm from '../forms/signInForm';
import LogInForm from '../forms/logInForm';
import { Context } from '../../context/authContext';

/**
 * Ui component for user interaction.
 *
 * @param {object} props passed properties, check prop-types for details.
 * @return {JSX} Header ui component.
 */
const Header = ({ title, label, navItems }) => {
  const authContext = useContext(Context);
  const { isAuth, user, removeAuth } = authContext;

  const singInModal = useRef(null);
  const logInModal = useRef(null);
  const [usr] = useState(user);

  const retrieveName = (str = '') => str.split(' ')[0];

  let formatted;

  if (usr) {
    formatted = JSON.parse(usr);
  } else {
    formatted = { name: 'user' };
  }

  const { name } = formatted;

  return (
    <header className="header">
      <Link to={'/'}>
        <h2>{title}</h2>
      </Link>
      <div className="header__nav">
        <Nav aria={label} items={navItems} additionalAction={true}>
          {!isAuth && (
            <Button className={'header__nav--spacer'} onClick={() => singInModal.current.open()}>
              Sing in
            </Button>
          )}
          {!isAuth && <Button onClick={() => logInModal.current.open()}>Log in</Button>}
          {user && <Button disabled role="none">{`Hello, ${retrieveName(name) || 'user'}`}</Button>}
          {isAuth && <Button onClick={() => removeAuth()}>Log out</Button>}
        </Nav>
        <Search />
      </div>
      <div className="header__mobile-menu">MENU</div>
      <Modal ref={singInModal} fade>
        <SingInForm title={'Sing In'} />
      </Modal>
      {!isAuth && (
        <Modal ref={logInModal} fade>
          <LogInForm title={'Log In'} />
        </Modal>
      )}
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
