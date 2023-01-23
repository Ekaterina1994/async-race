import React, { FC } from "react";
import "./Button.css";

interface ButtonProps {
  action: string;
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <div>
      <button className="button">{props.action}</button>
    </div>
  );
};