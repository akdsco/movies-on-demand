import React from "react";
import styled, { css } from "styled-components";
import {
  DiscoverPagePropsType,
  GenreObject,
  LanguageOptionsType,
  RatingOptionsType,
  SearchMovies,
} from "../../lib/domain";
import { SearchBar } from "../../components";
// import * as colors from "../../colors";
// import ExpandableFilter from "../../components/expandablefilter";
// import SearchBar from "../../components/searchbar";
import SearchIcon from "../../images/search-icon-yellow.png";
import FilterIcon from "../../images/filter-icon.png";
// import CalendarIcon from "../../images/year-icon.png";

type SearchFilterPropsType = {
  keyword: string;
  year: number;
  genres: GenreObject[];
  ratings: RatingOptionsType[];
  languages: LanguageOptionsType[];
  searchMovies: SearchMovies;
  setDiscoverState: React.Dispatch<React.SetStateAction<DiscoverPagePropsType>>;
};

export const SearchFilters: React.FC<SearchFilterPropsType> = ({
  keyword,
  year,
  genres,
  ratings,
  languages,
  searchMovies,
  setDiscoverState,
}) => {
  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          value={keyword}
          placeholder="Search for movies"
          onChange={(e) => {
            setDiscoverState((state) => ({
              ...state,
              keyword: e.target.value,
            }));
            searchMovies(e.target.value, year);
          }}
          iconSrc={SearchIcon}
        />
        <FiltersButton>
          {/* Non functional, cutting scope due to time constraint */}
          <img className="internal-icon" src={FilterIcon} alt="" />
        </FiltersButton>
      </SearchFiltersCont>
      {/* Non functional, cutting scope due to time constraint */}
      {/*  /!*TODO Implement a component called "ExpandableFilter" and apply it to all filter categories *!/*/}
      {/*<SearchFiltersCont className="movies">*/}
      {/*  <CategoryTitle>Movies</CategoryTitle>*/}
      {/*</SearchFiltersCont>*/}
    </FiltersWrapper>
  );
};

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div<{ marginBottom?: boolean }>`
  background-color: white;
  padding: 20px;
  border-radius: ${({ theme }) => theme.constants.borderRadius}px;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.div``;

const FiltersButton = styled.button`
  background: unset;
  border: unset;
  border-bottom: 2px solid ${({ theme }) => theme.palette.primaryActive};
  margin-left: 10px;
  &:hover {
    cursor: pointer;
    border-bottom-color: ${({ theme }) => theme.palette.primaryColor};
  }
`;
