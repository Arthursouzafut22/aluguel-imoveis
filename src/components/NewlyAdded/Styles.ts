import styled from "styled-components";

export const WrapperNewlyAdded = styled.div`
  max-width: 1220px;
  margin: 40px auto auto auto;

  h2 {
    font-size: 30px;
    text-align: center;
    margin: 15px auto;
  }
`;

export const Box = styled.div<{ mobile: boolean }>`
  display: flex;
  align-items: center;
  flex-wrap: ${({ mobile }) => mobile && "wrap"};
  gap: 1.25rem;
`;
