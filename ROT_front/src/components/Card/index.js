import React, { useState, useContext, useEffect } from 'react';
import ProgressBar from '../ProgressBar';
import Thumb from '../thumb';
import PropTypes from 'prop-types';
import { FadeIn } from '../animations';
import { calculatePercentages } from '../../utils/index';
import { timeCalc } from '../../utils/index';
import Button from '../Button';
import { PeopleContext } from '../../context/peopleContext';

/**
 * Ui component for user interaction.
 *
 * @param {object} passed properties of the character that will be rendered.
 * @return {JSX} Vote card component.
 */
const Card = ({ person = {}, dispatch, personKey }) => {
  const { imgUrl, name, description, createdAt, category, meta, _id } = person;
  const { likes, dislikes } = meta;

  const context = useContext(PeopleContext) || {};
  const { useManageEntries } = context;
  const [liked, setLiked] = useState('');
  const [updatedValues, setUpdatedValues] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [lksPercentage, dislksPercentage] = calculatePercentages(likes, dislikes);
  const [isEdited, setIsEdited] = useState(false);

  // TODO: error management
  const [, , , editEntry] = useManageEntries(updatedValues);

  const switchBadge = (numLikes) => (numLikes > 51 ? true : null);

  const vote = () => {
    switch (liked) {
      case 'like':
        dispatch({ type: 'LIKE', id: personKey });
        break;
      case 'dislike':
        dispatch({ type: 'DISLIKE', id: personKey });
        break;
      default:
        throw new Error();
    }
    setIsSent(true);
    setLiked('');
    recordLikes(_id);
  };

  const voteType = (thumb) => setLiked(thumb);

  const closeFeedback = () => setIsSent(false);

  setTimeout(() => {
    setIsSent(false);
  }, 4000);

  const recordLikes = (id) => {
    console.log(updatedValues, isEdited);
    const headers = {};
    const payload = {
      imgUrl,
      name,
      description,
      createdAt,
      category,
      meta,
    };

    setUpdatedValues({ payload, headers, id });
    setIsEdited(true);
  };

  useEffect(() => {
    if (isEdited) {
      editEntry();
      console.log('I sended');
      setIsEdited(false);
    }
  }, [editEntry, isEdited, updatedValues]);

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
        <figure className="card__img-box" style={{ backgroundImage: `url(${imgUrl})` }}>
          <figcaption>{`${name} ${description}`}</figcaption>
        </figure>

        <div className="card__content-box">
          <div className="card__text">
            <h2 className={switchBadge(lksPercentage) ? 'green-badge' : 'orange-badge'}>
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
            <ProgressBar likePercentage={lksPercentage} dislikePercentage={dislksPercentage} />
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
