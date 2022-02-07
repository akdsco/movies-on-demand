import React from "react";
import styled, { css } from "styled-components";
import {
  DiscoverPagePropsType,
  LanguageOptionsType,
  RatingOptionsType,
} from "../../lib/domain";
import { SearchBar } from "../../components";
// import * as colors from "../../colors";
// import ExpandableFilter from "../../components/expandablefilter";
// import SearchBar from "../../components/searchbar";
import SearchIcon from "../../images/search-icon-yellow.png";
// import CalendarIcon from "../../images/year-icon.png";

type SearchFilterPropsType = {
  //TODO adjust props type once you start implementing (setting string for now)
  keyword: string;
  genres: string[];
  ratings: RatingOptionsType[];
  languages: LanguageOptionsType[];
  searchMovies: (keyword: string, year: string) => void;
  setDiscoverState: React.Dispatch<React.SetStateAction<DiscoverPagePropsType>>;
};

export const SearchFilters: React.FC<SearchFilterPropsType> = ({
  keyword,
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
          type="text"
          value={keyword}
          onChange={(e) =>
            setDiscoverState((state) => ({ ...state, keyword: e.target.value }))
          }
          iconSrc={SearchIcon}
        />
        {/*TODO Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movies</CategoryTitle>
        {/*TODO Implement a component called "ExpandableFilter" and apply it to all filter categories */}
      </SearchFiltersCont>
    </FiltersWrapper>
  );
};

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div<{ marginBottom?: boolean }>`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.div``;
