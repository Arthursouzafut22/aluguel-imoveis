import styled from "styled-components";
import { flex, flexColummStart, flexItem } from "../../Styles/flex";
import { ButtonColor, WhiteColor } from "../../Styles/Colors";

export const CardImoveis = styled.div<{
  mobile: boolean;
  flexdirection: string;
  config?: string;
}>`
  ${flex("center", "space-between")};
  flex-direction: ${({ flexdirection }) => flexdirection};
  border-radius: 0.5rem;
  box-shadow: 2px 5px 12px -2px rgba(204, 204, 204, 0.39);
  width: 100%;
  background-color: ${WhiteColor};
  height: ${({ config }) => config};

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    width: 100%;
    height: auto;
  }
`;

export const BoxOne = styled.div<{
  mobile: boolean;
  config?: { height?: string; flex?: number; top?: string; imgWidth?: string };
}>`
  max-width: ${({ mobile }) => (mobile ? "initial" : "")};
  width: 100%;
  position: relative;

  @media screen and (max-width: 767px) {
    img {
      height: auto !important;
    }
  }

  h2 {
    position: absolute;
    font-size: 1rem;
    background-color: ${WhiteColor};
    padding-inline: 0.31rem;
    padding-block: 0.19rem;
    border-radius: 0.5rem;
    top: ${({ config }) => config?.top};
    left: 10px;
  }

  img {
    display: block;
    max-width: 100% !important;
    width: 100%;
    border-radius: 0.5rem;
    margin: 0;
    padding: 0;
    height: ${({ config }) => config?.imgWidth};
    object-fit: cover;
  }
`;

export const BoxTwo = styled.div<{
  mobile: boolean;
  config?: { height?: string; flex?: number; top?: string; imgWidth?: string };
}>`
  max-width: ${({ mobile }) => (mobile ? "initial" : "300px")};
  ${flexColummStart}
  width: 100%;
  max-width: 100%;
  padding-inline: 0.94rem;
  flex: ${({ config }) => config?.flex};

  @media screen and (max-width: 767px) {
    max-width: 100% !important;
    flex: 2;
  }
`;

export const BoxInfo = styled.div`
  p:first-child {
    font-weight: 700;
    font-size: 1.13rem;
    line-height: 19px;
    margin-top: 10px;
  }

  p:last-child {
    margin: 3px 0px 8px 0px;
    color: #6b7280;
  }
`;

export const WrrapperAreas = styled.div<{ mobile: boolean }>`
  ${flexItem}
  flex-wrap: ${({ mobile }) => mobile && "wrap"};
  gap: ${({ mobile }) => (mobile ? " 0.63rem" : " 1.88rem")};
`;

export const Box = styled.div<{ mobile: boolean }>`
  div {
    ${flexItem}
    gap: 0.25rem;
  }

  span {
    display: block;
    font-size: ${({ mobile }) => mobile && "0.81rem"} !important;
  }
`;

export const BoxMoney = styled.div`
  ${flexItem}
  gap: 0.94rem;
  margin-top: 8px;

  @media screen and (max-width: 333px) {
    gap: 0.63rem;
    flex-wrap: wrap;
  }

  .on {
    display: flex !important;
    align-items: start !important;
    gap: 0.25rem;

    span,
    path {
      display: block;
    }

    p {
      font-size: 0.88rem;
    }
  }
`;

export const BoxLocation = styled.div<{ mobile: boolean }>`
  ${flexItem};
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 1.25rem;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    width: 100%;

    button {
      width: 100% !important;
    }
  }

  span {
    display: block;
  }

  button {
    font-size: 0.94rem;
    color: ${WhiteColor};
    background-color: ${ButtonColor};
    border: none;
    display: block;
    padding-block: 0.5rem;
    padding-inline: 0.88rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;
