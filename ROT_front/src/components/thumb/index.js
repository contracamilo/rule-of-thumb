import React from 'react';
import { ReactComponent as ThumbUp } from '../../assets/icons/thumbs-up.svg';
import { ReactComponent as ThumbDown } from '../../assets/icons/thumbs-down.svg';

const Thumb = ({ color, like, size, action, active }) => {
  return (
    <div className={`thumb thumb--${color || 'green'} ${size || 'big'} ${active ? 'active' : ''}`}>
      <button type="button" aria-label="thumb button" onClick={action}>
        {like ? <ThumbUp /> : <ThumbDown />}
      </button>
    </div>
  );
};

export default Thumb;
