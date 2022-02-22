import styled, { css } from "styled-components";

export type CustomType = "start" | "column";

type props = { customClass?: CustomType };

export const Wrapper = styled.div<props>`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${({ customClass }) =>
    customClass?.includes("start") &&
    css`
      justify-content: flex-start;
    `}

  ${({ customClass }) =>
    customClass?.includes("column") &&
    css`
      flex-direction: column;
      justify-content: flex-start;
    `}
`;
