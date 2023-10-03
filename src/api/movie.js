import axios from 'axios';

const apiKey = '248a3616';

const options = {
  method: 'GET',
  baseURL: `http://www.omdbapi.com`,
};

export const getMovie = (title, page = 1) => {
  const incomeTitle = title ? `s=${title}` : '';

  return axios.request(
    `/?apikey=${apiKey}&${incomeTitle}&page=${page}`,
    options
  );
};

export const getMovieDetail = (id) => {
  return axios.request(`/?apikey=${apiKey}&i=${id}`, options);
};
