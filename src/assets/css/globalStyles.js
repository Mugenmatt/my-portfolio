import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quattrocento', Arial, Sans-Serif;
    scroll-behavior: smooth;
  }

  /* Eliminar las barras deslizantes */
  html {
    scrollbar-width: none; 
    -ms-overflow-style: none;
    background-color: #0A192F;
  }

  html::-webkit-scrollbar {
      width: 0px; 
}

`;

export default GlobalStyles;