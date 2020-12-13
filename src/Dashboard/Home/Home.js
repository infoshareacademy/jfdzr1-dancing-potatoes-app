import React from "react";
import BarChart from "./HomeFeatures/BarChart";
import PieChart from "./HomeFeatures/PieChart";
import Carousel from "./HomeFeatures/Carousel";

export default function Home() {
  return (
    <div>
      <PieChart />
      <Carousel />
      <BarChart />
    </div>
  );
}
