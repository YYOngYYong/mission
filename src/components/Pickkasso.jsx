import React, { useState } from "react";
import BoxDetail from "./BoxDetail";
import styles from "./Pickkasso.module.css";

const Pickkasso = ({ boxes, colors }) => {
  return (
    <div className={styles.container}>
      {boxes.map((box) => (
        <BoxDetail key={box.id} box={box} color={colors} />
      ))}
    </div>
  );
};

export default Pickkasso;
