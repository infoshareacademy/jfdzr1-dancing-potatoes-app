import React from "react";
import BarChart from "./HomeFeatures/BarChart";
import PieChart from "./HomeFeatures/PieChart";
import Carousel from "./HomeFeatures/Carousel";
import waterfall from "./images/waterfall.gif";

export default function Home() {
  return (
    <div>
      <img
        src={waterfall}
        alt={"homeImage"}
        width="100%"
        height="50%"
        style={{
          position: "relative",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          left: "0px",
        }}
      />
      <PieChart />
      <Carousel />
      <BarChart />
    </div>
  );
}
