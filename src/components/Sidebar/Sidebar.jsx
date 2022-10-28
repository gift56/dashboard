import {
  AiOutlineHome,
  AiOutlineUnorderedList,
  AiOutlineInbox,
  AiOutlineStar,
} from "react-icons/ai";
import { BsGear, BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";

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
        <Link to="/orders" className="px-4 py-2 flex gap-2 items-center">
          <AiOutlineUnorderedList />
          <span>Orders</span>
        </Link>
        <Link to="/products" className="flex gap-2 items-center px-4 py-2">
          <AiOutlineInbox />
          Products
        </Link>
        <Link to="/reviews" className="flex gap-2 items-center px-4 py-2">
          <AiOutlineStar />
          <span>Reviews</span>
        </Link>
        <Link to="/settings" className="flex gap-2 items-center px-4 py-2">
          <BsGear />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
