import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const gotoList = (userId) => {
    navigate("/list", { state: { id: userId } });
  };

  const onLogin = (e) => {
    authService //
      .login(e.currentTarget.textContent)
      .then((data) => {
        gotoList(data.user.uid);
      });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && gotoList(user.uid);
    });
  });

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
