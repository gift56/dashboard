import React from "react";
import Boxes from "./Boxes";
import ChartBox from "./ChartBox";
import TopSales from "./TopSales";
import Welcome from "./Welcome";

const DashboardComponent = () => {
  return (
    <main className="p-3 sm:p-5 w-full bg-white sm:my-2 sm:mr-8 sm:rounded-3xl">
      <Welcome />
      <div className="flex flex-col lg:flex-row gap-7">
        <div className="w-full lg:w-3/5 grow">
          <Boxes />
          <ChartBox />
        </div>
        <div className="w-full lg:w-1/4 grow flex flex-col gap-3">
          <TopSales />
        </div>
      </div>
    </main>
  );
};

export default DashboardComponent;
