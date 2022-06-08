// import QRCode from "../../assets/qr-code.png";
import Button from "../Common/Button";
import Accordion from "./Accordion";
import { CgSoftwareDownload } from "react-icons/cg";

const SettingsCard = ({
  generate,
  colors,
  setColors,
  label,
  setLabel,
  resetInput,
}) => {
  return (
    <div
      className={
        "bg-secondary rounded-3xl grid grid-rows-3 px-16 place-items-center"
      }
    >
      <div className="qr-code-image" />
      <div className={"flex flex-col items-center w-full row-span-2"}>
        <Accordion
          text={"Colors"}
          items={<Colors colors={colors} setColors={setColors} />}
        />
        <Accordion
          text={"Label"}
          items={<LabelInput label={label} setLabel={setLabel} />}
        />
      </div>
      <div className={"flex gap-4 my-5"}>
        <Button
          onClick={() => {
            generate();
            resetInput();
          }}
          icon={<CgSoftwareDownload size={28} />}
          text={"PNG"}
          color={"lightblue"}
        />
      </div>
    </div>
  );
};

const Colors = ({ colors, setColors }) => {
  const handleColorChange = (type, color) => {
    var hex_code = color.split("");
    var red = parseInt(hex_code[1] + hex_code[2], 16);
    var green = parseInt(hex_code[3] + hex_code[4], 16);
    var blue = parseInt(hex_code[5] + hex_code[6], 16);
    var rgb = [red, green, blue];
    let newColors = Object.assign({}, colors);
    newColors[type] = color;
    newColors[type + "_color"] = rgb;

    setColors(newColors);
  };

  return (
    <div className={"flex flex-col gap-3"}>
      <div className={"flex flex-col items-center accordion-content-item"}>
        <input
          type="color"
          id="background"
          name="head"
          value={colors.background}
          onChange={(e) => {
            handleColorChange("background", e.target.value);
          }}
        />
        <label htmlFor="background">Background</label>
      </div>
      <div className={"flex flex-col items-center accordion-content-item"}>
        <input
          type="color"
          id="foreground"
          name="head"
          value={colors.foreground}
          onChange={(e) => {
            handleColorChange("foreground", e.target.value);
          }}
        />
        <label htmlFor="foreground">Foreground</label>
      </div>
    </div>
  );
};

const LabelInput = ({ label, setLabel }) => {
  return (
    <input
      className={"input"}
      type={"text"}
      value={label}
      onChange={(e) => {
        setLabel(e.target.value);
      }}
      placeholder={"Label at the bottom"}
    />
  );
};

export default SettingsCard;
