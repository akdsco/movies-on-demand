import React from "react";
import styled from "styled-components";
import SearchFilters from "../../components/SearchFilter";
import MovieList from "../../components/MovieList";
// import * as colors from "../../colors";
// import * as fetcher from "../../fetcher";

export type RatingOptionsType = { id: number; name: number };
export type LanguageOptionsType = { id: string; name: string };

type MoviePropsType = {
  //TODO adjust props type once you start implementing (setting string for now)
  keyword: string;
  year: number;
  results: object[] | string[];
  totalCount: number;
  genreOptions: string[];
  ratingOptions: RatingOptionsType[];
  languageOptions: LanguageOptionsType[];
};

const initState: MoviePropsType = {
  keyword: "",
  year: 0,
  results: [],
  totalCount: 0,
  genreOptions: [],
  ratingOptions: [
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 },
  ],
  languageOptions: [
    { id: "GR", name: "Greek" },
    { id: "EN", name: "English" },
    { id: "RU", name: "Russian" },
    { id: "PO", name: "Polish" },
  ],
};

const Discover: React.FC = (props) => {
  const [state, setState] = React.useState(initState);

  // TODO Write a function to preload the popular movies when page loads & get the movie genres

  // TODO Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
  const searchMovies = (keyword: string, year: string): void => {
    console.log(keyword, year);
  };

  const { genreOptions, languageOptions, ratingOptions, totalCount, results } =
    state;

  return (
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle>{" "}
      {/* TODO MobilePageTitle should become visible on small screens & mobile devices*/}
      <MovieFilters>
        <SearchFilters
          genres={genreOptions}
          ratings={ratingOptions}
          languages={languageOptions}
          searchMovies={(keyword: string, year: string): void =>
            searchMovies(keyword, year)
          }
        />
      </MovieFilters>
      <MovieResults>
        {totalCount > 0 && <TotalCounter>{totalCount} results</TotalCounter>}
        <MovieList movies={results || []} genres={genreOptions || []} />
      </MovieResults>
    </DiscoverWrapper>
  );
};

const DiscoverWrapper = styled.main`
  padding: 60px 35px;
`;

const TotalCounter = styled.div`
  font-weight: 900;
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div``;

const MobilePageTitle = styled.header``;

export default Discover;
