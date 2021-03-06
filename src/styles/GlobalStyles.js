import { createGlobalStyle } from "styled-components";
import resetCSS from "reset-css";

const GlobalStyle = createGlobalStyle`
  ${resetCSS};
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

export default GlobalStyle;
