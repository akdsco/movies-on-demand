export type RatingOptionsType = { id: number; name: number };
export type LanguageOptionsType = { id: string; name: string };

export type MoviePropsType = {
  //TODO adjust props type once you start implementing (setting string for now)
  keyword: string;
  year: number;
  results: object[] | string[];
  totalCount: number;
  genreOptions: string[];
  ratingOptions: RatingOptionsType[];
  languageOptions: LanguageOptionsType[];
};
