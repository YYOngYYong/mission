import React, { useState } from "react";
import BoxDetail from "./BoxDetail";
import styles from "./Boxes.module.css";

const Boxes = ({ boxes, colors, setScore, score, randomId, createBox }) => {
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
          boxes={boxes}
          createBox={createBox}
        />
      ))}
    </div>
  );
};

export default Boxes;
