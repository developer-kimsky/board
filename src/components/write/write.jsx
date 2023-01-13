import React, { useRef } from "react";
import styles from "./write.module.css";
import { firebaseDatabase } from "../../service/firebase";

const Write = (props) => {
  const formRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const board = {
      title: titleRef.current.value || "",
      content: contentRef.current.value || "",
      author: "monkey",
      date: Date.now(),
    };
    formRef.current.reset();

    firebaseDatabase
      .ref(`${board.author}/boards/${board.date}`)
      .set(board)
      .then((data) => console.log);
  };
  return (
    <div className={styles.write}>
      <form ref={formRef}>
        <input type="text" ref={titleRef} name="title" />
        <br />
        <textarea
          ref={contentRef}
          name="content"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={onSubmit}>등록</button>
      </form>
    </div>
  );
};

export default Write;
