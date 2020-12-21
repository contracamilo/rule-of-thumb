import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

/**
 * Ui component for user interaction.
 *
 * @param {object} persons array of objects with the person's information
 * @return {JSX} Wraperr for Card components
 */
function Votes({ persons }) {
  const { people } = persons;

  return (
    <article role="contentinfo" aria-label="vote section" className="votes">
      <h2 className="votes__title-section">Votes</h2>
      <div className="votes__card-container">
        {(people || []).map((person, index) => (
          <Card key={index} person={person} />
        ))}
      </div>
    </article>
  );
}

export default Votes;

Votes.propTypes = {
  persons: PropTypes.array,
};

Votes.defaultProps = {
  aria: [],
};
