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
