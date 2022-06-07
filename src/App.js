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
    <div className="App flex justify-between px-16 items-center h-screen w-100">
      <Sidebar type={type} setType={setType} />
      <MainInput />
      <SettingsCard generate={generateQRCode} />
    </div>
  );
}

export default App;
