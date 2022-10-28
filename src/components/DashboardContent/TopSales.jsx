import React from "react";

const TopSales = () => {
  const sales = [
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0156/6146/products/PowerMinimalSportsBraREP-L-A0030MagentaPinkB4A5J-KBH3-0049_800x.jpg?v=1666103385",
      name: "Power Minimal Sports Bra",
      price: "36",
    },
    {
      id: 2,
      img: "https://cdn.shopify.com/s/files/1/0156/6146/products/PowerCropZipHoodieBlackB3A9X-BBBB-0800_800x.jpg?v=1666103379",
      name: "Power Cropped Zip Hoodie",
      price: "56",
    },
    {
      id: 3,
      img: "https://cdn.shopify.com/s/files/1/0156/6146/products/SportPrintSsT-ShirtREP-M-A0022FluoLimeA2A9E-EBSS28.A_cbc3e86c-5185-45e6-9c77-8905905ba842_800x.jpg?v=1662468374",
      name: "Sport T-shirt",
      price: "32",
    },
    {
      id: 4,
      img: "https://cdn.shopify.com/s/files/1/0156/6146/products/LegacyHoodieBlack-BlackA1A8D-BBF71_800x.jpg?v=1664868183",
      name: "Legacy Hoodie",
      price: "48",
    },
  ];

  return (
    <>
      <h2 className="text-primary font-bold">Top selling products</h2>
      <div className="flex flex-col gap-4">
        {sales.map(({ id, img, name, price }) => (
          <div className="flex items-center gap-3" key={id}>
            <span className="text-gray-500 text-sm">{id}.</span>
            <img src={img} alt={name} className="w-12 rounded-full h-12" />
            <div>
              <span className="text-base block text-primary leading-5">
                {name}
              </span>
              <span className="text-primary font-bold text-xl">${price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopSales;
