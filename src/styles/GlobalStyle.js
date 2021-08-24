import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
  all: unset;
  display: revert;
}

*,
*::before,
*::after{
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
}

table {
  border-collapse: collapse;
}

body {
  min-height:100%; 
  position:relative; 
  padding-bottom: 170px;
}

`;



export default GlobalStyle;