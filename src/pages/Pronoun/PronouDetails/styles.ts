import styled from "styled-components";

import { Card } from "../../../components";
import { Container } from "../../../components/layout";

export const Wrapper = styled(Container).attrs({
  customClass: "column",
})``;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: start;
  flex-wrap: wrap;
`;

export const CardPronoun = styled(Card)`
  /* width: 100%; */
  width: 28%;
  display: flex;
  flex-wrap: wrap;

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
    justify-content: center;
    /* margin-block-end: 0;
    margin-block-start: 0; */
    /* min-height: 1.5em; */
  }

  h4 {
    /* min-height: 2.5em; */
    /* margin-block-start: 0; */
    display: flex;
    color: #b31942;
    justify-content: center;
  }
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  span {
    display: flex;
    align-items: flex-end;
  }

  a {
    color: #0a3161;
    font-weight: bold;
    /* text-decoration: none; */
  }

  /* flex: 0 1 auto;
  align-self: auto; */

  /* align-items: flex-end; */
  /* flex-direction: column; */
`;

export const List = styled.div`
  display: flex;
  margin-block-end: 1em;
  justify-content: flex-start;
`;

export const ItemSubject = styled.span`
  display: flex;
  min-width: 10%;
  font-weight: bolder;
  margin-right: 2em;
  min-height: 2em;
`;

export const ItemTranslation = styled.span`
  display: flex;
  flex-wrap: wrap;
  min-height: 2em;
`;
