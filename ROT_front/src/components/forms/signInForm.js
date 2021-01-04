import React, { useContext, useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import { Context } from '../../context/authContext';
import { PeopleContext } from '../../context/peopleContext';

const SingInForm = ({ id = null, title }) => {
  const [formValues, setFormValues] = useState({});
  const authContext = useContext(Context);
  const context = useContext(PeopleContext) || {};
  const [isDataReady, setIsDataReady] = useState(false);
  const [loginData, setLoginData] = useState({ mail: '', password: '' });

  // context
  const { useManageEntries } = context;
  const { activateAuth } = authContext;

  const setConfig = (values = {}) => {
    const { name, email, password, google, state } = values;
    const headers = {};

    const body = {
      name,
      email,
      password,
      google,
      state,
    };

    setLoginData({ email, password });
    setFormValues({ headers, payload: body, route: 'user', id: '' });
    setIsDataReady(true);
  };

  const formLoginValues = {
    headers: {},
    payload: loginData,
    route: 'login',
    id: '',
  };

  const [, , , createUser] = useManageEntries(formValues);
  const [logData, , , loginUser] = useManageEntries(formLoginValues);

  useEffect(() => {
    if (isDataReady) {
      createUser();
      // loginUser();
      // activateAuth({ user: logData.user, token: logData.token });
      setIsDataReady(false);
    }
  }, [
    activateAuth,
    createUser,
    isDataReady,
    logData.token,
    logData.user,
    loginUser,
    setFormValues,
  ]);

  return (
    <div className="form">
      <h2>{title}</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          google: false,
          state: true,
        }}
        onSubmit={(values) => setConfig(values)}
      >
        <Form>
          <Field name="name" type="text" placeholder="Your Name" />
          <Field name="email" type="text" placeholder="Email" />
          <Field name="password" type="password" placeholder="password" />

          <button className="card__vote-buttons--outline" type="submit">
            Create an account
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SingInForm;
