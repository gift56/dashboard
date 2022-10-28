import React from "react";
import Boxes from "./Boxes";
import ChartBox from "./ChartBox";

const DashboardComponent = () => {
  return (
    <main className="p-5 w-[90%] bg-white my-2 mr-8 rounded-3xl">
      <div className="flex gap-5">
        <div>
          <Boxes />
          <ChartBox />
        </div>
        <div>
            <h2 className="text-primary font-bold">Top selling products</h2>
        </div>
      </div>
    </main>
  );
};

export default DashboardComponent;
