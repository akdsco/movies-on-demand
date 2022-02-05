import React from "react";
import styled from "styled-components";
// import MovieItem from '../movieitem';

type MovieListPropsType = {
  //TODO adjust props type once you start implementing (setting string for now)
  movies: object[] | string[];
  genres: string[];
};

export const MovieList: React.FC<MovieListPropsType> = ({ movies, genres }) => {
  return (
    <MoviesWrapper>
      {/*TODO Finish the MovieItem component and use it here to display the movie results */}
    </MoviesWrapper>
  );
};

const MoviesWrapper = styled.div`
  position: relative;
`;
