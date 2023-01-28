// cle API 1ed929280c3bd965c3cf0e07219dde31
// base https://api.themoviedb.org/3/

const API_KEY = "1ed929280c3bd965c3cf0e07219dde31";
const URL_BASE = "https://api.themoviedb.org/3/";

const requests = {
  fetchTrending: `${URL_BASE}trending/all/day?api_key=${API_KEY}`,
  fetchLatest: `${URL_BASE}movie/latest?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `${URL_BASE}movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `${URL_BASE}movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchUpcoming: `${URL_BASE}movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${URL_BASE}discover/movie?api_key=${API_KEY}&width_genres=28`,
  fetchComedyMovies: `${URL_BASE}discover/movie?api_key=${API_KEY}&width_genres=35`,
  fetchHorrorMovies: `${URL_BASE}discover/movie?api_key=${API_KEY}&width_genres=27`,
  fetchRomanceMovies: `${URL_BASE}discover/movie?api_key=${API_KEY}&width_genres=10749`,
  fetchDocumentary: `${URL_BASE}discover/movie?api_key=${API_KEY}&width_genres=99`,
};

export default requests;
