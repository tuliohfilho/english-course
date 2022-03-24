import styled, { css } from "styled-components";

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

export type SizeType = "small" | "medium" | "large";
type ItemSubjectProps = {
  size?: SizeType;
};
export const ItemSubject = styled.span<ItemSubjectProps>`
  display: flex;
  flex-wrap: wrap;
  min-width: 10%;
  max-width: 10%;
  min-height: 2em;
  margin-right: 2em;
  color: #0a3161;
  font-weight: bold;

  ${({ size }) =>
    size?.includes("medium") &&
    css`
      min-width: 25%;
      max-width: 25%;
    `}

  ${({ size }) =>
    size?.includes("large") &&
    css`
      min-width: 50%;
      max-width: 50%;
    `}
`;

export const ItemTranslation = styled.span`
  display: flex;
  flex-wrap: wrap;
  min-height: 2em;
`;
