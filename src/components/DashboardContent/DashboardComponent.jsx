import React from "react";
import Boxes from "./Boxes";
import ChartBox from "./ChartBox";

const DashboardComponent = () => {
  return (
    <main className="p-5 grow bg-white my-2 mr-2 rounded-3xl">
      <Boxes />
      <ChartBox />
    </main>
  );
};

export default DashboardComponent;
