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
            <th className="font-medium px-[15px] py-[2px] align-top">ID</th>
            <th className="font-medium px-[15px] py-[2px] align-top">Date</th>
            <th className="font-medium px-[15px] py-[2px] align-top">Address</th>
            <th className="font-medium px-[15px] py-[2px] align-top">Products</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-[15px] py-[2px] align-top text-sm">1.</td>
            <td className="px-[15px] py-[2px] align-top text-sm">2022-10-12 18:34 CET</td>
            <td className="px-[15px] py-[2px] align-top text-sm">
              Robert Robertson ,<br />
              1234 NW Bobcat Lane
            </td>
            <td className="px-[15px] py-[2px] align-top text-sm">
              Sport Hoodie, Boxing bag, Ugly hat, Short jean
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Order;
