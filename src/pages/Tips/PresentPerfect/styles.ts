import styled from "styled-components";
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
    justify-content: space-between;
  }

  span,
  b {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
`;
