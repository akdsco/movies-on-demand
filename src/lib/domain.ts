export type RatingOptionsType = { id: number; name: number };
export type LanguageOptionsType = { id: string; name: string };

export type DiscoverPagePropsType = {
  //TODO adjust props type once you start implementing (setting string for now)
  keyword: string;
  year: number;
  results: Movie[];
  totalCount: number;
  genreOptions: string[];
  ratingOptions: RatingOptionsType[];
  languageOptions: LanguageOptionsType[];
};

export type Movie = {
  id: string;
  original_title: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  overview: string;
  poster_path: string;
};
