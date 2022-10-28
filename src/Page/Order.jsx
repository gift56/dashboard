import React from "react";

const Order = () => {
  const data = [
    {
      id: 1,
      date: "2022-10-12 18:34 CET",
    },
  ];

  return (
    <div className="p-3 sm:p-5 w-full bg-white sm:my-2 sm:mr-8 sm:rounded-3xl">
      <h1 className="text-primary font-bold text-2xl sm:text-3xl mb-4">
        Orders
      </h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="font-bold px-[15px] py-[8px] align-top text-primary uppercase border-b border-red-300">
              ID
            </th>
            <th className="font-bold px-[15px] py-[8px] align-top text-primary uppercase border-b border-red-300">
              Date
            </th>
            <th className="font-bold px-[15px] py-[8px] align-top text-primary uppercase border-b border-red-300">
              Address
            </th>
            <th className="font-bold px-[15px] py-[8px] align-top text-primary uppercase border-b border-red-300">
              Products
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-[15px] py-[8px] align-top text-sm leading-4 text-gray-400 border-b border-red-300">
              1.
            </td>
            <td className="px-[15px] py-[8px] align-top text-sm leading-4 text-gray-400 border-b border-red-300">
              2022-10-12 18:34 CET
            </td>
            <td className="px-[15px] py-[8px] align-top text-sm leading-4 text-gray-400 border-b border-red-300">
              Robert Robertson ,<br />
              1234 NW Bobcat Lane
            </td>
            <td className="px-[15px] py-[8px] align-top text-sm leading-4 text-gray-400 border-b border-red-300">
              Sport Hoodie, Boxing bag, Ugly hat, Short jean
            </td>
          </tr>
          <tr>
            <td className="px-[15px] py-[8px] align-top text-sm leading-4 text-gray-400 border-b border-red-300">
              2.
            </td>
            <td className="px-[15px] py-[8px] align-top text-sm leading-4 text-gray-400 border-b border-red-300">
              2022-10-12 18:34 CET
            </td>
            <td className="px-[15px] py-[8px] align-top text-sm leading-4 text-gray-400 border-b border-red-300">
              Robert Robertson ,<br />
              1234 NW Bobcat Lane
            </td>
            <td className="px-[15px] py-[8px] align-top text-sm leading-4 text-gray-400 border-b border-red-300">
              Sport Hoodie, Boxing bag, Ugly hat, Short jean
            </td>
          </tr>
          <tr>
            <td className="px-[15px] py-[8px] align-top text-sm leading-4 text-gray-400">
              3.
            </td>
            <td className="px-[15px] py-[8px] align-top text-sm leading-4 text-gray-400">
              2022-10-12 18:34 CET
            </td>
            <td className="px-[15px] py-[8px] align-top text-sm leading-4 text-gray-400">
              Robert Robertson ,<br />
              1234 NW Bobcat Lane
            </td>
            <td className="px-[15px] py-[8px] align-top text-sm leading-4 text-gray-400">
              Sport Hoodie, Boxing bag, Ugly hat, Short jean
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Order;
