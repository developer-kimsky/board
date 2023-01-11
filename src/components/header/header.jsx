import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <h1>Board</h1>
      <button>글쓰기</button>
    </div>
  );
};

export default Header;
