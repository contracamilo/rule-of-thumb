import React from 'react';
import Thumb from '../thumb';
import ProgressBar from '../ProgressBar';

const Card = ({ title, time, category, body, url, linkText, question }) => {
  return (
    <section className="card">
      <div className="card__text">
        <h2>{title || null}</h2>
        <p>
          <strong>{time}</strong>
          {`in ${category}`}
        </p>
        <p>{body}</p>
      </div>
      <div className="card__buttons">
        <Thumb like />
        <Thumb color="orange" like={false} />
        <button>Vote Now</button>
      </div>
      <div className="card__buttons">
        <ProgressBar />
      </div>
    </section>
  );
};

export default Card;
