import styled from "styled-components";
import { WhiteColor } from "../../../Styles/Colors";

export const Section = styled.section`
  background-color: rgba(0, 0, 0, 0.29);
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
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.63rem;
  margin: 0 auto;
  height: 200px;
  border-radius: 0.5rem;
  background-color: ${WhiteColor};
  position: absolute;
  width: 100%;
  transform: translate(-50%, -50%);
  left: 50%;
  right: 50%;
  top: 50%;
  padding-inline: 15px;

  p {
    font-size: 1rem;
    text-align: center;
    color: #4b5563;
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
  padding-block: 0.5rem;
  padding-inline: 0.98rem;
`;
