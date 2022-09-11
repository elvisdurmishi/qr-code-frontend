import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import SettingsCard from "../Settings/SettingsCard";
import MainInput from "../MainInput/index";
import axios from "axios";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const MainPage = () => {
  const initialColors = {
    background: "#00288a",
    background_color: [0, 40, 138],
    foreground: "#ffffff",
    foreground_color: [255, 255, 255],
  };

  const [error, setError] = useState(false);
  const [type, setType] = useState("text");
  const [body, setBody] = useState("");
  const [colors, setColors] = useState(initialColors);
  const [label, setLabel] = useState("");
  const [activeTab, setActiveTab] = useState(1);
  const baseURL = "https://qrcodegenerator.up.railway.app/";

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
    setActiveTab(1);
  };

  return (
    <div className="content-container">
      <div className={`tab-button-container ${body && "scale-100"}`}>
        <button
          className="tab-change-button"
          onClick={() => {
            let newTab = activeTab === 1 ? 2 : 1;
            setActiveTab(newTab);
          }}
        >
          {activeTab === 1 ? (
            <MdOutlineArrowForwardIos size={28} />
          ) : (
            <MdOutlineArrowBackIos size={28} />
          )}
        </button>
      </div>
      <div className="tabs-container">
        <div className={`tab ${activeTab === 1 && "active"}`} id="1">
          <div className="main-input-content">
            <Sidebar type={type} setType={setType} />
            <MainInput
              body={body}
              setBody={setBody}
              type={type}
              error={error}
              setError={setError}
            />
          </div>
        </div>
        <div className={`tab ${activeTab === 2 && "active"}`} id="2">
          <SettingsCard
            body={body}
            setError={setError}
            generate={generateQRCode}
            colors={colors}
            setColors={setColors}
            label={label}
            setLabel={setLabel}
            resetInput={resetInput}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
