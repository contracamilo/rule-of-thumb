import React, { useContext, useReducer } from 'react';
import { PeopleContext } from '../../context/peopleContext';
import Card from '../Card';

/**
 * Ui component for user interaction.
 * @return {JSX} Wraperr for Card components
 */
function Votes() {
  const ctx = useContext(PeopleContext) || {};
  const { initialState, likeReducer } = ctx;
  const [people, dispatch] = useReducer(likeReducer, initialState);

  const passDispatch = (id) => dispatch(id);

  return (
    <article role="contentinfo" aria-label="vote section" className="votes">
      <h2 className="votes__title-section">Votes</h2>
      <div className="votes__card-container">
        {(people || []).map((person, index) => (
          <Card key={index} person={person} dispatch={passDispatch} id={index} />
        ))}
      </div>
    </article>
  );
}

export default Votes;
