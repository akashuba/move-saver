import { useEffect, useState } from 'react';

import { getMovie } from '../api/movie'

export const useMovie = (title) => {
  const [data, setData] = useState()

  useEffect(() => {
    getMovie(title)
      .then(function (response) {
        console.log('response ', response);

        setData(response?.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [title]);

  return {data}
};