import styled from "styled-components";
import { flex } from "../../Styles/flex";

export const Footer = styled.footer`
  padding: 1.25rem;
  background-color: #e5e7eb;
  margin: 40px auto auto auto;
`;

export const Box = styled.div<{ mobile: boolean }>`
  ${flex("center", "space-between")};
  flex-wrap: wrap;
  max-width: 1220px;
  /* flex-wrap: ${({ mobile }) => mobile && "wrap"} !important; */
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  margin: 0 auto;

  div {
    background-color: #a795ff;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  p {
    color: #6b7280;
    font-size: 14px;
  }
`;
