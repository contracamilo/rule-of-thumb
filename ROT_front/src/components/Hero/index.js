import React from 'react';
import PropTypes from 'prop-types';

/**
 * Ui component for user interaction.
 *
 * @param {object} props passed properties, check prop-types for details.
 * @return {JSX} is a wrapper with an background image
 */
const Hero = ({ imageUrl, description, children }) => {
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
