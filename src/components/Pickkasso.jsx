import React from "react";
import BoxDetail from "./BoxDetail";
import styles from "./Pickkasso.module.css";

const Pickkasso = (props) => {
  return (
    <>
      <div className={styles.container}>
        <BoxDetail />
      </div>
    </>
  );
};

export default Pickkasso;
