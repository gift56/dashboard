import React from "react";
import Boxes from "./Boxes";
import ChartBox from "./ChartBox";
import TopSales from "./TopSales";

const DashboardComponent = () => {
  return (
    <main className="p-5 w-full bg-white my-2 mr-8 rounded-3xl">
      <div className="mb-4 flex justify-between">
        <h1 className="text-primary text-xl">
          Welcome <b>Efe Gift</b>
        </h1>
        <div className="flex items-center w-1/6  rounded-md">
          <div className="w-10">
            <img
              src="https://yt3.ggpht.com/fm3vHmjvtRVzSW7bSPmR5IGTrwQ14TEqgyn2LjlXLpdrlnwCW28nPMxORHoJYWUWCreuKZi5-bo=s600-c-k-c0x00ffffff-no-rj-rp-mo"
              alt="profile_Img"
              className="w-full rounded-full"
            />
          </div>
          <h2 className="font-bold text-primary leading-4">Efe Gift</h2>
        </div>
      </div>
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
