import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Login from "./components/login/login";
import List from "./components/list/list";
import Detail from "./components/detail/detail";
import Write from "./components/write/write";
import Footer from "./components/footer/footer";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail/:index" element={<Detail />} />
          <Route path="/write" element={<Write />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
