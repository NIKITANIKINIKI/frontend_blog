import React from "react";
import styles from "./NoData.module.scss";


const NoData = ({title, text, image}) => {
  return (
    <div className={styles.root }>
      <img src={image} />
      <h1 className={styles.title}>{title}</h1>
      <label className={styles.text}>{text}</label>
    </div>
  );
};

export default NoData;
