import React, { useRef } from "react";
import styles from "./write.module.css";
import { firebaseDatabase } from "../../service/firebase";

const Write = (props) => {
  const formRef = useRef();
  const titleRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const board = {
      title: titleRef.current.value || "",
      content: contentRef.current.value || "",
      author: authorRef.current.value || "",
      date: Date.now(),
    };
    formRef.current.reset();

    firebaseDatabase
      .ref(`${board.author}/boards/${board.date}`)
      .set(board)
      .then((data) => console.log);
  };
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles.write}>
          <form ref={formRef}>
            <input type="text" ref={titleRef} name="title" placeholder="제목" />
            <input type="text" ref={authorRef} name="author" />
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
