import React from "react";
import Boxes from "./Boxes";
import ChartBox from "./ChartBox";

const DashboardComponent = () => {
  return (
    <main className="p-5 w-[90%] bg-white my-2 mr-8 rounded-3xl">
      <Boxes />
      <ChartBox />
    </main>
  );
};

export default DashboardComponent;
