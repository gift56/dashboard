import React from "react";
import { BsBarChartLine } from "react-icons/bs";

const DashboardComponent = () => {
  return (
    <main>
      <div className="bg-blue-300 text-primary p-5">
        <BsBarChartLine />
        <h2>$345</h2>
        <h3>Profit today</h3>
      </div>
    </main>
  );
};

export default DashboardComponent;
