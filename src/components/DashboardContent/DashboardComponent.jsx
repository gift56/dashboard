import React from "react";


const DashboardComponent = () => {
  return (
    <main className="p-5 grow bg-white my-2 mr-2 rounded-3xl">
      <div className="flex  gap-3">
        <div className="bg-blue-200 grow w-1/2 text-primary p-5 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md flex items-center gap-2">
          <BsBarChartLine className="w-8 h-8" />
          <div className="">
            <h2 className="text-2xl font-bold leading-4">$345</h2>
            <h3 className="">Profit today</h3>
          </div>
        </div>
        <div className="bg-red-200 grow w-1/2 text-primary p-5 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md flex items-center gap-2">
          <AiOutlineInbox className="w-8 h-8" />
          <div className="">
            <h2 className="text-2xl font-bold leading-4">21 392</h2>
            <h3 className="">Orders this month</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardComponent;
