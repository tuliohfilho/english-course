import styled, { css } from "styled-components";

import Container from "../layout/Container";

type props = { maxWidth?: boolean };

export const Wrapper = styled(Container).attrs({
  customClass: "start",
})<props>`
  padding: 1em 1.5em 1em 0;

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      flex-direction: column;
    `}

  input {
    color: #a3a5ae;
    font-size: 16px;
    min-height: 50px;
    padding-left: 2em;
    border-radius: 25px;
    background-color: #fce6ef;
    border: 1px solid #ffc5dd;
  }
`;
