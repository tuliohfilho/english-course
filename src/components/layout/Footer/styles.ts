import styled from "styled-components";

export const Wrapper = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: #fff;
  background-color: #b31942;
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;

  li {
    margin: 0 3em;
  }

  li:hover {
    color: #0a3161;
  }

  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
