import styled from "styled-components";
import { WhiteColor } from "../../Styles/Colors";
import { flexItem } from "../../Styles/flex";

export const Section = styled.section`
  padding: 1.25rem;
  margin: 20px auto auto auto;
  width: 100%;
  flex: 1;

  h1 {
    text-align: center;
    font-size: 1.88rem;
    font-weight: 700;
    margin-bottom: 15px;
  }

  p{
    text-align: center;
  }
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

export const CardMyProperty = styled.div`
  border-radius: 0.5rem;
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);

  img {
    display: block;
    max-width: 100%;
    height: 130px;
    object-fit: cover;
    width: 100%;
    border-radius: 0.5rem;
  }
`;

export const Wrapper = styled.div`
  padding-inline: 0.94rem;
  padding-block: 0.5rem 0.94rem;

  p:first-child {
    font-size: 1.13rem;
    font-weight: 600;
  }

  span {
    display: block;
    font-size: 1rem;
    color: #4b5563;
    line-height: 20px;
  }
`;

export const BoxButtons = styled.div`
  ${flexItem};
  gap: 0.38rem;
  margin-top: 8px;
`;

export const Button = styled.button<{ background: string }>`
  background-color: ${({ background }) => background};
  font-size: 1rem;
  color: ${WhiteColor};
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  display: block;
  padding-block: 0.5rem;
  padding-inline: 0.75rem;
`;
