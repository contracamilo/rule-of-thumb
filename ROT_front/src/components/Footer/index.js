import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav';
import fbLogo from '../../assets/images/fb.png';
import twLogo from '../../assets/images/tw.png';

const Footer = ({ label, navItems, text }) => {
  return (
    <footer className="footer ">
      <div className="footer__navigation">
        <Nav aria={label || ''} items={navItems || []} />
      </div>
      <div className="footer__social-media">
        <ul aria-label="social media" role="menubar">
          <li role="none">
            <p>{text}</p>
          </li>
          <li role="none">
            <a href="http://www.facebook.com" tabIndex="0" rel="noreferrer" target="_blank">
              <img src={fbLogo} alt="facebook" />
            </a>
          </li>
          <li role="none">
            <a href="http://www.twitter.com" tabIndex="0" rel="noreferrer" target="_blank">
              <img src={twLogo} alt="twitter" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
