import styled from "styled-components";

import Container from "../../components/layout/Container";

export const Wrapper = styled(Container).attrs({
  customClass: "column",
})`
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
    margin-top: 3em;
  }
`;

export const Title = styled.h1`
  color: #0a3161;
  margin-bottom: 0;
  margin-top: 1em;

  span {
    color: #fff;
    padding: 0 0.2em;
    background-color: #b31942;
  }
`;

export const Subtitle = styled.p`
  color: #b31942;
  margin-top: 0;
  font-size: 1.5em;
`;
