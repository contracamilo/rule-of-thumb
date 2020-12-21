import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FadeIn } from '../animations';
import Button from '../Button';

/**
 * Ui component for user interaction.
 *
 * @param {object} props properties of the character that will be rendered.
 * @return {JSX} Vore card component.
 */
const Banner = ({ type, texts, action }) => {
  const { preTitle, title, text } = texts;

  const [isclosed, setIsClosed] = useState(false);

  const closeBanner = () => {
    console.log('lk');
    setIsClosed(true);
  };

  return (
    !isclosed && (
      <FadeIn duration={1}>
        <div className={`banner banner--${type === 'withButton' ? 'bg' : ''} banner--animation`}>
          <div className="banner__title">
            {type === 'withButton' && <h2 className="banner__title--light">{text}</h2>}
            {type === 'close' && (
              <h2 className="banner__title--bold">
                <span>{preTitle}</span>
                {title}
              </h2>
            )}
          </div>
          <div className="banner__text">{type === 'close' && <p>{text}</p>}</div>
          <div className="banner__button">
            {type === 'close' && (
              <button
                type="button"
                aria-label="close"
                className="banner__button--close"
                onClick={() => closeBanner()}
              >
                x
              </button>
            )}
            {type === 'withButton' && (
              <Button
                type="button"
                aria-label="submit a name"
                className="banner__button--link"
                onClick={action}
              >
                Submit a Name
              </Button>
            )}
          </div>
        </div>
      </FadeIn>
    )
  );
};

export default Banner;

Banner.propTypes = {
  type: PropTypes.string,
  text: PropTypes.array,
  action: PropTypes.func,
};

Banner.defaultProps = {
  type: '',
  like: [],
  action: () => {},
};
