import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';
import Thumb from '../thumb';
import PropTypes from 'prop-types';
import { FadeIn } from '../animations';
import { calculatePercentages } from '../../utils/index';
import { timeCalc } from '../../utils/index';
import Button from '../Button';

/**
 * Ui component for user interaction.
 *
 * @param {object} passed properties of the character taht will be rendered.
 * @return {JSX} Vote card component.
 */
const Card = ({ person = {}, dispatch, id }) => {
  const { imgUrl, name, description, createdAt, category, meta } = person;
  const { likes, dislikes } = meta;

  const [liked, setliked] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [lksPercetage, dislksPercentage] = calculatePercentages(likes, dislikes);

  const swicthBadge = (numLikes) => (numLikes > 51 ? true : null);

  const vote = () => {
    switch (liked) {
      case 'like':
        dispatch({ type: 'LIKE', id });
        break;
      case 'dislike':
        dispatch({ type: 'DISLIKE', id });
        break;
      default:
        throw new Error();
    }
    setIsSent(true);
    setliked('');
  };

  const voteType = (thumb) => setliked(thumb);

  const closeFeedback = () => setIsSent(false);

  setTimeout(() => {
    setIsSent(false);
  }, 4000);

  return (
    <FadeIn duration={1}>
      <section className="card">
        {isSent && (
          <div className="card__feedback">
            <p>{`Thank you for voting for ${name}!`}</p>
            <Button
              onClick={closeFeedback}
              className="card__vote-buttons--outline"
              type="button"
              aria-label="close button"
            >
              close
            </Button>
          </div>
        )}
        <figure className="card__img-box">
          <img src={imgUrl} alt={name} />
          <figcaption>{description}</figcaption>
        </figure>

        <div className="card__content-box">
          <div className="card__text">
            <h2 className={swicthBadge(lksPercetage) ? 'green-badge' : 'orange-badge'}>
              {name || null}
            </h2>
            <p className="card__text--small-sub">
              <strong>{timeCalc(createdAt)}</strong>
              {` in ${category}`}
            </p>
            <p className="card__text--body">{description}</p>
            <div className="card__vote-buttons">
              <Thumb
                active={liked === 'like'}
                disabled={liked === 'dislike'}
                like
                action={() => voteType('like')}
              />
              <Thumb
                active={liked === 'dislike'}
                disabled={liked === 'like'}
                color="orange"
                like={false}
                action={() => voteType('dislike')}
              />
              <Button
                type="button"
                disabled={isSent || liked === ''}
                onClick={vote}
                className="card__vote-buttons--outline"
              >
                Vote Now
              </Button>
            </div>
          </div>

          <div className="card__buttons">
            <ProgressBar likePercentage={lksPercetage} dislikePercentage={dislksPercentage} />
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
