import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  color: #a0a0a0;
  font-size: 17px;
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  @media (max-width: 800px) {
    font-size: 28px;
  }
`;

export const Image = styled.img`
  width: 396px;
  height: 200px;
  object-fit: contain;
  @media (max-width: 800px) {
    width: 250px;
    height: 100px;
  }
`;
