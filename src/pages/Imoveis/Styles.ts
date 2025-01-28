import styled from "styled-components";

export const Section = styled.section`
  padding: 1.25rem;
  margin: 40px auto auto auto;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 20px;
  max-width: 1220px;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
