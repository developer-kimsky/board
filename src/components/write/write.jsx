import { useLocation } from "react-router-dom";
import React, { useState, useRef } from "react";
import styles from "./write.module.css";

const Write = ({ boardRepository }) => {
  const formRef = useRef();
  const titleRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();

  const navigateState = useLocation().state;
  const [userId, setUserId] = useState(navigateState && navigateState.id);

  const onSubmit = (e) => {
    e.preventDefault();
    const board = {
      id: Date.now(),
      title: titleRef.current.value || "",
      content: contentRef.current.value || "",
      author: authorRef.current.value || "",
      date: Date.now(),
    };
    formRef.current.reset();
    boardRepository.saveBoard(userId, board);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles.write}>
          <form ref={formRef}>
            <input type="text" ref={titleRef} name="title" placeholder="제목" />
            <input type="text" ref={authorRef} name="author" value={userId} />
            <textarea
              ref={contentRef}
              name="content"
              id=""
              cols="30"
              rows="10"
              placeholder="내용"
            ></textarea>
          </form>
        </div>
        <div className={styles.buttons}>
          <button onClick={onSubmit}>등록</button>
        </div>
      </div>
    </div>
  );
};

export default Write;
