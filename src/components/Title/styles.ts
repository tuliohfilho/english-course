import styled from "styled-components";

import Container from "../layout/Container";

export const Wrapper = styled(Container).attrs({
  customClass: "column",
})``;

export const Content = styled.h1`
  color: #0a3161;
  margin-bottom: 0;
  font-size: 2.5em;
`;

export const Subtitle = styled.p`
  color: #b31942;
  font-size: 1.5em;
  margin-top: 0;
`;
