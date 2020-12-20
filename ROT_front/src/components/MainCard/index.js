import React from 'react';
import Thumb from '../thumb';
import PropTypes from 'prop-types';

/**
 * Ui component for user interaction.
 *
 * @param {object} props passed properties, check prop-types for details.
 * @return {JSX} Maincard component that renders a card in the Hero banner
 */
const MainCard = ({ preTitle, title, body, url, linkText, question }) => {
  return (
    <section className="main-card">
      <div className="main-card__inner">
        <h1>
          <span>{preTitle || null}</span>
          {title || null}
        </h1>
        <p>{body}</p>
        <a href={url}>{linkText || null}</a>
        <h3>{question}</h3>
      </div>
      <div className="main-card__buttons">
        <Thumb like />
        <Thumb color="orange" like={false} />
      </div>
    </section>
  );
};

export default MainCard;

MainCard.propTypes = {
  preTitle: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  url: PropTypes.string,
  linkText: PropTypes.string,
  question: PropTypes.string,
};

MainCard.defaultProps = {
  preTitle: '',
  title: '',
  body: '',
  url: '',
  linkText: '',
  question: '',
};
