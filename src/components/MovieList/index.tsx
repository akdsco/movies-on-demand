import React from "react";
import styled from "styled-components";
import { MovieItem } from "../../components";
import { Movie } from "../../lib/domain";

type MovieListPropsType = {
  //TODO adjust props type once you start implementing (setting string for now)
  movies: Movie[];
  genres: string[];
};

export const MovieList: React.FC<MovieListPropsType> = ({ movies, genres }) => {
  return (
    <MoviesWrapper>
      {movies.map((movie) => {
        return <MovieItem key={movie.id} {...movie} />;
      })}
      {/*TODO Finish the MovieItem component and use it here to display the movie results */}
    </MoviesWrapper>
  );
};

const MoviesWrapper = styled.div`
  position: relative;
`;
