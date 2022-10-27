import React from "react";
import { BsBarChartFill } from "react-icons/bs";

const DashboardComponent = () => {
  return (
    <main>
      <div className="bg-blue-400">
        <BsBarChartFill />
        <h2>$345</h2>
        <h3>Profit today</h3>
      </div>
    </main>
  );
};

export default DashboardComponent;
