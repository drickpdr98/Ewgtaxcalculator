import Card from "./Card";
import Form from "./Form";
import Modal from "./Modal";

import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const dataHandler = function (value) {
    setData(value);
  };

  return (
    <Card>
      <Form onGetData={dataHandler} />
      {data && <Modal data={data} />}
    </Card>
  );
}

export default App;
