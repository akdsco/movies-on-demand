import React from "react";
import styled from "styled-components";
import {
  PageWrapper,
  PageMainSection,
  MobilePageTitle,
  PageAside,
  PageContentWrapper,
  SearchBar,
} from "../../components";
import { MovieList, SearchFilters } from "../../containers";
import { DiscoverPagePropsType } from "../../lib/domain";
import SearchIcon from "../../images/search-icon-yellow.png";
import YearDateIcon from "../../images/year-icon.png";
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
      <PageContentWrapper>
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
            {totalCount >= 0 && (
              <TotalCounter>{totalCount} movies</TotalCounter>
            )}
            <MovieList movies={results} genres={genreOptions || []} />
          </MovieResults>
        </PageMainSection>
        {/* PageAside does not render on mobile devices */}
        <PageAside>
          <AsideContainer>
            <SearchBar
              value={keyword}
              placeholder="Search for movies"
              onChange={(e) =>
                setDiscoverState((state) => ({
                  ...state,
                  keyword: e.target.value,
                }))
              }
              iconSrc={SearchIcon}
            />
            {/*TODO make year change functional*/}
            <SearchBar
              value={year}
              placeholder="Year of release"
              onChange={(e) =>
                setDiscoverState((state) => ({
                  ...state,
                  year: Number(e.target.value),
                }))
              }
              iconSrc={YearDateIcon}
            />
          </AsideContainer>
          <AsideContainer>filters</AsideContainer>
        </PageAside>
      </PageContentWrapper>
    </PageWrapper>
  );
};

const TotalCounter = styled.div`
  font-weight: 400;
  margin-bottom: 10px;
  height: 20px;
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div`
  margin-bottom: 40px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;

const AsideContainer = styled.div`
  padding: 20px;
  border-radius: ${({ theme }) => theme.constants.borderRadius}px;
  background-color: ${({ theme }) => theme.palette.white};
  margin-bottom: 10px;

  .text-field-input-icon {
    width: 20px;
  }

  & div:first-child {
    margin-bottom: 5px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
