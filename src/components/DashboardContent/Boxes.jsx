import React from "react";
import { BsBarChartLine } from "react-icons/bs";
import { AiOutlineInbox } from "react-icons/ai";

const Boxes = () => {
  return (
    <div className="flex  gap-3">
      <div className="bg-blue-200  w-1/2 text-primary p-5 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md flex items-center gap-2">
        <BsBarChartLine className="w-8 h-8" />
        <div className="">
          <h2 className="text-2xl font-bold leading-4">$345</h2>
          <h3>Profit today</h3>
        </div>
      </div>
      <div className="bg-red-200  w-1/2 text-primary p-5 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md flex items-center gap-2">
        <AiOutlineInbox className="w-8 h-8" />
        <div>
          <h2 className="text-2xl font-bold leading-4">21 392</h2>
          <h3 className="">Orders this month</h3>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
