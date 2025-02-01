import styled from "styled-components";

export const loadRow = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  box-sizing: border-box;
  border-top: 5px solid #fff;
  border-left: 5px solid #fff;
  border-right: 5px solid #ff00;
  animation: loader 0.7s infinite linear;

  @keyframes loader {
    to {
      transform: rotate(360deg);
    }
  }
`;
