import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Context from '../context/authContext';
import ProductContext from '../context/authContext';
import PropTypes from 'prop-types';
import App from '../App';

describe('<App /> redern without problems', () => {
  afterEach(cleanup);

  const app = render(
    <Context.Provider value={{ isAuth: false }}>
      <ProductContext.Provider value={{ data: [] }}>
        <App />
      </ProductContext.Provider>
    </Context.Provider>
  );

  test('renders without crashing', () => {
    expect(app).toBeTruthy();
  });
});
