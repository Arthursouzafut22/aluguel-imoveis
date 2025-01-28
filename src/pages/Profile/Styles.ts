import styled from "styled-components";
import { ButtonColor, WhiteColor } from "../../Styles/Colors";
import { flexColumns } from "../../Styles/flex";

export const Section = styled.section`
  margin: 40px auto auto auto;
  height: 70vh;
  padding: 1.25rem;

  h1 {
    text-align: center;
    font-size: 1.875rem;
    font-weight: 700;
  }
`;

export const Box = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  width: 100%;
  background-color: ${WhiteColor};
  padding: 0.9375rem;
  ${flexColumns("center", "center")}
  gap: 0.9375rem;
  border-radius: 0.5rem;
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);

  div {
    img {
      margin: 0 auto;
      display: block;
      border-radius: 50%;
    }

    span {
      font-size: 1.5rem;
      font-weight: 700;
      display: block;
      text-align: center;
      line-height: 32px;
    }

    p {
      font-size: clamp(0.9375rem, 3vw, 1.25rem);
      text-align: center;
      margin-bottom: 6px;
    }
  }
`;

export const Button = styled.button`
  margin: 0 auto;
  display: block;
  cursor: pointer;
  font-size: 1rem;
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${ButtonColor};
  color: ${WhiteColor};
`;
