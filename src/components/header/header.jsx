import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <h1>
        <NavLink to="/list">Board </NavLink>
      </h1>
    </div>
  );
};

export default Header;
