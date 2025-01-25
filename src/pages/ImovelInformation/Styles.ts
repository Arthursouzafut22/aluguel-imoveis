import styled from "styled-components";
import { ButtonColor, WhiteColor } from "../../Styles/Colors";
import { flexItem } from "../../Styles/flex";

export const Section = styled.section``;

export const WrapperGlobal = styled.div`
  padding: 1.25rem;
`;

export const Box = styled.div<{ mobile: boolean }>`
  max-width: 1220px;
  margin: 20px auto auto auto;
  display: flex;
  align-items: start;
  flex-wrap: ${({ mobile }) => mobile && "wrap"};
  gap: 1.25rem;
`;

export const WrapperOne = styled.div<{ mobile: boolean }>`
  display: flex;
  align-items: start;
  flex-direction: column;
  max-width: ${({ mobile }) => (mobile ? "100%" : "800px")};
  gap: 0.88rem;
`;

export const ContainerOne = styled.div<{ mobile: boolean }>`
  padding: 1.13rem;
  border-radius: 0.5rem;
  background-color: ${WhiteColor};
  width: 100%;
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);

  h1 {
    margin-block: 6px;
  }
  .text-location {
    font-size: 1rem;
    ${flexItem};
    gap: 0.25rem;
    color: #c2410c;
    line-height: 24px;
  }

  h3 {
    font-size: 1.13rem;
    font-weight: 700;
    background-color: rgb(117, 104, 179);
    color: ${WhiteColor};
    padding-inline: 0.5rem;
    padding-block: 0.31rem;
    margin-block: 12px;
  }
`;

export const BoxValues = styled.div`
  ${flexItem}
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
  }

  div {
    ${flexItem}
    gap:  0.38rem;

    span {
      display: block;
      font-size: 1rem;
      font-weight: 700;
      color: #6b7280;
    }

    p {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${ButtonColor};
    }
  }
`;

export const ContainerTwo = styled.div<{ mobile: boolean }>`
  padding: 1.13rem;
  border-radius: 0.5rem;
  width: 100%;
  background-color: ${WhiteColor};
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);

  p {
    color: #727986;
    line-height: 24px;
  }
`;

export const BoxPrices = styled.div`
  ${flexItem}
  justify-content: center;
  gap: 1.25rem;
  margin: 18px 0px 12px 0px;

  @media screen and (max-width: 767px) {
    span {
      display: none;
    }
  }

  div {
    ${flexItem}
    gap: 0.31rem;

    p,
    span {
      font-size: 1.25rem;
      line-height: 28px;
      color: ${ButtonColor};
    }
  }
`;

export const ContainerComodidades = styled.div<{ mobile: boolean }>`
  padding: 1.13rem;
  border-radius: 0.5rem;
  background-color: ${WhiteColor};
  width: 100%;
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);

  ul {
    ${flexItem}
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 12px;

    @media screen and (max-width: 767px) {
      flex-direction: column;
      align-items: start;
    }

    li {
      ${flexItem}
      gap:  0.50rem;
    }
  }
`;

export const WrapperTwo = styled.aside<{ mobile: boolean }>`
  max-width: 100%;
  width: ${({ mobile }) => mobile && "100%"};

  button {
    font-size: 1rem;
    font-weight: 700;
    ${flexItem}
    justify-content: center;
    gap: 0.38rem;
    width: 100%;
    padding-block: 0.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    border: none;
    background-color: ${ButtonColor};
    color: ${WhiteColor};
  }
`;

export const CardOwner = styled.div`
  padding: 1.13rem;
  margin-top: 20px;
  width: 100%;
  border-radius: 0.5rem;
  background-color: ${WhiteColor};
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);

  h3 {
    font-size: 1.44rem;
    line-height: 28px;
  }

  p {
    margin-top: 12px;
  }
`;
