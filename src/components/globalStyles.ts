import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    font-family: Roboto, Arial, sans-serif;
    transition: all 0.5s linear;
  }

  h1, h2, h3, h4, h5, h6 {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
  }
`;