import React from "react";
import styled, { css } from "styled-components";
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
import { getGenreList, getPopularMovies } from "../../fetcher";
import SearchIcon from "../../images/search-icon-yellow.png";
import YearDateIcon from "../../images/year-icon.png";

const initState: DiscoverPagePropsType = {
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

export const Discover: React.FC<{
  setNavMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setNavMenuOpen }) => {
  const [discoverState, setDiscoverState] = React.useState(initState);
  const [error, setError] = React.useState<string>("");
  const {
    genreOptions,
    languageOptions,
    ratingOptions,
    totalCount,
    results,
    keyword,
    year,
  } = discoverState;

  const handleError = (error: ErrorEvent): void => {
    setError(error.message);
  };

  React.useEffect(() => {
    getGenreList("/genre/movie/list")
      .then(({ data }) => {
        setDiscoverState((state) => ({ ...state, genreOptions: data.genres }));

        getPopularMovies("/movie/popular")
          .then(({ data }) => {
            console.log("data", data);
            setDiscoverState((state) => ({
              ...state,
              results: data.results,
              totalCount: data.total_results,
            }));
          })
          .catch(handleError);
      })
      .catch(handleError);
  }, []);

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
          {error ? (
            <ErrorMessage>
              Sorry there was a "{error}" when trying to fetch movies, please
              try again later.
            </ErrorMessage>
          ) : (
            <MovieResults>
              {totalCount > 0 ? (
                <>
                  <TotalCounter>{totalCount} movies</TotalCounter>
                  <MovieList movies={results} genres={genreOptions} />
                </>
              ) : (
                <MessageWrapper>No records found</MessageWrapper>
              )}
            </MovieResults>
          )}
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
          <AsideContainer>Filters coming soon</AsideContainer>
        </PageAside>
      </PageContentWrapper>
    </PageWrapper>
  );
};

const PageItemCss = css`
  padding: 20px;
  border-radius: ${({ theme }) => theme.constants.borderRadius}px;
  background: ${({ theme }) => theme.palette.white};
`;

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

const MessageWrapper = styled.div`
  ${PageItemCss};
  margin-top: 30px;
  text-align: center;
`;

const ErrorMessage = styled(MessageWrapper)`
  color: red;
`;

const AsideContainer = styled.div`
  ${PageItemCss};
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
