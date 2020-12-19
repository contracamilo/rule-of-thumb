import React, { createContext, useState } from 'react';

// A New instance of React.createContext
export const Context = createContext();

/**
 * Function that configures the React.Provider configuration to resolve the state of the authentication around the app
 * @function Provider
 * @param { children } prop all the children  on the this component
 * @returns {JSX.Elements} New setup for the Provider component
 */
const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token');
  });

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true);
      window.sessionStorage.setItem('token', token);
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem('token');
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Provider,
  Consumer: Context.Consumer,
};
