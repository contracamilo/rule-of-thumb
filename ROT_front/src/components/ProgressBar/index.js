import React from 'react';
import { ReactComponent as ThumbUp } from '../../assets/icons/thumbs-up.svg';
import { ReactComponent as ThumbDown } from '../../assets/icons/thumbs-down.svg';
import PropTypes from 'prop-types';

/**
 * Ui component for user interaction.
 *
 * @param {object} props passed properties, check prop-types for details.
 * @return {JSX} Progress bar that compare two percentages.
 */
const ProgressBar = ({ likePercentage = 0, dislikePercentage = 0 }) => {
  const likes = likePercentage.toFixed(1);
  const dislikes = dislikePercentage.toFixed(1);

  const removeZero = (str) => str.replace('.0', '');

  return (
    <div className="progressBar">
      <div className="progressBar__button">
        <div className="progressBar__button--like">
          <ThumbUp />
          <p>{removeZero(`${likes || ''}%`)}</p>
        </div>
        <div className="progressBar__button--dislike">
          <p>{removeZero(`${dislikes || ''}%`)}</p>
          <ThumbDown />
        </div>
      </div>
      <div className="progressBar__bar">
        <div className="progressBar__bar--inner" style={{ width: `${likes}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  likePercentage: PropTypes.number,
  dislikePercentage: PropTypes.number,
};

ProgressBar.defaultProps = {
  aria: 1,
  items: 99,
};
