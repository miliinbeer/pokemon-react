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

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Main = styled.main`
  margin-top: 54px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 550px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 10px;
  @media (max-width: 550px) {
    justify-content: center;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 484px;
  height: 500px;
  background: #000;
  @media (max-width: 800px) {
    width: 294px;
    height: 300px;
  }
`;