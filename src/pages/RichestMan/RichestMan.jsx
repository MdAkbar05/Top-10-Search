import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Richest.scss";
import { RichestMans } from "./RichestManData";
const RichestMan = () => {
  return (
    <>
      <div className="heroSec">
        <div className="text-center p-3">Top Ten Richest Man in the world!</div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Net-Worth</th>
            <th scope="col">Source-Of-Wealth</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {RichestMans.map((data) => (
            <tr key={data.rank}>
              <th className="p-3 m-auto" scope="row">
                {data.rank}
              </th>
              <td className="p-3 m-auto">{data.name}</td>
              <td className="p-3 m-auto">{data.netWorth}</td>
              <td className="p-3 m-auto">{data.sourceOfWealth}</td>
              <td className="p-3 m-auto">{data.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RichestMan;
