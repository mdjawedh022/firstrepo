import React from "react";
import styles from "./Button.module.css"
const Button = ({ label }) => {
  return(
   <div data-testid="button" className={styles.button}>{label}</div>

)
  };

export default Button;
