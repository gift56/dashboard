import {
  AiOutlineHome,
  AiOutlineUnorderedList,
  AiOutlineInbox,
  AiOutlineStar,
} from "react-icons/ai";
import { BsGear, BsShop } from "react-icons/bs";
import { NavLink as Links, Link } from "react-router-dom";

const Sidebar = () => {
  const LinksData = [
    {
      to: "/",
      icon: <AiOutlineHome className="w-5 h-5" />,
      name: "Dashboard",
    },
    {
      to: "/orders",
      icon: <AiOutlineUnorderedList className="w-5 h-5" />,
      name: "Orders",
    },
    {
      to: "/products",
      icon: <AiOutlineInbox className="w-5 h-5" />,
      name: "Products",
    },
    {
      to: "/reviews",
      icon: <AiOutlineStar className="w-5 h-5" />,
      name: "Reviews",
    },
    {
      to: "/settings",
      icon: <BsGear className="w-5 h-5" />,
      name: "Settings",
    },
  ];
  return (
    <aside className="bg-primary text-white p-1 pr-0 sm:p-5 py-10 sm:pr-0">
      <Link to="/" className="flex  mb-6 items-center justify-center sm:mr-2 gap-1 sticky top-3 left-0 z-10">
        <BsShop className="w-5 h-5"/>
        <span className="hidden sm:flex">YourShop</span>
      </Link>
      <nav className="sticky top-[5rem] left-0">
        {LinksData.map(({ to, icon, name }, i) => (
          <Links
            to={to}
            className="px-2 sm:px-4 py-2 flex gap-2 items-center mt-3"
            key={i}
          >
            {icon}
            <span className="hidden sm:flex">{name}</span>
          </Links>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
