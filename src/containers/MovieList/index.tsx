import React from "react";
import styled from "styled-components";
import { MovieItem } from "../../components";
import { GenreObject, Movie } from "../../lib/domain";

type MovieListPropsType = {
  movies: Movie[];
  genres: GenreObject[];
};

export const MovieList: React.FC<MovieListPropsType> = ({ movies, genres }) => {
  return (
    <MoviesWrapper>
      {movies.map((movie: any) => {
        if (genres && movie.genre_ids) {
          movie.genres = genres.filter((o1: { id: number; name: string }) =>
            movie.genre_ids.some((o2: number) => o1.id === o2)
          );
        }
        return <MovieItem key={movie.id} {...movie} />;
      })}
    </MoviesWrapper>
  );
};

const MoviesWrapper = styled.div`
  position: relative;
`;
