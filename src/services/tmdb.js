const axios = require('axios');
const { TMDB_API_KEY } = require('../config');

module.exports = {
  getRandomMovie: async () => {
    const randomPage = Math.floor(Math.random() * 100) + 1;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&page=${randomPage}`
    );
    return response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ];
  },
};