import QRCode from "../../assets/qr-code.png";
import Button from "../Common/Button";
import Accordion from "./Accordion";
import { CgSoftwareDownload } from "react-icons/cg";

const SettingsCard = ({ generate }) => {
  return (
    <div
      className={
        "bg-secondary h-[90%] w-3/12 rounded-3xl grid grid-rows-4 gap-4 place-items-center p-8"
      }
    >
      <img src={QRCode} alt={"qr-code"} className={"w-48 h-48 p-4"} />
      <div className={"flex flex-col items-center w-full row-span-2"}>
        <Accordion text={"Colors"} items={<Colors />} />
        <Accordion text={"Label"} items={<LabelInput />} />
      </div>
      <div className={"flex gap-4"}>
        <Button
          onClick={() => {
            generate();
          }}
          icon={<CgSoftwareDownload size={28} />}
          text={"JPG"}
          color={"lightblue"}
        />
      </div>
    </div>
  );
};

const Colors = () => {
  return (
    <div className={"flex flex-col gap-3"}>
      <div className={"flex flex-col items-center accordion-content-item"}>
        <input
          type="color"
          id="background"
          name="head"
          defaultValue="#e66465"
        />
        <label htmlFor="background">Background</label>
      </div>
      <div className={"flex flex-col items-center accordion-content-item"}>
        <input type="color" id="foreground" name="head" defaultValue="#fff" />
        <label htmlFor="foreground">Foreground</label>
      </div>
    </div>
  );
};

const LabelInput = () => {
  return (
    <input className={"input w-full"} type={"text"} placeholder={"Label"} />
  );
};

export default SettingsCard;
