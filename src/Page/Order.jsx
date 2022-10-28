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
            <th className="font-medium bg-[#ddd] px-[15px] py-[2px]">ID</th>
            <th className="font-medium bg-[#ddd] px-[15px] py-[2px]">Date</th>
            <th className="font-medium bg-[#ddd] px-[15px] py-[2px]">Address</th>
            <th className="font-medium bg-[#ddd] px-[15px] py-[2px]">Products</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bg-[#ddd] px-[15px] py-[2px]">1.</td>
            <td className="bg-[#ddd] px-[15px] py-[2px]">2022-10-12 18:34 CET</td>
            <td className="bg-[#ddd] px-[15px] py-[2px]">
              Robert Robertson ,<br />
              1234 NW Bobcat Lane
            </td>
            <td className="bg-[#ddd] px-[15px] py-[2px]">
              Sport Hoodie, Boxing bag, Ugly hat, Short jean
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Order;
