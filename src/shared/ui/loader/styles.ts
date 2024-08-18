import styled from "styled-components";

export const Root = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: #1986ec;
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  &:before,
  &:after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #1986ec;
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 800px) {
    width: 2.625rem;
    height: 2.625rem;
    border-width: 0.3rem;
  }
`;
