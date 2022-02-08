import { createGlobalStyle } from "styled-components";

//TODO Leaving off type for theme for now, using implicit type, tighten up if/when going to production with the project
export const GlobalCSS = createGlobalStyle<any>`
  body {
    font-family: "Lato", sans-serif;
    font-size: 1em;
    line-height: 1.3;
    background-color: ${({ theme }) => theme.palette.lightBackground};
    color: ${({ theme }) => theme.palette.bodyColor};
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  input,
  textarea {
    font-family: "Lato", sans-serif;
    background-color: transparent;
  }
  
  #root {
    overflow-x: hidden;
  }

  .internal-icon {
    width: 30px;
  }

  .menu_nav_link.active {
    background-color: ${({ theme }) => theme.palette.primaryActive};
  }

  .search_inputs_cont .search_input:last-child {
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 768px) {
    .search_inputs_cont .search_input:last-child {
      display: none;
    }
  }

  .mobile_only_input {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    .mobile_only_input {
      display: block;
    }
  }


`;
