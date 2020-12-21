import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ThumbUp } from '../../assets/icons/thumbs-up.svg';
import { ReactComponent as ThumbDown } from '../../assets/icons/thumbs-down.svg';

/**
 * Ui component for user interaction.
 * @params passed properties, check prop-types for details.
 * @return {JSX} Thumb button to registe a like/dislike
 */
const Thumb = ({ color, like, size, action, active, disabled }) => {
  return (
    <div
      className={`thumb thumb--${color || 'green'} ${size || 'big'} thumb--${
        active ? 'active' : ''
      }`}
    >
      <button type="button" disabled={disabled} aria-label="thumb button" onClick={() => action()}>
        {like ? <ThumbUp /> : <ThumbDown />}
      </button>
    </div>
  );
};

export default Thumb;

Thumb.propTypes = {
  color: PropTypes.string,
  like: PropTypes.bool,
  size: PropTypes.string,
  action: PropTypes.func,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

Thumb.defaultProps = {
  color: '',
  like: true,
  size: '',
  action: () => {},
  active: true,
  disabled: false,
};
