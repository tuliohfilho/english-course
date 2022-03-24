import styled from "styled-components";

import { Card } from "../../../components";
import { Container } from "../../../components/layout";

export const Wrapper = styled(Container).attrs({
  customClass: "column",
})``;

export const CardType = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: column;

  :hover {
    cursor: default;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    display: flex;
    color: #0a3161;
    margin-block-end: 0;
  }

  h4 {
    display: flex;
    color: #b31942;
    margin-block-start: 0;
    flex-direction: column;
  }

  p {
    margin-block-end: 0;
    margin-block-start: 0.5em;
  }
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const List = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ItemSubject = styled.span`
  display: flex;
  min-width: 10%;
  min-height: 2em;
  margin-right: 2em;
  color: #0a3161;
  font-weight: bold;
`;

export const ItemTranslation = styled.span`
  display: flex;
  flex-wrap: wrap;
  min-height: 2em;
`;
