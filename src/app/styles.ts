import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    color: #FFF;
    font-family: "Raleway", sans-serif;
    background-color: #131313;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
