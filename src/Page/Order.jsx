import { useState } from "react";

const Order = () => {
  const [sortingData, setSortingData] = useState();
  const [sortDirection, setSortDirection] = useState("ASC");

  const data = [
    {
      id: 1,
      date: "2022-10-12 18:34 CET",
      address: "   Robert Robertson ,1234 NW Bobcat Lane",
      product: "Sport Hoodie, Boxing bag, Ugly hat, Short jean",
    },
    {
      id: 2,
      date: "2022-10-12 18:34 CET",
      address: "   Robert Robertson ,1234 NW Bobcat Lane",
      product: "Sport Hoodie, Boxing bag, Ugly hat, Short jean",
    },
    {
      id: 3,
      date: "2022-10-12 18:34 CET",
      address: "   Robert Robertson ,1234 NW Bobcat Lane",
      product: "Sport Hoodie, Boxing bag, Ugly hat, Short jean",
    },
    {
      id: 4,
      date: "2022-10-12 18:34 CET",
      address: "   Robert Robertson ,1234 NW Bobcat Lane",
      product: "Sport Hoodie, Boxing bag, Ugly hat, Short jean",
    },
    {
      id: 5,
      date: "2022-10-12 18:34 CET",
      address: "   Robert Robertson ,1234 NW Bobcat Lane",
      product: "Sport Hoodie, Boxing bag, Ugly hat, Short jean",
    },
    {
      id: 6,
      date: "2022-10-12 18:34 CET",
      address: "   Robert Robertson ,1234 NW Bobcat Lane",
      product: "Sport Hoodie, Boxing bag, Ugly hat, Short jean",
    },
    {
      id: 7,
      date: "2022-10-12 18:34 CET",
      address: "   Robert Robertson ,1234 NW Bobcat Lane",
      product: "Sport Hoodie, Boxing bag, Ugly hat, Short jean",
    },
    {
      id: 8,
      date: "2022-10-12 18:34 CET",
      address: "   Robert Robertson ,1234 NW Bobcat Lane",
      product: "Sport Hoodie, Boxing bag, Ugly hat, Short jean",
    },
    {
      id: 9,
      date: "2022-10-12 18:34 CET",
      address: "   Robert Robertson ,1234 NW Bobcat Lane",
      product: "Sport Hoodie, Boxing bag, Ugly hat, Short jean",
    },
    {
      id: 10,
      date: "2022-10-12 18:34 CET",
      address: "   Robert Robertson ,1234 NW Bobcat Lane",
      product: "Sport Hoodie, Boxing bag, Ugly hat, Short jean",
    },
  ];

  function updateSorting(column) {
    alert(column);
  }
  const sortedData = data;

  return (
    <div className="p-3 sm:p-5 w-full bg-white sm:my-2 sm:mr-8 sm:rounded-3xl">
      <h1 className="text-primary font-bold text-2xl sm:text-3xl mb-4">
        Orders
      </h1>
      <table className="w-full">
        <thead>
          <tr>
            <th
              onClick={() => updateSorting("id")}
              className="cursor-pointer font-bold px-[15px] py-[8px] align-top text-primary uppercase border-b border-red-300"
            >
              ID
            </th>
            <th
              onClick={() => updateSorting("date")}
              className="cursor-pointer font-bold px-[15px] py-[8px] align-top text-primary uppercase border-b border-red-300"
            >
              Date
            </th>
            <th
              onClick={() => updateSorting("address")}
              className="cursor-pointer font-bold px-[15px] py-[8px] align-top text-primary uppercase border-b border-red-300"
            >
              Address
            </th>
            <th
              onClick={() => updateSorting("product")}
              className="cursor-pointer font-bold px-[15px] py-[8px] align-top text-primary uppercase border-b border-red-300"
            >
              Products
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, i) => (
            <tr key={i}>
              {Object.keys(item).map((key, i) => (
                <td
                  className="px-[15px] py-[8px] align-top text-sm leading-4 text-gray-400 border-b border-red-300"
                  key={i}
                >
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
