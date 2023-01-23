import React, { useEffect } from "react";
import { Button } from "../button/Button";
import "./Settings.css";
import { useSettingsCarsContext } from "../../context/context";

type InputType = HTMLInputElement;


const getCarName = (e: React.ChangeEvent<InputType>): string => {
  console.log(e.target.value);
  return (e.target.value);
};

let colorArray: string[] = [];
let value: string;

export const Settings = () => {


  const { colorValue, setColorValue } = useSettingsCarsContext();

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
      <Button action="Create" />
    </div>
  );
};