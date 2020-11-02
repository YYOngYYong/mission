import React from "react";
import styles from "./BoxDetail.module.css";

const BoxDetail = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
    </div>
  );
};

export default BoxDetail;
