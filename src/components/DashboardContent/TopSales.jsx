import React from "react";

const TopSales = () => {
  const sales = [
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0156/6146/products/PowerMinimalSportsBraREP-L-A0030MagentaPinkB4A5J-KBH3-0049_800x.jpg?v=1666103385",
    },
  ];

  return (
    <>
      <h2 className="text-primary font-bold">Top selling products</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-sm">1.</span>
          <img src="" alt="iamges" className="w-12 rounded-full h-12" />
          <div>
            <span className="text-base block text-primary leading-5">
              Power Minimal Sports Bra
            </span>
            <span className="text-primary font-bold text-xl">$100</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-sm">1.</span>
          <img
            src="https://cdn.shopify.com/s/files/1/0156/6146/products/PowerMinimalSportsBraREP-L-A0030MagentaPinkB4A5J-KBH3-0049_800x.jpg?v=1666103385"
            alt="iamges"
            className="w-12 rounded-full h-12"
          />
          <div>
            <span className="text-base block text-primary leading-5">
              Power Minimal Sports Bra
            </span>
            <span className="text-primary font-bold text-xl">$100</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSales;
