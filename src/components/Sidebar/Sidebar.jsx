import {
  AiOutlineHome,
  AiOutlineUnorderedList,
  AiOutlineInbox,
  AiOutlineStar,
} from "react-icons/ai";
import { BsGear, BsShop } from "react-icons/bs";
import { NavLink as Links, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-primary text-white p-5 py-10 pr-0">
      <Link to="/" className="flex mb-6 items-center justify-center mr-2 gap-1">
        <BsShop />
        <span>YourShop</span>
      </Link>
      <nav>
        <Link
          to="/"
          className="bg-white text-primary rounded-xl rounded-r-none px-4 py-2 pr-7 flex gap-2 items-center"
        >
          <AiOutlineHome />
          <span>Dashboard</span>
        </Link>
        <Links to="/orders" className="px-4 py-2 flex gap-2 items-center mt-3">
          <AiOutlineUnorderedList />
          <span>Orders</span>
        </Links>
        <Links to="/products" className="px-4 py-2 flex gap-2 items-center mt-3">
          <AiOutlineInbox />
          Products
        </Links>
        <Links to="/reviews" className="px-4 py-2 flex gap-2 items-center mt-3">
          <AiOutlineStar />
          <span>Reviews</span>
        </Links>
        <Links to="/settings" className="px-4 py-2 flex gap-2 items-center mt-3">
          <BsGear />
          <span>Settings</span>
        </Links>
      </nav>
    </aside>
  );
};

export default Sidebar;
