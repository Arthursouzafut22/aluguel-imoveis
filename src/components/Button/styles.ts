import styled from "styled-components";
import { ButtonColor, WhiteColor } from "../../Styles/Colors";

export const Button = styled.button`
  display: flex !important;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  padding-block: 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
  border: none;
  background-color: ${ButtonColor};
  color: ${WhiteColor};
  margin-top: 15px;
  transition: 0.3s;

  &:hover {
    background-color: #7c5dfa;
  }
`;