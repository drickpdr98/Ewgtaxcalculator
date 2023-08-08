import Card from "./Card";
import Form from "./Form";
import Modal from "./Modal";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [newData, setNewData] = useState({}); // Initialize with an empty object
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = function () {
    setShowModal((prev) => !prev);
  };

  const calculateData = () => {
    if (data) {
      // Calculate the required values
      const regularPay = data.rate * data.regularHours;
      const overtimePay = data.rate * 1.5 * data.overtimeHours;
      const holidayPay = data.rate * 2 * data.holidayHours;
      const grossPay = regularPay + overtimePay + holidayPay;

      // Calculate the taxes based on New York City rates
      const fitRate = 0.1113;
      const ficaRate = 0.062;
      const mediRate = 0.0145;
      const sitRate = 0.0465;
      const sdiRate = 0.0004;
      const fliRate = 0.0046;
      const cityRate = 0.0348;

      const fitTotal = grossPay * fitRate;
      const ficaTotal = grossPay * ficaRate;
      const mediTotal = grossPay * mediRate;
      const sitTotal = grossPay * sitRate;
      const sdiTotal = grossPay * sdiRate;
      const fliTotal = grossPay * fliRate;
      const cityTotal = grossPay * cityRate;

      setNewData({
        totalTaxes:
          fitTotal +
          ficaTotal +
          mediTotal +
          sitTotal +
          sdiTotal +
          fliTotal +
          cityTotal,
        netPay:
          grossPay -
          (fitTotal +
            ficaTotal +
            mediTotal +
            sitTotal +
            sdiTotal +
            fliTotal +
            cityTotal),
        grossPay: grossPay,
      });
    }
  };

  useEffect(() => {
    calculateData();
  }, [data]);

  const dataHandler = function (value) {
    setData(value);
  };

  // Call calculateData only when data changes
  // The dependency array ensures it's called only when 'data' changes

  return (
    <Card>
      <Form
        onGetData={dataHandler}
        showModal={showModal}
        setShowModal={setShowModal}
        closeModalHandler={closeModalHandler}
      />
      {newData.totalTaxes && (
        <Modal data={newData} onCloseModal={closeModalHandler} />
      )}
    </Card>
  );
}

export default App;
