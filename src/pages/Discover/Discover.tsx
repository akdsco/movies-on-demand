import React from "react";
import styled from "styled-components";
import {
  PageWrapper,
  PageMainSection,
  MobilePageTitle,
} from "../../components";
import { MovieList, SearchFilters } from "../../containers";
import { DiscoverPagePropsType } from "../../lib/domain";
// import * as fetcher from "../../fetcher";

const initState: DiscoverPagePropsType = {
  keyword: "",
  year: 0,
  results: [
    {
      id: "tt0137523",
      original_title: "Fight Club",
      vote_average: 8.4,
      genres: [
        { id: 1, name: "Drama" },
        { id: 2, name: "Comedy" },
        { id: 3, name: "Another" },
      ],
      overview:
        'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
      poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    },
  ],
  totalCount: 1,
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

export const Discover: React.FC<{
  setNavMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setNavMenuOpen }) => {
  const [discoverState, setDiscoverState] = React.useState(initState);
  const {
    genreOptions,
    languageOptions,
    ratingOptions,
    totalCount,
    results,
    keyword,
    year,
  } = discoverState;
  // TODO Write a function to preload the popular movies when page loads & get the movie genres

  // TODO Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
  const searchMovies = (keyword: string, year: string): void => {
    console.log(keyword, year);
  };

  return (
    <PageWrapper>
      <MobilePageTitle title="Discover" setNavMenuOpen={setNavMenuOpen} />
      <PageMainSection>
        <MovieFilters>
          <SearchFilters
            keyword={keyword}
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            searchMovies={(keyword: string, year: string): void =>
              searchMovies(keyword, year)
            }
            setDiscoverState={setDiscoverState}
          />
        </MovieFilters>
        <MovieResults>
          {totalCount >= 0 && <TotalCounter>{totalCount} movies</TotalCounter>}
          <MovieList movies={results} genres={genreOptions || []} />
        </MovieResults>
      </PageMainSection>
    </PageWrapper>
  );
};

const TotalCounter = styled.div`
  font-weight: 400;
  margin-bottom: 10px;
`;

const MovieResults = styled.div`
  margin-top: 40px;
`;

const MovieFilters = styled.div``;
