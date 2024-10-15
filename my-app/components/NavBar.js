import React from "react";
import Link from "next/link";

import variables from "../styles/variables.module.scss";
import styles from "../components/navBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__li}>
          <Link className={styles.nav__link} href="/">
            Ida
          </Link>
        </li>
        <li className={styles.nav__li}>
          <Link className={styles.nav__link} href="/experience">
            Experience
          </Link>
        </li>
        <li className={styles.nav__li}>
          <Link className={styles.nav__link} href="/contact">
            Contact
          </Link>
        </li>
        <li className={styles.nav__li}>
          <Link className={styles.nav__link} href="/contact">
            GitHub
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
