import { useState, useEffect } from 'react';
import client from '../../api/client';

export function useFetchBookMarkShopList() {
  const [bookMarkListItems, setBookMarkListItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    client
      .get('/bookmark')
      .then((res) => {
        if (res.status === 200) {
          setIsLoading(false);
          console.log(res.data);

          setBookMarkListItems(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(err);
      });
  }, []);

  return [bookMarkListItems, isLoading, error];
}
