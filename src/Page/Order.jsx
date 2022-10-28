import React from "react";

const Order = () => {
  return (
    <div className="p-3 sm:p-5 w-full bg-white sm:my-2 sm:mr-8 sm:rounded-3xl">
      <h1 className="text-primary font-bold text-2xl sm:text-3xl mb-4">
        Orders
      </h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="font-normal">ID</th>
            <th className="font-normal">Date</th>
            <th className="font-normal">Address</th>
            <th className="font-normal">Products</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Order;
