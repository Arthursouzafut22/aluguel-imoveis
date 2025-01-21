import styled from "styled-components";

export const WrapperHighlights = styled.div`
  max-width: 1220px;
  margin: 20px auto auto auto;

  h1 {
    text-align: center;
    margin: 15px auto;
  }
`;

export const Box = styled.div<{mobile:boolean}>`
  display: flex;
  align-items: center;
  flex-wrap: ${({mobile}) => mobile && "wrap"};
  gap: 0.94rem;
`;
