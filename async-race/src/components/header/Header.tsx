import React, { FC } from "react";
import { Link } from "../link/Link";
import "./Header.css";

export const Header: FC = () => {
  return (
    <div className="nav">
      <Link path="/garage" page="To Garage" />
      <Link path="/winners" page="To Winners" />
    </div>
  );
};