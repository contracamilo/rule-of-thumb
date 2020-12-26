import React, { useState, useContext, useReducer } from 'react';
import { PeopleContext } from '../../context/peopleContext';
import Card from '../Card';
import Loader from '../Loader';

/**
 * Ui component for user interaction.
 * @return {JSX} Wrapper for Card components
 */
function Votes() {
  const ctx = useContext(PeopleContext) || {};
  const { initialState, likeReducer, isLoading, useManageEntries } = ctx;
  const [people, dispatch] = useReducer(likeReducer, initialState);
  const passDispatch = (id) => dispatch(id);
  const [peopleState] = useState(people.data);

  /* post and edit service
  const serviceConfig = {
    route: 'person',
    header: {},
    payload: {
      name: 'Diomedez Diaz',
      imgUrl: 'https://i.imgur.com/ns2DBxH.jpg',
      category: 'entertainment',
      description: 'Colombian Singer',
      meta: {
        likes: 85,
        dislikes: 15,
      },
    },
    id: '5fe648556c519678ca42ae5b',
  };
  const [data, loading, isError, createEntry] = useManageEntries({ ...serviceConfig });
  console.log({ ...data }, loading, isError);
 */
  return (
    <article role="contentinfo" aria-label="vote section" className="votes">
      <h2 className="votes__title-section">Votes</h2>
      {isLoading ? (
        <div className="votes__loader">
          <Loader onlyLoader={true} />
        </div>
      ) : (
        <div className="votes__card-container">
          {(peopleState || []).map((person, index) => (
            <Card key={index} person={person} dispatch={passDispatch} id={index} />
          ))}
        </div>
      )}
    </article>
  );
}

export default Votes;
