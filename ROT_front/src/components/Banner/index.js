import React from 'react';

const Banner = ({ type, texts, action }) => {
  const { preTitle, title, text, link } = texts;

  return (
    <div className={`banner ${type === 'withButton' ? 'banner--bg' : ''}`}>
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
            onclick={action}
          >
            x
          </button>
        )}
        {type === 'withButton' && (
          <button type="button" aria-label="submit a name" className="banner__button--link">
            Submit a Name
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
