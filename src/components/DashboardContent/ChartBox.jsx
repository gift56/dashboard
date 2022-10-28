import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";

const ChartBox = () => {
  const data = [
    {
      name: "January",
      sales: 4000,
      revenue: 2400,
      amt: 2400,
    },
    {
      name: "February",
      sales: 3000,
      revenue: 1398,
      amt: 2210,
    },
    {
      name: "March",
      sales: 2000,
      revenue: 9800,
      amt: 2290,
    },
    {
      name: "April",
      sales: 2780,
      revenue: 3908,
      amt: 2000,
    },
    {
      name: "May",
      sales: 1890,
      revenue: 4800,
      amt: 2181,
    },
    {
      name: "June",
      sales: 2390,
      revenue: 3800,
      amt: 2500,
    },
    {
      name: "July",
      sales: 3490,
      revenue: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="mt-5 w-full h-[70vh] flex flex-col gap-3 items-center justify-center">
      <h2 className="font-bold text-primary text-3xl mt-6">Sales Statistics</h2>
      <ResponsiveContainer width={"100%"} height="100%">
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            style={{ fill: "#4538A1", fontSize: "0.95rem" }}
          />
          <YAxis style={{ fill: "#4538A1", fontSize: "0.95rem" }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBox;
