import React, { FC, useState } from "react";
import {ReactComponent as Car} from "../../assets/images/car.svg";
import Flag from "../../assets/images/flag.svg";
import { Button } from "../button/Button";
import "./Track.css";
import { useSettingsCarsContext } from "../../context/context";
import { ICarsProps, ICar } from "../../types/interface";

export const Track: FC<ICarsProps> = ({ fill, title }) => { 
  const [cars, setCars] = useState<ICar[]>([]);
  const [count, setCount] = useState<string>("");
  const { colorValue, nameValue } = useSettingsCarsContext();
  console.log(colorValue);

  async function deleteCar() {
    try {
      const response = await fetch(
        "http://localhost:3000/garage/5"
      );
      const newCar = await response.json();
      setCars(cars.filter(item => item !== newCar));
      setCount((cars.length - 1).toString());
    } catch (error) {
      alert(error);
    }
  }
  
  return (
    <div className="container">
      <div className="buttons">
        <Button action="Start" />
        <Button action="Stop" />
        <Button action="Select" />
        <button className="button" onClick={deleteCar}>Remove</button>
      </div>
      <p>{nameValue ? nameValue : title}</p>
      <div className="race">
        <Car className="img car" fill={fill ? fill : colorValue} style={{ height: "30" }}></Car>
        <img className="img flag" src={Flag}></img>
      </div>
    </div>
  );
};