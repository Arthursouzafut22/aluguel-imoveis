import styled, { css } from "styled-components";
import { WhiteColor, PurpleColor, ButtonColor } from "../../Styles/Colors";
import { flexItem, flex } from "../../Styles/flex";

const styleButton = css`
  font-size: 1rem;
  ${flex("center", "center")};
  color: ${WhiteColor};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Header = styled.header<{ mobile: boolean }>`
  background: ${PurpleColor};
  padding: 1.25rem;

  .wrapper {
    ${flexItem}

    img {
      display: block;
      max-width: 40px;
      margin: 0 auto;
    }
  }
`;

export const Nav = styled.nav<{ mobile: boolean }>`
  max-width: 1220px;
  ${flexItem}
  justify-content: space-between;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  gap: ${({ mobile }) => mobile && " 0.63rem"};
  background-color: ${({ mobile }) => mobile && "#a795ff"};
  padding-block: ${({ mobile }) => mobile && " 0.63rem"};
  margin: ${({ mobile }) => (mobile ? "10px 0 0 0" : "0 auto")};
  border-radius: 0.5rem;

  .wrapper-modal {
    position: relative;
  }
`;

export const containerOne = styled.div<{ mobile: boolean }>`
  ${flexItem};
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  gap: ${({ mobile }) => (mobile ? "0.63rem" : "1.25rem")};

  .active {
    background-color: black;
    padding-block: 0.5rem;
    padding-inline: 0.75rem;
    border-radius: 0.38rem;
  }

  .wrapper-link {
    ${flexItem};
    gap: 0.5rem;
    display: ${({ mobile }) => (mobile ? "none" : "flex")};

    span {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${WhiteColor};
    }
  }

  img {
    display: block;
    max-width: 40px;
  }

  a {
    font-size: ${({ mobile }) => (mobile ? "14px" : "1rem")};
    color: ${WhiteColor};
  }
`;

export const containerTwo = styled.div`
  ${flexItem};
  gap: 0.38rem;

  a {
    background-color: rgba(0, 0, 0, 0.43);
    ${styleButton};
  }

  .msn {
    position: relative;

    .quanty-msn {
      font-size:  0.81rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: absolute;
      background-color: red;
      color: ${WhiteColor};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      top: -8px;
      right: 0;
    }
  }

  .btn-user {
    ${styleButton};
    border: none;
    background-color: #78919c;

    img {
      display: block;
      max-width: 100%;
      border-radius: 50%;
    }
  }
`;

export const Wrapper = styled.div<{ mobile: boolean; visible: boolean }>`
  max-width: 1220px;
  margin: ${({ visible }) =>
    !visible ? " 40px auto auto auto" : " 70px auto auto auto"};
  padding-bottom: ${({ visible }) => (!visible ? "5px" : "30px")};

  h1 {
    font-size: ${({ mobile }) => (mobile ? "40px" : "60px")};
    line-height: ${({ mobile }) => (mobile ? "40px" : "60px")};
    font-weight: 900;
    text-align: center;
    margin: 18px 0px;
    color: ${WhiteColor};
  }

  p {
    font-size: 1.25rem;
    text-align: center;
    color: ${WhiteColor};
    margin: 0;
    line-height: 28px;
  }

  form {
    ${flex("center", "center")};
    flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
    gap: 0.38rem;
    margin-top: 20px;

    input {
      font-size: 1rem;
      display: block;
      padding-inline: 0.94rem;
      padding-block: 0.5rem;
      border: none;
      border-radius: 0.5rem;
      width: ${({ mobile }) => (mobile ? "100%" : "initial")};
      border: 2px solid #a795ff;

      &:focus {
        outline: 2px solid ${ButtonColor};
        border: 2px solid transparent;
      }
    }

    select {
      font-size: 1rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      border: none;
      width: ${({ mobile }) => (mobile ? "100%" : "initial")};
      border: 2px solid #a795ff;

      &:focus {
        outline: 2px solid ${ButtonColor};
        border: 2px solid transparent;
      }
    }

    button {
      font-size: 1rem;
      border-radius: 0.5rem;
      color: ${WhiteColor};
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      background-color: #a795ff;
      outline-color: ${WhiteColor};
      width: ${({ mobile }) => (mobile ? "100%" : "initial")};
    }
  }
`;
