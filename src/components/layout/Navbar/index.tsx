import { Link } from "react-router-dom";

import Container from "../Container";

import styles from "./Navbar.module.css";
import logo from "../../../assets/svg/logo.svg";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container customClass="start">
        <Link to="/">
          <img src={logo} alt="Teatch" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/irregular_verbs">Irregular Verbs</Link>
          </li>
          <li className={styles.item}>
            <Link to="/tips">Tips</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
