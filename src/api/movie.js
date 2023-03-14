import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://movie-database-alternative.p.rapidapi.com/',
  params: {s: 'Avengers Endgame', r: 'json', page: '1'},
  headers: {
    'X-RapidAPI-Key': '79cbc12bf2mshdf55db8c44a4c34p16f62fjsn0bcbd3fb5827',
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});