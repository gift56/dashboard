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
        <div className="w-1/4 flex flex-col gap-3">
          <h2 className="text-primary font-bold">Top selling products</h2>
          <div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm">1.</span>
              <img
                src="https://cdn.shopify.com/s/files/1/0156/6146/products/PowerMinimalSportsBraREP-L-A0030MagentaPinkB4A5J-KBH3-0049_800x.jpg?v=1666103385"
                alt="iamges"
                className="w-12 rounded-full h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardComponent;
