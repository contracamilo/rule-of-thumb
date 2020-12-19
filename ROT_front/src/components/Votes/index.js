import React from 'react';
import Card from '../Card';

function Votes({ persons }) {
  return (
    <article role="contentinfo" aria-label="vote section" className="votes">
      <h2>Votes</h2>
      <Card />
    </article>
  );
}

export default Votes;
