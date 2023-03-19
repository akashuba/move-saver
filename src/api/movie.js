import axios from 'axios';

const apiKey = '286f01d0'

const options = {
  method: 'GET',
  baseURL: `http://www.omdbapi.com`,
};

export const getMovie = (title) => {
  const incomeTitle = title ? `t=${title}` : ''

  return axios.request(`/?apikey=${apiKey}&${incomeTitle}`, options)
}
