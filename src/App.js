import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import SettingsCard from "./components/Settings/SettingsCard";
import MainInput from "./components/MainInput/index";
import axios from "axios";

function App() {
  const initialColors = {
    background: "#00288a",
    background_color: [0, 40, 138],
    foreground: "#ffffff",
    foreground_color: [255, 255, 255],
  };

  const [type, setType] = useState("text");
  const [body, setBody] = useState("");
  const [colors, setColors] = useState(initialColors);
  const [label, setLabel] = useState("");
  const baseURL = "https://qr-code-generator-api.herokuapp.com/api";

  const generateQRCode = () => {
    axios
      .post(
        baseURL + "/generate",
        {
          body: body,
          label: label,
          background_color: colors.background_color,
          foreground_color: colors.foreground_color,
        },
        { responseType: "blob" }
      )
      .then(function (response) {
        handleResponse(response);
      })
      .catch(function (error) {});
  };

  const handleResponse = (response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "qr-code.png");
    document.body.appendChild(link);
    link.click();
  };

  const resetInput = () => {
    setType("text");
    setBody("");
    setColors(initialColors);
    setLabel("");
  };

  return (
    <div className="App">
      <div className="tabs-container">
        <div className="tab active" id="1">
          <div className="main-input-content">
            <Sidebar type={type} setType={setType} />
            <MainInput body={body} setBody={setBody} type={type} />
          </div>
        </div>
        <div className="tab active" id="2">
          <SettingsCard
            generate={generateQRCode}
            colors={colors}
            setColors={setColors}
            label={label}
            setLabel={setLabel}
            resetInput={resetInput}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
