import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

import { List, Warpper } from "./styles";

function Index() {
  return (
    <Warpper>
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
    </Warpper>
  );
}

export default Index;
