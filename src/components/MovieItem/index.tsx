import React from "react";
import styled from "styled-components";
import { Movie } from "../../lib/domain";

export const MovieItem: React.FC<Movie> = ({
  genres,
  original_title,
  overview,
  poster_path,
  vote_average,
}) => {
  return (
    <MovieItemWrapper>
      <LeftCont>
        <img src="http://placehold.jp/80x120.png" alt="" />
      </LeftCont>
      <RightCont>
        <RightContTop>
          <TitleAndGenreCont>
            <MovieTitle>{original_title}</MovieTitle>
            <Genres>
              {genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </Genres>
          </TitleAndGenreCont>
          <Score>{vote_average}</Score>
        </RightContTop>
        <RightContBottom>
          <MovieDesc>{overview}</MovieDesc>
          <Date>20-02-2022</Date>
        </RightContBottom>
      </RightCont>
    </MovieItemWrapper>
  );
};

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  padding: 20px;
`;

const LeftCont = styled.div`
  display: inline-block;
  margin-right: 20px;
`;

const RightCont = styled.div`
  display: inline-block;
`;

const RightContTop = styled.div``;
const TitleAndGenreCont = styled.div``;
const MovieTitle = styled.h4``;
const Genres = styled.div``;
const Score = styled.div``;

const RightContBottom = styled.div``;
const MovieDesc = styled.div``;
const Date = styled.div``;
