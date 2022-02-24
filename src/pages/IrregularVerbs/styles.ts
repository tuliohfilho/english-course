import styled from "styled-components";

import { Card } from "../../components";
import { Container } from "../../components/layout";

export const Wrapper = styled(Container).attrs({
  customClass: "column",
})``;

export const CardConainer = styled(Container).attrs({
  customClass: "start",
})`
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const CardContent = styled(Card)`
  flex-basis: 28%;
  text-align: center;

  h2 {
    display: flex;
    padding: 0.5em 2em 0 2em;
    align-items: center;
    justify-content: center;
  }

  p,
  p b,
  p span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p b {
    color: #0a3161;
  }

  p span {
    color: #b31942;
  }
`;

export const PlayerConainer = styled(Container).attrs({})`
  display: flex;
  justify-content: space-between;

  svg {
    float: right;
  }
`;
