import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    //TODO: implement this and bind it to the input field
  };

  return (
    <div>
      <span>Enter Password: </span>
      <input type="text"></input>
      <br />
      <span>{/* Error Message Should Appear here*/}</span>
    </div>
  );
};

export default App;
