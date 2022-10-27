import React from "react";
import { BsBarChartLine } from "react-icons/bs";

const DashboardComponent = () => {
  return (
    <main className="p-5 border-4 grow border-primary">
      <div className="bg-blue-300 text-primary p-5 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md">
        <BsBarChartLine />
        <h2>$345</h2>
        <h3>Profit today</h3>
      </div>
    </main>
  );
};

export default DashboardComponent;
