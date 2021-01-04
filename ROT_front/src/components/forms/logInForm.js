import React, { useContext, useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import { Context } from '../../context/authContext';
import { PeopleContext } from '../../context/peopleContext';

const LogInForm = ({ title }) => {
  const [formValues, setFormValues] = useState({});
  const context = useContext(PeopleContext);
  const authContext = useContext(Context);
  const [isDataReady, setIsDataReady] = useState(false);

  //contexts
  const { useManageEntries } = context;
  const { activateAuth } = authContext;

  const setConfig = (values = {}) => {
    const { email, password } = values;
    const headers = {};

    const body = {
      email,
      password,
    };

    setFormValues({ headers, payload: body, route: 'login', id: '' });
    setIsDataReady(true);
  };

  const [response, , , loginUser] = useManageEntries(formValues);
  const { data } = response;

  useEffect(() => {
    if (isDataReady) {
      loginUser();
      setIsDataReady(false);
    }
  }, [loginUser, isDataReady, setFormValues]);

  const { user, token } = data;

  useEffect(() => {
    if (user && token) {
      window.sessionStorage.setItem('token', token);
      window.sessionStorage.setItem('user', JSON.stringify(user));
      activateAuth({ user, token });
    }
  }, [activateAuth, isDataReady, setFormValues, token, user]);

  return (
    <div className="form">
      <h2>{title}</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => setConfig(values)}
      >
        <Form>
          <Field name="email" type="text" autoComplete="false" placeholder="Email" />
          <Field name="password" type="password" autoComplete="false" placeholder="Password" />

          <button className="card__vote-buttons--outline" type="submit">
            Log in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LogInForm;
