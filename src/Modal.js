// Modal.js
import React from "react";
import styles from "./Modal.module.css";

import Button from "./Button";

const Modal = ({ onCloseModal, children, data }) => {
  return (
    <div className={styles["modal-overlay"]} onClick={onCloseModal}>
      <div className={styles["modal-content"]}>
        <Button onClick={onCloseModal} className={styles["modal-close"]}>
          &times;
        </Button>
        <div>Gross Pay: {Math.round(data.grossPay)}</div>
        <div>Total Taxes: {Math.round(data.totalTaxes)}</div>
        <div>Net Pay: {Math.round(data.netPay)}</div>
      </div>
    </div>
  );
};

export default Modal;
