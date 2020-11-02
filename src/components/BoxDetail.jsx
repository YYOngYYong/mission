import React, { useEffect, useState } from "react";
import styles from "./BoxDetail.module.css";

const BoxDetail = ({ box, color }) => {
  console.log(color);
  return (
    <div
      key={box.id}
      className={styles.box}
      style={{ backgroundColor: `${color}` }}
    ></div>
  );
};

export default BoxDetail;
