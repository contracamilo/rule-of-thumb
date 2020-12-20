import React from 'react';
import ProgressBar from '../ProgressBar';
import Thumb from '../thumb';

const Card = ({ person }) => {
  const { imgUrl, name, description, liked, time, category } = person;

  return (
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
  );
};

export default Card;
