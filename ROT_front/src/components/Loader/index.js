import React from 'react';

/**
 * Ui component for user interaction.
 *
 * @param {boolean} onlyLoader toggle the fixed styles
 * @return {JSX} Loader component to give a loading state feedback
 */
const Loader = ({ onlyLoader }) => {
  return (
    <div className={!onlyLoader ? 'loader' : ''}>
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
