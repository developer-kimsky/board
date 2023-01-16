import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./list.module.css";

const List = ({ boardRepository }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [boards, setBoards] = useState({});

  const onCreate = () => {
    if (!userId) {
      alert("로그인 후 글쓰기 가능합니다.");
      navigate("/", {});
      return;
    }
    navigate("/write", {});
  };

  const toDetail = (boardId) => {
    navigate("/detail/" + boardId, {});
  };

  useEffect(() => {
    if (sessionStorage.getItem("id")) setUserId(sessionStorage.getItem("id"));

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
              <div
                className={styles.title}
                onClick={(e) => {
                  toDetail(key);
                }}
              >
                {boards[key].title}
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
