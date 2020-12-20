import React from 'react';
import { ReactComponent as ThumbUp } from '../../assets/icons/thumbs-up.svg';
import { ReactComponent as ThumbDown } from '../../assets/icons/thumbs-down.svg';

function ProgressBar({ likePercentage, dislikePercentage }) {
  return (
    <div className="progressBar">
      <div className="progressBar__button">
        <div className="progressBar__button--like">
          <ThumbUp />
          <p>{`${likePercentage || ''}%`}</p>
        </div>
        <div className="progressBar__button--dislike">
          <p>{`${dislikePercentage || ''}%`}</p>
          <ThumbDown />
        </div>
      </div>
      <div className="progressBar__bar">
        <div className="progressBar__bar--inner"></div>
      </div>
    </div>
  );
}

export default ProgressBar;
