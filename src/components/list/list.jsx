import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./list.module.css";

const List = ({ boardRepository }) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const [userId, setUserId] = useState(navigateState && navigateState.id);
  const [boards, setBoards] = useState({});

  const onCreate = () => {
    if (!userId) {
      alert("로그인 후 글쓰기 가능합니다.");
      navigate("/", {});
      return;
    }
    navigate("/write", { state: { id: userId } });
  };

  useEffect(() => {
    const stopSync = boardRepository.syncBoards((boards) => {
      setBoards(boards);
    });
    return () => stopSync();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles.buttons}>
          <button onClick={onCreate}>글쓰기</button>
        </div>
        <ul className={styles.list}>
          {Object.keys(boards).map((key) => (
            <li key={key} className={styles.item}>
              <div className={styles.title}>
                <Link to={"../detail/" + key}>{boards[key].title}</Link>
              </div>
              {/* <div className={styles.author}>{boards[key].author}</div> */}
              <div className={styles.date}>{boards[key].date}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
