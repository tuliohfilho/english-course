import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

import { List, Wrapper } from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <List>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </List>
    </Wrapper>
  );
};

export default Footer;
