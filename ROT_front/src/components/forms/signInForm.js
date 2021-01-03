import React, { useContext, useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import { PeopleContext } from '../../context/peopleContext';

const SingInForm = ({ id = null, title }) => {
  const [formValues, setFormValues] = useState({});
  const context = useContext(PeopleContext) || {};
  const [isDataReady, setIsDataReady] = useState(false);
  const { useManageEntries } = context;

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

    setFormValues({ headers, payload: body, route: 'user', id: '' });
    setIsDataReady(true);
  };

  const [, , , createUser] = useManageEntries(formValues);

  useEffect(() => {
    if (isDataReady) {
      createUser();
      setIsDataReady(false);
    }
  }, [createUser, isDataReady, setFormValues]);

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
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SingInForm;
