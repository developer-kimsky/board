import { Link } from "react-router-dom";
import React from "react";
import styles from "./list.module.css";

const List = (props) => {
  let dummy = [
    {
      title:
        "글제목1글제목1글제목1글제목1글제목1글제목1글제목1글제목1글제목1글제목1",
      author: "글쓴이1",
      date: "2023 - 01 - 12",
    },
    {
      title:
        "글제목2글제목2글제목2글제목2글제목2글제목2글제목2글제목2글제목2글제목2글제목2",
      author: "글쓴이2",
      date: "2023 - 01 - 12",
    },
    {
      title:
        "글제목3글제목3글제목3글제목3글제목3글제목3글제목3글제목3글제목3글제목3",
      author: "글쓴이3",
      date: "2023 - 01 - 12",
    },
  ];

  return (
    <div className={styles.board}>
      <div className={styles.buttons}>
        <button>글쓰기</button>
      </div>
      <ul className={styles.list}>
        {dummy.map((item, i) => {
          return (
            <li key={i} className={styles.item}>
              <div className={styles.title}>
                <Link to={"../detail/" + i}>{item.title}</Link>
              </div>
              <div className={styles.author}>{item.author}</div>
              <div className={styles.date}>{item.date}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
