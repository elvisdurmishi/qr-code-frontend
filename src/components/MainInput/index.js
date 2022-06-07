import React from "react";

const MainInput = () => {
  return (
    <div className="flex flex-col">
      <input className="main-input" placeholder="Enter your text" />
      <label className="text-gray-500">
        Your QR code will be generated automatically.
      </label>
    </div>
  );
};

export default MainInput;
