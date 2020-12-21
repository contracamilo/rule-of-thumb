import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Context from '../context/authContext';
import PeopleContext from '../context/peopleContext';
import App from '../App';

describe('<App /> redern without problems', () => {
  afterEach(cleanup);

  const app = render(
    <Context.Provider value={{ isAuth: false }}>
      <PeopleContext.Provider value={{ data: [] }}>
        <App />
      </PeopleContext.Provider>
    </Context.Provider>
  );

  test('renders without crashing', () => {
    expect(app).toBeTruthy();
  });
});
