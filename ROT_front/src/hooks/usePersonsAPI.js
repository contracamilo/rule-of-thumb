import { useState, useEffect } from 'react';
import axios from 'axios';

const { REACT_APP_API_URL } = process.env;
let apiUrl = REACT_APP_API_URL;

const usePersonsAPI = (route) => {
  const [data, setData] = useState({ data: [] });
  const [url] = useState(`${apiUrl}${route}`);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios({
          method: 'GET',
          url,
          headers: {},
        });

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setData];
};

export default usePersonsAPI;
