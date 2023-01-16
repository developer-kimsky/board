import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./detail.module.css";

const Detail = ({ boardRepository }) => {
  const navigate = useNavigate();
  const params = useParams();
  const boardId = params.boardId;
  const [board, setBoard] = useState({});
  const [userId, setUserId] = useState();

  const gotoList = () => {
    navigate("/list");
  };

  const onEdit = () => {
    navigate(`/write/${boardId}`);
  };

  const onDelete = () => {
    boardRepository.removeBoard(boardId);
    navigate("/list");
  };

  useEffect(() => {
    if (sessionStorage.getItem("id")) setUserId(sessionStorage.getItem("id"));

    const stopSync = boardRepository.getBoards(boardId, (board) => {
      setBoard(board);
    });
    return () => stopSync();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.author === userId && (
          <div className={styles.buttons}>
            <button onClick={onEdit}>수정</button>
            <button onClick={onDelete}>삭제</button>
          </div>
        )}
        <div className={styles.detail}>
          <div className={styles.title}>{board.title}</div>
          <div className={styles.info}>
            {/* <div className={styles.author}>{board.author}</div> */}
            <div className={styles.date}>{board.date}</div>
          </div>
          <div className={styles.content}>{board.content}</div>
        </div>
        <div className={styles.list}>
          <button onClick={gotoList}>목록</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
