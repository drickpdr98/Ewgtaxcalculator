// Card.js

import React from "react";
import styles from "./Card.module.css"; // Import the CSS module

const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
