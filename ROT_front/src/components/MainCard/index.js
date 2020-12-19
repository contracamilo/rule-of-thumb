import React from 'react';
import Thumb from '../thumb';

const MainCard = ({ preTitle, title, body, url, linkText, question }) => {
  return (
    <section className="main-card">
      <div className="main-card__text">
        <h2>
          <span>{preTitle || null}</span>
          {title || null}
        </h2>
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
