import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Link.css";

interface LinkProps {
  path: string;
  page: string;
}

export const Link: FC<LinkProps> = (props) => {
  return (
    <div>
      <NavLink className={({ isActive }) =>
        isActive ? "active" : "link"} to={props.path}>{props.page}</NavLink>
    </div>
  );
};