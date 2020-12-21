import React, { createContext, useState } from 'react';
// import { usePersonsAPI } from '../hooks/usePersonsAPI';
import { people } from '../utils/people';

// A New instance of React.createContext
export const PeopleContext = createContext();

/**
 * Function that configures the React.Provider configuration to resolve the state of the authentication around the app
 * @function Provider
 * @param { children } prop all the children  on the this component
 * @returns {JSX.Elements} New setup for the Provider component
 */
const Provider = ({ children }) => {
  // const [{ data, isLoading, isError }, doFetch] = usePersonsAPI('item');
  const [storedInfo] = useState(() => {
    return window.sessionStorage.getItem('persons');
  });

  let loadedData = JSON.parse(storedInfo);

  const initialState = loadedData || [...people];

  const storeInfo = (info) => {
    const data = JSON.stringify(info);
    window.sessionStorage.setItem('persons', data);
  };

  //  window.sessionStorage.removeItem('persons');

  const likeReducer = (state, action) => {
    const { id } = action;
    let newState = state;

    switch (action.type) {
      case 'LIKE': {
        newState[id].likes += 1;
        storeInfo([...newState]);
        return [...newState];
      }

      case 'DISLIKE': {
        newState[id].dislikes += 1;
        storeInfo([...newState]);
        return [...newState];
      }
      default:
        throw new Error();
    }
  };

  const value = {
    /*
    data,
    isLoading,
    isError,
    doFetch, */
    likeReducer,
    initialState,
  };

  return <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Provider,
  Consumer: PeopleContext.Consumer,
};
