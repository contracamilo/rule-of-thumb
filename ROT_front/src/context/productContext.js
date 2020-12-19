import React, { createContext } from 'react';
import { useIsHealthyAPI } from '../hooks/useIsHealthyAPI';

// A New instance of React.createContext
export const ProductContext = createContext();

/**
 * Function that configures the React.Provider configuration to resolve the state of the authentication around the app
 * @function Provider
 * @param { children } prop all the children  on the this component
 * @returns {JSX.Elements} New setup for the Provider component
 */
const Provider = ({ children }) => {
  const [{ data, isLoading, isError }, doFetch] = useIsHealthyAPI('item');

  const value = {
    data,
    isLoading,
    isError,
    doFetch,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Provider,
  Consumer: ProductContext.Consumer,
};
