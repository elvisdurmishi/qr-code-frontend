import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import SettingsCard from "./components/Settings/SettingsCard";
import MainInput from "./components/MainInput/index";
import axios from "axios";

function App() {
  const [type, setType] = useState("text");

  const baseURL = "https://qr-code-generator-api.herokuapp.com/api";

  const generateQRCode = () => {
    axios
      .post(baseURL + "/generate", {
        body: "Test",
      })
      .then(function (response) {})
      .catch(function (error) {});
  };

  return (
    <div className="App">
      <div className="tabs-container">
        <div className="tab active" id="1">
          <div className="main-input-content">
            <Sidebar type={type} setType={setType} />
            <MainInput />
          </div>
        </div>
        <div className="tab active" id="2">
          <SettingsCard generate={generateQRCode} />
        </div>
      </div>
    </div>
  );
}

export default App;
