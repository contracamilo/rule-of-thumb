import React, { useContext } from 'react';
import Btn from '../components/Button/index';
import { ProductContext } from '../context/productContext';
import { Context } from '../context/authContext';

function Main() {
  // contexts
  const { data } = useContext(ProductContext) || { data: [] };
  const { isAuth } = useContext(Context) || { isAuth: null };

  console.log(data, isAuth);

  const BtnProps = () => {
    return {
      label: 'Button',
      color: 'secondary',
    };
  };

  return (
    <div className="main">
      <h1>isHealthy</h1>
      <Btn {...BtnProps()} />
    </div>
  );
}

export default Main;
