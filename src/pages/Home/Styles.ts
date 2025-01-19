import styled from "styled-components";

export const Main = styled.main`
  padding: 1.25rem;
`;

export const ContainerCards = styled.div<{ mobile: boolean }>`
  max-width: 1220px;
  display: flex;
  align-items: center;
  flex-wrap: ${({ mobile }) => mobile && "wrap"};
  margin: 10px auto auto auto;
  gap: 0.94rem;
`;

export const CardsItems = styled.div<{ background?: string; mobile: boolean }>`
  padding: 1.13rem;
  border-radius: 0.5rem;
  /* box-shadow: 2px 5px 10px -1px rgba(204, 204, 204, 0.21); */
  /* box-shadow: 2px 5px 10px 1px rgba(204, 204, 204, 0.21); */
  box-shadow: 2px 5px 11px 0px rgba(204, 204, 204, 0.21);
  background-color: ${({ background }) => background};
  flex: ${({ mobile }) => (mobile ? "initial" : "1")};

  p {
    line-height: 20px;
  }
`;

export const Button = styled.button<{ background: string; color: string }>`
  font-size: 1rem;
  display: block;
  color: ${({ color }) => color};
  background-color: ${({ background }) => background};
  padding-inline: 0.63rem;
  padding-block: 0.38rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  margin-top: 15px;
`;
