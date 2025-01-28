import styled from "styled-components";
import { flexItem } from "../../Styles/flex";

export const WrapperHighlights = styled.div`
  max-width: 1220px;
  margin: 40px auto auto auto;

  h2 {
    font-size: 1.875rem;
    text-align: center;
    margin: 15px auto;
  }
`;

export const Box = styled.div<{ mobile: boolean }>`
  ${flexItem};
  flex-wrap: ${({ mobile }) => mobile && "wrap"};
  gap: 0.94rem;
`;
