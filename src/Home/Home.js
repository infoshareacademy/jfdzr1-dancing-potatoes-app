import { Typography } from "@material-ui/core";
import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

export default function Home() {
  return (
      <div
      style={{display: "flex", width: "100%", height: "100%", flexFlow: "column", alignItems: "center"}}>
          <Typography h1>
              Charts
          </Typography>
      <div 
      className="ChartsHolder"
      style={{display: "flex", justifyContent: "space-between"}}>
      <div>
        <BarChart />
      </div>
      <div>
        <PieChart />
      </div>
      </div>
    </div>
  );
}
