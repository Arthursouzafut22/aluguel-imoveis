import styled from "styled-components";

export const CardImoveis = styled.div<{ mobile: boolean }>`
  border-radius: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.50rem;
  box-shadow: 2px 5px 10px 1px rgba(204, 204, 204, 0.21);
  border: 1px solid;
  width: 100%;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }

  .filho-one {
    max-width: ${({ mobile }) => (mobile ? "initial" : "300px")};
    width: 100%;

    img {
      display: block;
      max-width: 100% !important;
      border-radius: 8px;
    }
  }
  .filho-two {
    max-width: ${({ mobile }) => (mobile ? "initial" : "300px")};
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    padding-inline: 0.94rem;

    @media screen and (max-width: 767px) {
      max-width: 100% !important;
      flex: 2;
    }
  }
`;

export const BoxInfo = styled.div`
  p:first-child {
    font-weight: 700;
    font-size:  1.13rem;
    line-height: 19px;
    margin-top: 10px;
  }

  p:last-child {
    margin: 3px 0px 8px 0px;
    color: #6b7280;
  }
`;

export const WrrapperAreas = styled.div<{ mobile: boolean }>`
  display: flex;
  align-items: center;
  flex-wrap: ${({ mobile }) => mobile && "wrap"};
  gap: ${({ mobile }) => (mobile ? "10px" : "30px")};
`;

export const Box = styled.div<{ mobile: boolean }>`
  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  span {
    display: block;
    font-size: ${({ mobile }) => mobile && "13px"} !important;
  }
`;

export const BoxMoney = styled.div`
  display: flex;
  align-items: center;
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
  display: flex;
  align-items: center;
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
    color: #ffffff;
    background-color: #a795ff;
    border: none;
    display: block;
    padding-block: 0.50rem;
    padding-inline: 0.88rem;
    border-radius: 0.50rem;
    cursor: pointer;
  }
`;
