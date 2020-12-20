import React from 'react';

/**
 * Ui component for user interaction.
 *
 * @return {JSX} Loader component to give a loading state feedback
 */
const Loader = () => {
  return (
    <div className="loader">
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
