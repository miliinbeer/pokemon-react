import styled from "styled-components";

export const Root = styled.div`
  position: absolute;
  max-width: 980px;
  margin: 50px auto;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`;

export const Title = styled.p`
  padding: 7px;
  text-transform: uppercase;
  border: 1px solid #fff;
`;

export const Info = styled.div`
  width: 142px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
