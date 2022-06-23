import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }
  
  :root {
    box-sizing: border-box;
  }
  
  *,
  ::before,
  ::after {
     box-sizing: border-box;
  }
  
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    -webkit-font-smoothing: antialiased !important;
    background-color: #fff;
    color: #555;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.42857143;
    font-weight: normal;
    text-align: left;
    margin: 0;
  }
  
  button {
    cursor: pointer;
  }

  #root{
    position: relative;
    height: 100%;
  }
  
`;

export default GlobalStyle;
