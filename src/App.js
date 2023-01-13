import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Login from "./components/login/login";
import List from "./components/list/list";
import Detail from "./components/detail/detail";
import Write from "./components/write/write";
import Footer from "./components/footer/footer";
import { useCallback } from "react";

function App({ authService, boardRepository }) {
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header onLogout={onLogout} />
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route
            path="/list"
            element={<List boardRepository={boardRepository} />}
          />
          <Route
            path="/detail/:id"
            element={<Detail boardRepository={boardRepository} />}
          />
          <Route
            path="/write"
            element={<Write boardRepository={boardRepository} />}
          />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
