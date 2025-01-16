import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 body *{
    font-family: "Poppins", serif;
 }

 a{
    display: block;
    text-decoration: none;
 }

 ul>li{
    list-style: none;
    padding: 0;
 }

`;
