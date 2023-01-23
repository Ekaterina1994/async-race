import React, { useEffect } from "react";
import "./Settings.css";
import { useSettingsCarsContext } from "../../context/context";

type InputType = HTMLInputElement;

// const { setNameValue } = useSettingsCarsContext();

const getCarName = (e: React.ChangeEvent<InputType>): string => {
  console.log(e.target.value);
  const carName = e.target.value;
  return carName;
};


let colorArray: string[] = [];
let value: string;

export const Settings = () => {
  const { setColorValue } = useSettingsCarsContext();

  const getColor = (e: React.ChangeEvent<InputType>) => {
    value = e.target.value;
    return value;
  };

  colorArray = [...colorArray, value];
  console.log(colorArray);
  setColorValue(colorArray[colorArray.length - 1]);


  return (
    <div className="wrap">
      <input type="text" onChange={getCarName}></input>
      <input type="color" onInput={getColor}></input>
    </div>
  );
};