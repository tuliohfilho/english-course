import styled, { css } from "styled-components";

export enum colors {
  blue = "#4895ff",
  red = "#b3404a",
  green = "#3bb54a",
}

export type ColorType = keyof typeof colors;

export type CustomType = "max_width";

type props = { color: ColorType; customClass?: CustomType };

export const Wrapper = styled.div<props>`
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  padding: 0 1em 1em 1em;
  margin: 0 1em 1em 0;
  transition: all 0.3s ease-out;

  border-left: 3px solid ${({ color }) => colors[color]};

  ${({ customClass }) =>
    customClass === "max_width" &&
    css`
      width: 100%;
    `}

  :hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;
