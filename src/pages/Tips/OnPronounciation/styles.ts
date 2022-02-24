import styled, { css } from "styled-components";

import { Card } from "../../../components";
import { Container } from "../../../components/layout";

export const Wrapper = styled(Container).attrs({
  customClass: "column",
})``;

export const CardContainer = styled(Container).attrs({
  customClass: "start",
})`
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

export const CardContent = styled(Card)`
  width: 100%;
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
