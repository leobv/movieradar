import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  img {
    max-width: 100%;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
`;

export default GlobalStyle;