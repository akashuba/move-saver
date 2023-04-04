import axios from 'axios';

// const apiKey = '286f01d0'
const apiKey = '248a3616';

const options = {
  method: 'GET',
  baseURL: `http://www.omdbapi.com`,
};

export const getMovie = (title, page = 1) => {
  // const incomeTitle = title ? `t=${title}` : '';
  const incomeTitle = title ? `s=${title}` : '';

  return axios.request(
    `/?apikey=${apiKey}&${incomeTitle}&page=${page}`,
    options
  );
};
