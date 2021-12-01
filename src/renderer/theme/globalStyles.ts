import { createGlobalStyle } from 'styled-components';

import Lato from '../assets/fonts/Lato-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url(${Lato});
    font-weight: 400;
  }

  body {
    margin: 0;
    padding: 0;
    height: 29.9rem;
  }
  
  #root {
    height: 29.9rem;
  }
`;

export default GlobalStyle;
