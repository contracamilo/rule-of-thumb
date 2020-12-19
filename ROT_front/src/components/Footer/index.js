import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav';

const Footer = ({ label, navItems, socialItems, text }) => {
  return (
    <footer className="footer">
      <div className="footer__navigation">
        <Nav aria={label || ''} items={navItems || []} />
      </div>
      <div className="footer__social-media">
        <p>{text}</p>
        <Nav aria={'social media'} items={socialItems || []} isIconList />
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
