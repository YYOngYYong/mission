import React from "react";
import styles from "./BoxDetail.module.css";

const BoxDetail = ({ box, color, score, setScore, randomId, createBox }) => {
  const onClick = () => {
    if (randomId === box.id) {
      setScore(score + 1);
      createBox();
    } else {
      alert("실패");
      setScore(0);
    }
  };
  console.log(color);
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
