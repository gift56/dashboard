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
      icon: <AiOutlineHome />,
      name: "Dashboard",
    },
    {
      to: "/orders",
      icon: <AiOutlineUnorderedList />,
      name: "Orders",
    },
    {
      to: "/products",
      icon: <AiOutlineInbox />,
      name: "Products",
    },
    {
      to: "/reviews",
      icon: <AiOutlineStar />,
      name: "Reviews",
    },
    {
      to: "/settings",
      icon: <BsGear />,
      name: "Settings",
    },
  ];
  return (
    <aside className="bg-primary text-white p-1 sm:p-5 py-10 pr-0">
      <Link to="/" className="flex mb-6 items-center justify-center mr-2 gap-1">
        <BsShop />
        <span className="hidden sm:flex">YourShop</span>
      </Link>
      <nav>
        {LinksData.map(({ to, icon, name }, i) => (
          <Links
            to={to}
            className="px-4 py-2 flex gap-2 items-center mt-3"
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
