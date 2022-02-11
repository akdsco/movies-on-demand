import React from "react";
import styled from "styled-components";
import { Movie } from "../../lib/domain";

export const MovieItem: React.FC<Movie> = ({
  genres,
  original_title,
  overview,
  poster_path,
  vote_average,
  release_date,
}) => {
  return (
    <MovieItemWrapper>
      <LeftCont>
        <img src={`https://image.tmdb.org/t/p/w92/${poster_path}`} alt="" />
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
          <Score>{vote_average.toFixed(1)}</Score>
        </RightContTop>
        <RightContBottom>
          <MovieDesc>{overview}</MovieDesc>
          <Date>{release_date}</Date>
        </RightContBottom>
      </RightCont>
    </MovieItemWrapper>
  );
};

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: ${({ theme }) => theme.constants.borderRadius}px;
  padding: 20px;
  margin-bottom: 15px;
  display: flex;
  &:last-child {
    margin-bottom: 0;
  }
`;

const LeftCont = styled.div`
  display: inline-block;
  margin-right: 20px;
  position: relative;
  z-index: 1;
`;

const RightCont = styled.div`
  display: inline-block;
`;

const RightContTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const TitleAndGenreCont = styled.div``;
const MovieTitle = styled.h4`
  font-weight: 900;
  font-size: 1.3em;
  margin-top: 0;
  margin-bottom: 7px;
`;
const Genres = styled.div`
  margin-bottom: 8px;
  span {
    color: ${({ theme }) => theme.palette.primaryActive};
    font-size: 12px;
    margin-left: 3px;
    font-weight: 900;

    &:after {
      content: "|";
      margin-left: 3px;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      &:after {
        all: unset;
      }
    }
  }
`;
const Score = styled.div`
  background-color: ${({ theme }) => theme.palette.primaryActive};
  padding: 3px 5px;
  color: ${({ theme }) => theme.palette.white};
  font-weight: 900;
  font-size: 0.85em;
  border-radius: ${({ theme }) => theme.constants.borderRadius}px;
`;

const RightContBottom = styled.div``;
const MovieDesc = styled.div`
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 5em;
  line-height: 1em;
  font-size: 0.9em;
  &:before {
    content: "";
    width: 85%;
    max-width: 300px;
    height: 1em;
    position: absolute;
    right: 20px;
    bottom: 3.4em;
    background: linear-gradient(
      90deg,
      transparent 18px,
      ${({ theme }) => theme.palette.white}
    );
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    &:before {
      all: unset;
    }
  }
`;
const Date = styled.div`
  margin-top: 15px;
  font-size: 0.7em;
  color: ${({ theme }) => theme.palette.primaryActive};
`;
