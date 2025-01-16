import styled from "styled-components";
import { WhiteColor } from "../../../Styles/Colors";

export const ButtonMobile = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  align-items: center;
  width: 38px;
  height: 36px;
  cursor: pointer;
  padding: 0.31rem;
  border-radius: 0.31rem;
  border: none;
  background-color: #a795ff;

  div {
    background-color: ${WhiteColor};
    height: 3px;
    width: 20px;
    border-radius: 0.19rem;
  }
`;
