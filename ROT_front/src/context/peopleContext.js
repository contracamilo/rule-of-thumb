import React, { createContext } from 'react';
import { usePersonsAPI } from '../hooks/usePersonsAPI';
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

  const value = {
    /*
    data,
    isLoading,
    isError,
    doFetch, */

    people,
  };

  return <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Provider,
  Consumer: PeopleContext.Consumer,
};
