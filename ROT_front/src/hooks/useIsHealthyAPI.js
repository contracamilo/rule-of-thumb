import { useState, useEffect } from 'react';
import axios from 'axios';

let apiUrl = process.env.REACT_APP_DEV_API_URL;

if (process.env.NODE_ENV !== 'development') {
  apiUrl = process.env.REACT_APP_PROD_API_URL;
}

export const useIsHealthyAPI = (route) => {
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
