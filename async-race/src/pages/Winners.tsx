import React from "react";
import "./Winners.css";

export const Winners = () => {
  return (
    <div>
      <h1>Winners (0)</h1>
      <h2>Page 1</h2>
      <table className="table">
        <tr className="table-title">
          <th>Number</th>
          <th>Car</th>
          <th>Name</th>
          <th>Wins</th>
          <th>Best time (seconds)</th>
        </tr>
        <tr>
          <td>1</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  );
};