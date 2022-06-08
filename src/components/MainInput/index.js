import React from "react";

const MainInput = ({ body, setBody, type }) => {
  return (
    <div className="main-input-container">
      <input
        type={type}
        className="main-input"
        placeholder={type === "text" ? "Enter your text" : "Enter your url"}
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <label className="text-gray-500">
        Your QR code will be generated automatically.
      </label>
    </div>
  );
};

export default MainInput;
