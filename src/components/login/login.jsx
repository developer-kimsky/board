import React from "react";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const onLogin = (e) => {
    authService //
      .login(e.currentTarget.textContent)
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
