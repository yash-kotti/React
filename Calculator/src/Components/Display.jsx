import { useState } from "react";
import styles from "./Display.module.css";

const Display = ({ inputValue }) => {
  return (
    <input
      type="text"
      id="displayInput"
      className={styles.display}
      readOnly
      value={inputValue}
    />
  );
};
export default Display;
