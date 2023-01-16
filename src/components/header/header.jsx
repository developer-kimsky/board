import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");

  const onLogin = useCallback(() => {
    navigate("/");
  });

  useEffect(() => {
    if (sessionStorage.getItem("id")) setUserId(sessionStorage.getItem("id"));
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          <NavLink to="/list">Board</NavLink>
        </h1>
        {userId ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <button onClick={onLogin}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
