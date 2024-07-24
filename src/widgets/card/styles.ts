import styled from "styled-components";

export const Root = styled.div`
  padding: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
  color: #a0a0a0;
  @media (max-width: 800px) {
    padding: 22px;
    height: 300px;
  }
  @media (max-width: 550px) {
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  @media (max-width: 800px) {
    font-size: 28px;
  }
`;

export const Info = styled.div`
  font-size: 17px;
  @media (max-width: 800px) {
   font-size: 15px;
  }
`;
