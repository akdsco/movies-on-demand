import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const ACCESS_TOKEN = process.env.REACT_APP_MOVIE_DB_READ_ACCESS_TOKEN;
const axiosConfig = {
  headers: { Authorization: `Bearer <<${ACCESS_TOKEN}>>` },
};

export const getGenreList = (endpoint: string): Promise<any> => {
  const url = `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US`;
  return new Promise((resolve, reject) => {
    axios
      .get(url, axiosConfig)
      .then((response) => {
        console.debug("API data response: ", response);
        resolve(response);
      })
      .catch((e) => reject(e));
  });
};

export const getPopularMovies = (endpoint: string): Promise<any> => {
  const url = `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url, axiosConfig)
      .then((response) => {
        console.debug("API data response: ", response);
        resolve(response);
      })
      .catch((e) => reject(e));
  });
};

export const getMoviesWithSearch = (
  keyword: string,
  year: number
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1&year=${year}&query=${keyword}`;
    axios
      .get(url, axiosConfig)
      .then((response) => {
        console.debug("API data response: ", response);
        resolve(response);
      })
      .catch((e) => reject(e));
  });
};
