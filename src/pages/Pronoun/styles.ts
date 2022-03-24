import styled from "styled-components";

import { Card } from "../../components";
import { Container } from "../../components/layout";

export const Wrapper = styled(Container).attrs({
  customClass: "column",
})``;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: start;
  flex-wrap: wrap;
`;

export const CardCategory = styled(Card)`
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
  }

  h4 {
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
  }
`;
