import React from 'react';
import Card from '../Card';

function Votes({ persons }) {
  console.log(persons);
  return (
    <article role="contentinfo" aria-label="vote section" className="votes">
      <h2>Votes</h2>
      <div className="votes__card-container">
        {(persons || []).map((person, index) => (
          <Card key={index} person={person} />
        ))}
      </div>
    </article>
  );
}

export default Votes;
