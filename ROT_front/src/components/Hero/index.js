import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ imageUrl, description, children }) => {
  console.log();

  const img = {
    backgroundImage: `url(${imageUrl})`,
  };
  return (
    <article role="contentinfo" className="hero" style={img}>
      <div role="img" aria-label={description}>
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
