import styled from "styled-components";

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
    padding: 0 2em 0 2em;
    justify-content: center;
    margin-block-end: 0;
    color: #0a3161;
  }
  h4 {
    display: flex;
    padding: 0 2em 0.5em 2em;
    justify-content: center;
    margin-block-start: 0;
    color: #b31942;
  }
`;

export const CardContent = styled(Card)`
  width: 100%;
`;

export const List = styled.div`
  margin-block-end: 1em;
`;

export const Item = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
