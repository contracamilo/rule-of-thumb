import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { FadeIn } from '../animations';

const Banner = ({ type, texts, action }) => {
  const { preTitle, title, text, link } = texts;

  return (
    <Controller>
      <Scene
        duration={200}
        classToggle={['.banner--animation', 'fade-in']}
        reverse={false}
        triggerElement=".banner"
      >
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
        </FadeIn>
      </Scene>
    </Controller>
  );
};

export default Banner;
