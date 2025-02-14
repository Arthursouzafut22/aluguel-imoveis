import styled from "styled-components";
import { flexColumns } from "../../Styles/flex";
import { WhiteColor } from "../../Styles/Colors";

export const Section = styled.section`
  margin: 40px auto auto auto;
  padding: 1.25rem;
  width: 100%;
  flex: 1;
`;

export const Box = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  width: 100%;
  background-color: ${WhiteColor};
  padding: 1.88rem;
  ${flexColumns("center", "center")}
  gap: 0.75rem;
  border-radius: 0.5rem;
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 32px;
  }

  p {
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: block;
    color: ${WhiteColor};
    background-color: #eab308;
    padding: 0.31rem;
    border-radius: 0.5rem;
  }
`;

export const CardMessages = styled.div`
  width: 100%;
  padding: 0.88rem;
  border-radius: 0.5rem;
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);
  p {
    text-align: left;

    strong {
      font-size: 1.13rem;
    }
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.63rem;
  margin-top: 10px;

  @media screen and (max-width: 430px) {
    flex-wrap: wrap;
    gap: 0.38rem;
  }
`;

export const Button = styled.div<{ color: string }>`
  display: block;
  cursor: pointer;
  font-size: 1rem;
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${({ color }) => color};
  color: ${WhiteColor};

  @media screen and (max-width: 430px) {
    text-align: center;
    width: 100%;
  }
`;
