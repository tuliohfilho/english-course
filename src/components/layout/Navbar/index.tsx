import { Link } from "react-router-dom";

import { Item, List, Logo, Warpper } from "./styles";

import logo from "../../../assets/svg/logo.svg";

function Navbar() {
  return (
    <Warpper>
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
    </Warpper>
  );
}

export default Navbar;
