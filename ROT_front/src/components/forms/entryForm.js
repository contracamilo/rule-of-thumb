import React, { useContext, useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import { PeopleContext } from '../../context/peopleContext';

const EntryForm = ({ id = null, title }) => {
  const [formValues, setFormValues] = useState({});
  const context = useContext(PeopleContext) || {};
  const [isDataReady, setIsDataReady] = useState(false);
  const { useManageEntries } = context;
  const categories = ['entertainment', 'sports', 'politics', 'business', 'social media', 'science'];

  const setConfig = (values = {}) => {
    const { name, imgUrl, description, category, likes, dislikes } = values;
    const headers = { 'Access-Control-Allow-Origin': '*' };

    const body = {
      name,
      imgUrl,
      description,
      category,
      meta: {
        likes,
        dislikes,
      },
    };

    const requestParams = {
      headers,
      payload: body,
      route: 'person',
    };

    if (id) {
      setFormValues({ ...requestParams, id });
    } else {
      setFormValues({ ...requestParams });
    }

    setIsDataReady(true);
  };

  const [, , , createEntry] = useManageEntries(formValues);

  useEffect(() => {
    if (isDataReady) {
      createEntry();
      setIsDataReady(false);
    }
  }, [createEntry, isDataReady, setFormValues]);

  return (
    <div className="form">
      <h2>{title}</h2>
      <Formik
        initialValues={{
          name: '',
          imgUrl: '',
          description: '',
          category: '',
          likes: 1,
          dislikes: 1,
        }}
        onSubmit={(values) => setConfig(values)}
      >
        <Form>
          <Field name="name" type="text" placeholder="Character Name" />
          <Field name="imgUrl" type="text" placeholder="Image Url" />
          <Field name="description" type="textarea" placeholder="description" />
          <Field name="category" as="select">
            {categories.map((category, i) => (
              <option key={i} value={category}>
                {category}
              </option>
            ))}
          </Field>
          {id && (
            <>
              <Field name="likes" type="number" placeholder="likes" />
              <Field name="dislikes" type="number" placeholder="dislikes" />
            </>
          )}
          <button className="card__vote-buttons--outline" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EntryForm;
