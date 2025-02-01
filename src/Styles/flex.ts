import { css } from "styled-components";

export const flexItem = css`
  display: flex;
  align-items: center;
`;

export const flex = (align: string, justify: string) => {
  return css`
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
  `;
};

export const flexColummStart = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

export const flexColumns = (justify: string, align: string) => {
  return css`
    display: flex;
    flex-direction: column;
    align-items: ${align};
    justify-content: ${justify};
  `;
};
