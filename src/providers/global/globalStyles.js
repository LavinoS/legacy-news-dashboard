import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  }
`;

export default GlobalStyles;
