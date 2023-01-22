import React, { FC, useState } from "react";
import {ReactComponent as Car} from "../../assets/images/car.svg";
import Flag from "../../assets/images/flag.svg";
import { Button } from "../button/Button";
import "./Track.css";
import { useSettingsCarsContext } from "../../context/context";

interface ICarsProps {
  cars: ICar[];
  fill: string;
}

interface ICar {
  name: string;
  color: string;
  id: number;
}

export const Track: FC<ICarsProps> = ({ fill }) => { 
  const { colorValue } = useSettingsCarsContext();
  console.log(colorValue);
  
  return (
    <div className="container">
      <div className="buttons">
        <Button action="Start" />
        <Button action="Stop" />
        <Button action="Select" />
        <Button action="Remove" />
      </div>
      <div className="race">
        <Car className="img car" fill={fill ? fill : colorValue} style={{ height: "30" }}></Car>
        <img className="img flag" src={Flag}></img>
      </div>
    </div>
  );
};