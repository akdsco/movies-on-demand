import axios from "axios";

const MOVIE_DB_API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const MOVIE_DB_ACCESS_TOKEN = process.env.REACT_APP_MOVIE_API_ACCESS_TOKEN;
const axiosMovieDBConfig = {
  headers: { Authorization: `Bearer <<${MOVIE_DB_ACCESS_TOKEN}>>` },
};

const movieDbApiCall = (url: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, axiosMovieDBConfig)
      .then((response) => {
        console.debug("API data response: ", response);
        resolve(response);
      })
      .catch((e) => reject(e));
  });
};

const movieDBApiDomain = "https://api.themoviedb.org/3";

export const getGenreList = (): Promise<any> => {
  const url = `${movieDBApiDomain}/genre/movie/list?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
  return movieDbApiCall(url);
};

export const getPopularMovies = (): Promise<any> => {
  const url = `${movieDBApiDomain}/movie/popular?api_key=${MOVIE_DB_API_KEY}`;
  return movieDbApiCall(url);
};

export const getMoviesWithSearch = (
  keyword: string,
  year: number
): Promise<any> => {
  const url = `${movieDBApiDomain}/search/movie?api_key=${MOVIE_DB_API_KEY}&page=1&year=${year}&query=${keyword}`;
  return movieDbApiCall(url);
};
