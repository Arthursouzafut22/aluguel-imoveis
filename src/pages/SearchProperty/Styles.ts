import styled from "styled-components";
import { ButtonColor, WhiteColor } from "../../Styles/Colors";

export const Section = styled.section`
  padding: 1.25rem;
  margin: 20px auto auto auto;
  width: 100%;
  flex: 1;
`;

export const Wrapper = styled.div`
  max-width: 1220px;
  margin: 0 auto;

  h1 {
    margin: 10px 0px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  padding-block: 0.45rem;
  padding-inline: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${ButtonColor};
  color: ${WhiteColor};
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 1.25rem;
  max-width: 1220px;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
