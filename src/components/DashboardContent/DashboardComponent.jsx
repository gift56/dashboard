import React from "react";
import { BsBarChartLine } from "react-icons/bs";

const DashboardComponent = () => {
  return (
    <main className="p-5 grow bg-white my-2 mr-2 rounded-lg">
      <div className="bg-blue-200 text-primary p-5 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md flex justify-between items-center">
        <BsBarChartLine className="w-8 h-8" />
        <div className="">
            <h2>$345</h2>
            <h3>Profit today</h3>
        </div>
      </div>
    </main>
  );
};

export default DashboardComponent;
