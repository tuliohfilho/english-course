import styled, { css } from "styled-components";
import { Container } from "../../../components/layout";

export const Wrapper = styled(Container).attrs({
  customClass: "column",
})``;

export const CardContainer = styled(Container).attrs({
  customClass: "start",
})`
  justify-content: space-around;

  h2 {
    display: flex;
    padding: 0 2em 0.5em 2em;
    align-items: center;
    justify-content: center;
  }

  p {
    display: flex;
  }
`;

type PropsItem = {
  maxWidth?: boolean;
};
export const Item = styled.span<PropsItem>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      width: 100%;
    `}
`;
