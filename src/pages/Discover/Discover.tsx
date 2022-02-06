import React from "react";
import styled from "styled-components";
import { SearchFilters, MovieList, PageWrapper } from "../../components";
import { MoviePropsType } from "../../lib/domain";
// import * as colors from "../../colors";
// import * as fetcher from "../../fetcher";

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

export const Discover: React.FC = () => {
  const [state, setState] = React.useState(initState);

  // TODO Write a function to preload the popular movies when page loads & get the movie genres

  // TODO Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
  const searchMovies = (keyword: string, year: string): void => {
    console.log(keyword, year);
  };

  const { genreOptions, languageOptions, ratingOptions, totalCount, results } =
    state;

  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};

const TotalCounter = styled.div`
  font-weight: 900;
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div``;

const MobilePageTitle = styled.header``;
