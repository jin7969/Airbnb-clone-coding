import React from "react";
import styles from "./hosting.module.css";

function Section({ image, title }) {
  return (
    <div className={styles.section}>
      <img src={image} alt="" />
      <div className={styles.title}>{title}</div>
    </div>
  );
}

export default Section;
