import { useEffect, useState } from 'react';

import { getMovie } from '../api/movie';

export const useMovie = (title, page = 1) => {
  const [data, setData] = useState();

  useEffect(() => {
    getMovie(title, page)
      .then(function (response) {
        console.log('response ', response);

        setData(response?.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [title, page]);

  return { data };
};
