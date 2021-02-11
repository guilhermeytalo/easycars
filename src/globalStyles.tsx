import {createGlobalStyle, DefaultTheme} from "styled-components";
import Ubuntu from "./resources/fonts/Ubuntu/Ubuntu-Medium.ttf";
export const defaultTheme: DefaultTheme = {
    /* Global Colors */
    colors: {
      primary: '#0C5990',
      secondary: '#707070',
      tertiary: '#FFFFFF',
    },
    fonts: ["Ubuntu"],
  /*Pesquisar como faz*/
 /*   fontSizes: {
      small: 12,
      medium: 16,
      large: 24,
      extraLarge: 32,
    }*/
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    src: url(${Ubuntu}) format('ttf');;
  }
`;
export default GlobalStyle;

