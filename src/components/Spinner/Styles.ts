import styled from "styled-components";
import { PropsSpinner } from "./types";

export const loadRow = styled.div<{ config: PropsSpinner }>`
  width: ${({ config }) => config.width};
  height: ${({ config }) => config.height};
  border-radius: 50%;
  box-sizing: border-box;
  border-top: ${({ config }) => config.borderTop};
  border-left: ${({ config }) => config.borderLeft};
  border-right: 5px solid #ff00;
  animation: loader 0.7s infinite linear;

  @keyframes loader {
    to {
      transform: rotate(360deg);
    }
  }
`;
