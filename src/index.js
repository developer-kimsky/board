import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_sevice";
import BoardRepository from "./service/board_repository";

const authService = new AuthService();
const boardRepository = new BoardRepository();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App authService={authService} boardRepository={boardRepository} />
  </React.StrictMode>
);
