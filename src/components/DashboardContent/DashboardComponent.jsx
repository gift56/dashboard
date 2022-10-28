import React from "react";
import Boxes from "./Boxes";
import ChartBox from "./ChartBox";
import TopSales from "./TopSales";
import Welcome from "./Welcome";

const DashboardComponent = () => {
  return (
    <main className="p-5 w-full bg-white my-2 mr-8 rounded-3xl">
      <Welcome />
      <div className="flex flex-col sm:flex-row gap-7">
        <div className="w-full sm:w-3/5 grow">
          <Boxes />
          <ChartBox />
        </div>
        <div className="w-full sm:w-1/4 grow flex flex-col gap-3">
          <TopSales />
        </div>
      </div>
    </main>
  );
};

export default DashboardComponent;
