import styled from "styled-components";

export enum colors {
  blue = "#4895ff",
  red = "#b3404a",
  green = "#3bb54a",
}

export type ColorType = keyof typeof colors;

type props = { color: ColorType };

export const Wrapper = styled.div<props>`
  border-radius: 5px;
  margin: 0.5em 1em 0.5em 0;
  padding: 1em;
  transition: all 0.3s ease-out;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);

  border-left: 3px solid ${({ color }) => colors[color]};

  :hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;
