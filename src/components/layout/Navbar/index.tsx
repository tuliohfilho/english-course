import { Link } from "react-router-dom";

import { Item, List, Logo, Wrapper } from "./styles";

import logo from "../../../assets/svg/logo.svg";

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logo} alt="Teatch" />
      </Link>
      <List>
        <Item>
          <Link to="/">Home</Link>
        </Item>
        <Item>
          <Link to="/irregular_verbs">Irregular Verbs</Link>
        </Item>
        <Item>
          <Link to="/tips">Tips</Link>
        </Item>
        <Item>
          <Link to="/contact">Contact</Link>
        </Item>
      </List>
    </Wrapper>
  );
};

export default Navbar;
