import { useEffect, useState } from 'react';

import { getCharacters } from '../api/rickImorty'

export const useCharacters = () => {
  const [data, setData] = useState()

  useEffect(() => {
    getCharacters()
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