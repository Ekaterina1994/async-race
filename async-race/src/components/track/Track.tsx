import React, { FC } from "react";
import Car from "../../assets/images/car.svg";
import Flag from "../../assets/images/flag.svg";
import { Button } from "../button/Button";
import "./Track.css";

export const Track: FC = () => {
  return (
    <div className="container">
      <div className="buttons">
        <Button action="Start" />
        <Button action="Stop" />
        <Button action="Select" />
        <Button action="Remove" />
      </div>
      <div className="race">
        <img className="img car" src={Car}></img>
        <img className="img flag" src={Flag}></img>
      </div>
    </div>
  );
};