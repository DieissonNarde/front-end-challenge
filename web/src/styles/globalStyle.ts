import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #5C16C5;
    --bg-dark: #2D0C5E;
    --text: #FFFFFF;
    --select-button: #D18000;

    font-size: 62.5%; /* 1rem = 10px */
  }
`;

export default globalStyle;