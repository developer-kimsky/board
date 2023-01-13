import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./detail.module.css";

const Detail = ({ boardRepository }) => {
  const params = useParams();
  const boardId = params.id;
  const [board, setBoard] = useState({});

  useEffect(() => {
    const stopSync = boardRepository.getBoards(boardId, (board) => {
      setBoard(board);
    });
    return () => stopSync();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles.buttons}>
          <button>수정</button>
          <button>삭제</button>
        </div>
        <div className={styles.detail}>
          <div className={styles.title}>{board.title}</div>
          <div className={styles.info}>
            {/* <div className={styles.author}>{board.author}</div> */}
            <div className={styles.date}>{board.date}</div>
          </div>
          <div className={styles.content}>{board.content}</div>
        </div>
        <div className={styles.list}>
          <button>목록</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
