import { useState } from "react";
import { orderBy } from "lodash";

const Order = () => {
  const [sortingColumn, setSortingColumn] = useState("id");
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

  const columns = {
    id: "ID",
    date: "Date",
    address: "Address",
    products: "Products",
  };

  function updateSorting(column) {
    if (column === sortingColumn) {
      setSortDirection((prev) => (prev === "ASC" ? "DESC" : "ASC"));
    }
    setSortingColumn(column);
  }
  const sortedData = orderBy(
    data,
    sortingColumn,
    sortDirection.toLocaleLowerCase()
  );

  return (
    <div className="p-3 sm:p-5 w-full bg-white sm:my-2 sm:mr-8 sm:rounded-3xl overflow-scroll sm:overflow-x-hidden">
      <h1 className="text-primary font-bold text-2xl sm:text-3xl mb-4">
        Orders
      </h1>
      <table className="w-full">
        <thead>
          <tr>
            {Object.keys(columns).map((ck) => (
              <th
                onClick={() => updateSorting(ck)}
                className="cursor-pointer font-bold  sm:px-[15px] py-[8px] align-top text-primary uppercase border-b border-red-300"
                key={ck}
              >
                {columns[ck]}
                {sortingColumn === ck
                  ? sortDirection === "ASC"
                    ? "↓"
                    : "↑"
                  : ""}
              </th>
            ))}
          </tr>
        </thead>
        
        <tbody>
          {sortedData.map((item, i) => (
            <tr key={i}>
              {Object.keys(item).map((key, i) => (
                <td
                  className="px-[4px] sm:px-[15px] py-[8px] align-top text-sm leading-4 text-gray-400 border-b border-red-300"
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
