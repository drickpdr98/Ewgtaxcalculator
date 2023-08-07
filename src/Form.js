import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

import styles from "./Inputs.module.css";
import classes from "./Button.module.css";

const intialState = {
  rate: "",
  regularHours: "",
  overtimeHours: "",
  holidayHours: "",
};

export default function Form({ onGetData }) {
  const [data, setData] = useState(intialState);
  const [showModal, setShowModal] = useState(false);

  const inputValueHandler = function (input, value) {
    setData((preValue) => {
      return { ...preValue, [input]: +value };
    });
  };

  const submitHandler = function (event) {
    event.preventDefault();

    if (
      data.rate < 1 ||
      data.rate > 99 ||
      data.regularHours < 1 ||
      data.regularHours > 99 ||
      data.overtimeHours < 1 ||
      data.overtimeHours > 99 ||
      data.holidayHours < 1 ||
      data.holidayHours > 99
    ) {
      setShowModal((prev) => !prev);

      return;
    }

    onGetData(data);

    setData(intialState);
  };

  const closeModalHandler = function () {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      {showModal && (
        <Modal onCloseModal={closeModalHandler}>Data is incorrect</Modal>
      )}
      <form className="form" onSubmit={submitHandler}>
        <label>Rate</label>
        <input
          id="rate"
          className={styles.input}
          type="number"
          onChange={(event) => inputValueHandler("rate", event.target.value)}
          value={data.rate}
        />

        <label>Regular Hours</label>
        <input
          className={styles.input}
          type="number"
          onChange={(event) =>
            inputValueHandler("regularHours", event.target.value)
          }
          value={data.regularHours}
        />

        <label>Overtime Hours</label>
        <input
          className={styles.input}
          type="number"
          onChange={(event) =>
            inputValueHandler("overtimeHours", event.target.value)
          }
          value={data.overtimeHours}
        />

        <label>Holiday Hours</label>
        <input
          className={styles.input}
          type="number"
          onChange={(event) =>
            inputValueHandler("holidayHours", event.target.value)
          }
          value={data.holidayHours}
        />

        <Button className={classes.btn}>Calculate</Button>
      </form>
    </div>
  );
}
