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
  const [isAuth, setIsAuth] = useState(() => window.sessionStorage.getItem('token'));
  const [key, setKey] = useState(() => window.sessionStorage.getItem('token'));
  const [user, setStoredUser] = useState(() => window.sessionStorage.getItem('user'));

  const value = {
    isAuth,
    activateAuth: ({ user, token }) => {
      if (user && token) {
        window.sessionStorage.setItem('token', token);
        window.sessionStorage.setItem('user', JSON.stringify(user));
      }

      if (user) {
        setStoredUser(user);
        setKey(token);
      }
      setIsAuth(true);
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem('token');
      window.sessionStorage.removeItem('user');
      setKey('');
      setStoredUser('');
    },
    key,
    setKey,
    setStoredUser,
    user,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Provider,
  Consumer: Context.Consumer,
};
