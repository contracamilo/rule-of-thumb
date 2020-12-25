import React, { createContext } from 'react';
import usePersonsAPI from '../hooks/usePersonsAPI';

// A New instance of React.createContext
export const PeopleContext = createContext();

/**
 * Function that configures the React.Provider configuration to resolve the state of the authentication around the app
 * @function Provider
 * @param { children } prop all the children  on the this component
 * @returns {JSX.Elements} New setup for the Provider component
 */
const Provider = ({ children }) => {
  const [{ data, isLoading, isError }, doFetch] = usePersonsAPI('person');

  const initialState = data;

  const likeReducer = (state, action) => {
    const { id } = action;
    let newState = state.data;

    switch (action.type) {
      case 'LIKE': {
        newState[id].meta.likes += 1;
        return { data: newState };
      }

      case 'DISLIKE': {
        newState[id].meta.dislikes += 1;
        return { data: newState };
      }
      default:
        throw new Error();
    }
  };

  const value = {
    isLoading,
    isError,
    doFetch,
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
