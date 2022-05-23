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
    --text-button: #323232;
    --selected-button: #D18000;

    font-size: 62.5%; /* 1rem = 10px */
    font-family: 'Roboto', sans-serif;
  }
`;

export default globalStyle;