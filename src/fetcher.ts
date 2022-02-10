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
        // console.log(response.data);
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);
        resolve(response);
      })
      .catch((e) => reject(e));
  });
};

export const getPopularMovies = (endpoint: string): Promise<any> => {
  const url = `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}`;
  // console.log("Request url: ", url);
  return new Promise((resolve, reject) => {
    axios
      .get(url, axiosConfig)
      .then((response) => {
        // console.log(response.data);
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);
        resolve(response);
      })
      .catch((e) => reject(e));
  });
};
