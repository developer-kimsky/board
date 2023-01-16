import { useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import styles from "./write.module.css";

const Write = ({ boardRepository }) => {
  const formRef = useRef();
  const titleRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();

  const navigate = useNavigate();
  const params = useParams();
  const boardId = params.boardId;

  const [userId, setUserId] = useState("");
  const [board, setBoard] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const board = {
      id: boardId || Date.now(),
      title: titleRef.current.value || "",
      content: contentRef.current.value || "",
      author: authorRef.current.value || "",
      date: boardId && Date.now(),
    };
    formRef.current.reset();
    boardRepository.saveBoard(board);
    navigate(`/detail/${board.id}`, {});
  };

  useEffect(() => {
    if (sessionStorage.getItem("id")) {
      setUserId(sessionStorage.getItem("id"));
    } else {
      alert("로그인 후 글쓰기 가능합니다.ㅇㅇ");
      navigate("/list", {});
    }

    if (boardId) {
      const stopSync = boardRepository.getBoards(boardId, (board) => {
        setBoard(board);
      });
      return () => stopSync();
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles.write}>
          <form ref={formRef}>
            <input
              type="text"
              ref={titleRef}
              name="title"
              placeholder="제목"
              defaultValue={board.title || ""}
            />
            <input
              type="text"
              ref={authorRef}
              name="author"
              value={userId}
              readOnly
            />
            <textarea
              ref={contentRef}
              name="content"
              id=""
              cols="30"
              rows="10"
              placeholder="내용"
              defaultValue={board.content || ""}
            ></textarea>
          </form>
        </div>
        <div className={styles.buttons}>
          <button onClick={onSubmit}>{boardId ? <>수정</> : <>등록</>}</button>
        </div>
      </div>
    </div>
  );
};

export default Write;
