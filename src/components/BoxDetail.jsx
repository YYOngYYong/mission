import React, { useEffect, useState } from "react";
import styles from "./BoxDetail.module.css";

const BoxDetail = ({ box, color, score, setScore, randomId }) => {
  const uniId = Math.floor(Math.random() * 4);
  console.log(uniId);

  const onClick = (event) => {
    setScore(score + 1);
  };
  return (
    <div
      key={box.id}
      className={styles.boxes}
      style={
        box.id === randomId
          ? { backgroundColor: differColor() }
          : { backgroundColor: `${color}` }
      }
      onClick={onClick}
    ></div>
  );
};

const differColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue + 20})`;
};
export default BoxDetail;
