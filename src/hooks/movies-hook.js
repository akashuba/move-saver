import { useEffect, useState } from 'react';

import { getMovies } from '../api/movie'

export const useMovies = () => {
  const [data, setData] = useState()

  useEffect(() => {
    getMovies()
      .then(function (response) {
        console.log('response ', response);

        setData(response?.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return {data}
};