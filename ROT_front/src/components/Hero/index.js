import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ imageUrl, description, children }) => {
  return (
    <article>
      <div className="hero" role="img" aria-label={description}>
        {children}
      </div>
    </article>
  );
};

export default Hero;

Hero.propTypes = {
  aria: PropTypes.string,
  items: PropTypes.array,
};
