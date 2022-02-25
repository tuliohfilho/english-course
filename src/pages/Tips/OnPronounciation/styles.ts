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
`;

export const CardContent = styled(Card)`
  width: 100%;
`;

export const List = styled.div`
  display: flex;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
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
