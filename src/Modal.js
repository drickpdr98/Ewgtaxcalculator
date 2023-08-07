// Modal.js
import React from "react";
import styles from "./Modal.module.css";

import Button from "./Button";

const Modal = ({ onCloseModal, children, data }) => {
  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <Button onClick={onCloseModal} className={styles["modal-close"]}>
          &times;
        </Button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
