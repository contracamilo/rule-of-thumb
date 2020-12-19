import React from 'react';

const Thumb = ({ color, like, size, action, active }) => {
  return (
    <div className={`thumb thumb--${color || 'green'} ${size || 'big'} ${active ? 'active' : ''}`}>
      <button type="button" aria-label="thumb button" onClick={action}>
        {like ? <p>si</p> : <p>no</p>}
      </button>
    </div>
  );
};

export default Thumb;
