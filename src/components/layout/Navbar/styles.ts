import styled from "styled-components";

export const Wrapper = styled.nav`
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: start;
  background-color: #0a3161;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const Item = styled.li`
  margin-right: 1em;

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #b31942;
  }
`;

export const Logo = styled.img`
  height: 100%;
  width: 150px;
`;
