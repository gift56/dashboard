import React from "react";
import Boxes from "./Boxes";
import ChartBox from "./ChartBox";
import TopSales from "./TopSales";

const DashboardComponent = () => {
  return (
    <main className="p-5 w-[90%] bg-white my-2 mr-8 rounded-3xl">
      <div className="flex gap-5">
        <div>
          <Boxes />
          <ChartBox />
        </div>
        <div className="w-1/4 grow flex flex-col gap-3">
          <TopSales />
        </div>
      </div>
    </main>
  );
};

export default DashboardComponent;
