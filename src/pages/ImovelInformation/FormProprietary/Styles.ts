import styled, { css } from "styled-components";
import { ButtonColor } from "../../../Styles/Colors";

const styleInputs = css`
  padding-inline: 0.5rem;
  padding-block: 0.31rem;
  font-size: 1.06rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 2px solid darkgray;
`;

export const Form = styled.form`
  width: 100% !important;

  input {
    ${styleInputs}
    width: 100%;
    margin-bottom: 5px;

    &:focus {
      outline: 2px solid ${ButtonColor};
      border: 2px solid transparent;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;

    label {
      font-weight: 600;
    }

    textarea {
      ${styleInputs}

      &:focus {
        outline: 2px solid ${ButtonColor};
        border: 2px solid transparent;
      }
    }
  }

  button {
    margin-top: 15px;
  }
`;
