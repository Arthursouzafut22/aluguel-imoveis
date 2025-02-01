import styled from "styled-components";
import { WhiteColor } from "../../../Styles/Colors";
import { flexColumns } from "../../../Styles/flex";

export const Modal = styled.div`
  ${flexColumns("initial", "initial")};
  width: 11.88rem;
  border-radius: 0.5rem;
  background-color: ${WhiteColor};
  position: absolute;
  transform: translate(-78%, 6%);
  z-index: 15;

  button {
    font-size: 0.88rem;
    display: block;
    padding: 0.38rem;
    cursor: pointer;
    text-align: left;
    padding-inline: 0.63rem;
    padding-block: 0.5rem;
    border: none;
    background-color: transparent;
    transition: 0.3s all;

    &:hover {
      background-color: #f0ebff;
      border-radius: 0.5rem;
    }
  }
`;
