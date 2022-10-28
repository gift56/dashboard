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
            <th className="font-medium">ID</th>
            <th className="font-medium">Date</th>
            <th className="font-medium">Address</th>
            <th className="font-medium">Products</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  );
};

export default Order;
