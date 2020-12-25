import { useState, useCallback } from 'react';
import axios from 'axios';

const { REACT_APP_API_URL, NODE_ENV } = process.env;
let apiUrl = REACT_APP_API_URL;

if (NODE_ENV !== 'development') {
  apiUrl = process.env.REACT_APP_PROD_API_URL;
}

const useManageEntries = ({ route, payload, headers, id }) => {
  const entryId = id ? `/${id}` : '';
  const [data, setData] = useState({ data: [] });
  const [url] = useState(`${apiUrl}${route}${entryId}`);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const callAPI = useCallback(async () => {
    setIsError(false);
    setIsLoading(true);
    setData((prevState) => ({ ...prevState }));

    try {
      let result = await axios.post(url, payload, { headers });
      setData({ data: result.data });
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }, [url, headers, payload]);

  return [data, isLoading, isError, callAPI];
};

export default useManageEntries;