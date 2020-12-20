import React from 'react';
import ProgressBar from '../ProgressBar';
import Thumb from '../thumb';
import PropTypes from 'prop-types';
import { FadeIn } from '../animations';

/**
 * Ui component for user interaction.
 *
 * @param {object} person passed properties of the character taht will be rendered.
 * @return {JSX} Vore card component.
 */
const Card = ({ person = {} }) => {
  const { imgUrl, name, description, liked, time, category } = person;

  return (
    <FadeIn duration={1}>
      <section className="card">
        <figure className="card__img-box">
          <img src={imgUrl} alt={name} />
          <figcaption>{description}</figcaption>
        </figure>

        <div className="card__content-box">
          <div className="card__text">
            <h2 className={liked ? 'green-badge' : 'orange-badge'}>{name || null}</h2>
            <p className="card__text--small-sub">
              <strong>{time}</strong>
              {` in ${category}`}
            </p>
            <p>{description}</p>
            <div className="card__vote-buttons">
              <Thumb like />
              <Thumb color="orange" like={false} />
              <button type="button" className="card__vote-buttons--outline">
                Vote Now
              </button>
            </div>
          </div>

          <div className="card__buttons">
            <ProgressBar likePercentage={70} dislikePercentage={40} />
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Card;

Card.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  liked: PropTypes.bool,
  time: PropTypes.string,
  category: PropTypes.string,
};

Card.defaultProps = {
  imgUrl: '',
  name: '',
  description: '',
  liked: true,
  time: '',
  category: '',
};
