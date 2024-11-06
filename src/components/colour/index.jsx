import { useState } from "react";
import "./style.css";
export default function Colour() {
  const [hex, setHex] = useState("#000000");
  const [rgb, setRgb] = useState("rgb(0,0,0)");
  const [bgColour, setBgColour] = useState("rgb(0,0,0)");

  const handleHexColour = () => {
    const newHex = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setHex(newHex);
    setBgColour(newHex);
  };
  const handleRgbColour = () => {
    const newRgb =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    setRgb(newRgb);
    setBgColour(newRgb);
  };
  const handleRandomColour = () => {
    const newHex = "#" + Math.floor(Math.random() * 16777215).toString(16);

    const newRgb =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    setHex(newHex);
    setRgb(newRgb);
    setBgColour(newRgb);
  };
  console.log(hex, rgb);

  return (
    <>
      <button onClick={handleHexColour}>Click up To HEX</button>
      <button onClick={handleRgbColour}>Click Up to RGB</button>
      <button onClick={handleRandomColour}>Rendom</button>
      <div className="div1" style={{ backgroundColor: bgColour }}>
        Hex: {hex} | RGB: {rgb}
      </div>
    </>
  );
}
