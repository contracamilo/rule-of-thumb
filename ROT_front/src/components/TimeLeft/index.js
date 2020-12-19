import React from 'react';

const TimeLeft = ({ text, number, time }) => {
  return (
    <div className="timeleft">
      <div className="timeleft__text">
        <p>{text}</p>
      </div>
      <div>
        <p className="timeleft__date">
          <strong>{number}</strong>
          {time}
        </p>
      </div>
    </div>
  );
};

export default TimeLeft;
