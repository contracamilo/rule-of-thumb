import { useState, useEffect } from 'react';
import axios from 'axios';

const { REACT_APP_API_URL, NODE_ENV } = process.env;
let apiUrl = REACT_APP_API_URL;

if (NODE_ENV !== 'development') {
  apiUrl = process.env.REACT_APP_PROD_API_URL;
}

const usePersonsAPI = (route) => {
  const [data, setData] = useState({ data: [] });
  const [url, setUrl] = useState(`${apiUrl}${route}`);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default usePersonsAPI;
