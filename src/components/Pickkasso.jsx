import React, { useState } from "react";
import BoxDetail from "./BoxDetail";
import styles from "./Pickkasso.module.css";

const Pickkasso = ({
  boxes,
  colors,
  otherColor,
  setScore,
  score,
  randomId,
  setBoxs,
}) => {
  return (
    <div className={styles.container}>
      {boxes.map((box) => (
        <BoxDetail
          key={box.id}
          box={box}
          color={colors}
          setScore={setScore}
          score={score}
          randomId={randomId}
        />
      ))}
    </div>
  );
};

export default Pickkasso;
