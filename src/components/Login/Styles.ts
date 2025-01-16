import styled from "styled-components";
import { WhiteColor } from "../../Styles/Colors";

export const Button = styled.button`
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.38rem;
  color: ${WhiteColor};
  background-color: rgba(0, 0, 0, 0.43);
  border: none;
  cursor: pointer;
  padding-block: 0.5rem;
  padding-inline: 0.75rem;
  border-radius: 0.38rem;
  transition: 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.67);
  }
`;
