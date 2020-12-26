import React, { useContext, useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import { PeopleContext } from '../../context/peopleContext';

const EntryForm = ({ id = null }) => {
  const [formValues, setFormValues] = useState({});
  const context = useContext(PeopleContext) || {};
  const [isDataReady, setIsDataReady] = useState(false);
  const { useManageEntries } = context;
  const categories = ['entertainment', 'sports', 'politics', 'business', 'social media', 'science'];

  const setConfig = (values) => {
    const { name, imgUrl, description, category, likes, dislikes } = values;
    const headers = {};

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

    if (id) {
      setFormValues({ headers, payload: body, id });
      setIsDataReady(true);
    } else {
      setFormValues({ headers, payload: body });
      setIsDataReady(true);
    }
  };

  const [data, loading, isError, createEntry] = useManageEntries(formValues);

  useEffect(() => {
    if (isDataReady) {
      createEntry();
      setIsDataReady(false);
    }
  }, [createEntry, isDataReady, setFormValues]);

  return (
    <div className="form">
      <h2>Contact Us</h2>
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
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default EntryForm;
