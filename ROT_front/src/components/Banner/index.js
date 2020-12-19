import React from 'react';

const Banner = ({ type, text }) => {
  return (
    <div className="banner">
      <div className="banner__title">
        {type === 'withButton' && <h2>Submit a Name</h2>}
        {type === 'close' && (
          <h2>
            <span>holi</span>Submit a Name
          </h2>
        )}
      </div>
      <div className="banner__text">{type === 'close' && <p>texto que va</p>}</div>
      <div className="banner__button">
        {type === 'close' && <button>x</button>}
        {type === 'withButton' && <button>Submit a Name</button>}
      </div>
    </div>
  );
};

export default Banner;
