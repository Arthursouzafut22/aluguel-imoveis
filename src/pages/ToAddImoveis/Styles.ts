import styled from "styled-components";
import { ButtonColor, WhiteColor } from "../../Styles/Colors";
import { flex, flexItem } from "../../Styles/flex";

export const Section = styled.section`
  padding: 1.25rem;
  margin: 40px auto auto auto;
`;

export const Box = styled.div`
  max-width: 1220px;
  margin: 0 auto;
`;

export const Form = styled.form`
  max-width: 670px;
  margin: 0 auto;
  padding: 1.56rem;
  background-color: ${WhiteColor};
  border-radius: 0.5rem;
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);

  h1 {
    text-align: center;
    font-size: 1.88rem;
    font-weight: 600;
    margin-bottom: 25px;
  }

  textarea {
    width: 100%;
    padding: 0.38rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #e5e7eb;

    &:focus {
      outline: 2px solid ${ButtonColor};
      border: 1px solid transparent;
    }
  }

  label,
  input {
    display: block;
  }
  select {
    padding: 8px;
  }

  input[type="text"],
  input[type="number"],
  input[type="email"],
  input[type="file"],
  select {
    font-size: 1rem;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.38rem;
    border: 1px solid #e5e7eb;

    &:focus {
      outline: 2px solid ${ButtonColor};
      border: 1px solid transparent;
    }
  }
`;

export const BoxInputs = styled.div`
  label {
    font-weight: 700;
    margin-bottom: 4px;
  }
  input,
  select {
    margin-bottom: 8px;
  }
`;

export const BoxArea = styled.div`
  margin-bottom: 8px;

  label {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 4px;
  }
`;

export const BoxCep = styled.div`
  label {
    margin-bottom: 4px;
    font-weight: 700;
  }
  input,
  select {
    margin-bottom: 8px;
  }

  select {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    max-height: 200px;
    background-color: "#fff";
    z-index: 999;
  }
`;

export const BoxSpecs = styled.div<{ mobile: boolean }>`
  ${flexItem};
  gap: 0.5rem;
  margin-top: 10px;
  flex-wrap: ${({ mobile }) => mobile && "wrap"};
  div {
    width: 100%;
  }

  label {
    margin-bottom: 4px;
  }
`;

export const BoxComodidades = styled.div`
  margin-top: 14px;

  label {
    margin-bottom: 4px;
    font-weight: 700;
  }
`;

export const Container = styled.div<{ mobile: boolean }>`
  display: grid;
  align-items: center;
  grid-template-columns: ${({ mobile }) =>
    mobile ? "1fr afr" : " 2fr 2fr 1.5fr"};
  gap: 0 0.63rem;

  label {
    font-weight: 500 !important;
    line-height: 20px;
    font-size: 0.94rem;
  }
`;

export const WrapperCheckbox = styled.div`
  ${flex("center", "start")};
  flex-direction: row-reverse;
  gap: 0.31rem;
`;

export const BoxPayment = styled.div`
  margin-top: 15px;
  background-color: #f0ebff;
  padding: 0.63rem;
`;

export const WrapperPayment = styled.div<{ mobile: boolean }>`
  ${flexItem};
  flex-wrap: ${({ mobile }) => mobile && "wrap"};
  gap: ${({ mobile }) => (mobile ? "6px" : "20px")};
`;

export const BoxOwner = styled.div`
  margin-top: 15px;
  label {
    margin-bottom: 4px;
  }
  input {
    margin-bottom: 8px;
  }
`;

export const BoxFiles = styled.div`
  margin-top: 15px;

  @media screen and (max-width: 767px) {
    input {
      font-size: 0.88rem !important;
    }
  }

  label {
    font-weight: 700;
    margin-bottom: 8px;
  }
`;
