import styled from "styled-components";
import { WhiteColor } from "../../../Styles/Colors";

export const Section = styled.section`
  background-color: rgba(0, 0, 0, 0.22);
  position: fixed;
  height: 100vh;
  transform: translate(-50%, -50%);
  width: 100%;
  left: 50%;
  right: 50%;
  top: 50%;
`;

export const Wrapper = styled.div`
  padding: 1.25rem !important;
`;

export const Modal = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.63rem;
  margin: 0 auto;
  height: 200px;
  border-radius: 0.50rem;
  background-color: ${WhiteColor};
  position: absolute;
  width: 100%;
  transform: translate(-50%, -50%);
  left: 50%;
  right: 50%;
  top: 50%;

  p {
    font-size: 1.13rem;
    font-weight: 700;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
  }
`;

export const Button = styled.button<{ color: string }>`
  background-color: ${({ color }) => color};
  font-size: 1rem;
  color: ${WhiteColor};
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  display: block;
  padding-block: 0.50rem;
  padding-inline: 0.94rem;
`;
