import styled from "styled-components";

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

export const Error = styled.div`
  padding: 25px;
  text-align: center;
  text-transform: uppercase;
  border: 2px #fff solid;
`;