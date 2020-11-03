import React, { useEffect, useState } from "react";
import styles from "./BoxDetail.module.css";

const BoxDetail = ({ box, color, otherColor, score, setScore }) => {
  const uniId = Math.floor(Math.random() * 4);
  console.log(uniId);

  const onClick = (event) => {
    alert(score);
    setScore(score + 1);
  };
  return (
    <div
      key={box.id}
      className={styles.boxes}
      style={{ backgroundColor: `${color}` }}
      onClick={onClick}
    ></div>
  );
};

export default BoxDetail;
