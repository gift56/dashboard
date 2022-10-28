import {
  AiOutlineHome,
  AiOutlineUnorderedList,
  AiOutlineInbox,
  AiOutlineStar,
} from "react-icons/ai";
import { BsGear, BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const active =
    "bg-white text-primary rounded-xl rounded-r-none px-4 py-2 pr-7 flex gap-2 items-center";
  const inActive = "px-4 py-2 flex gap-2 items-center";

  return (
    <aside className="bg-primary text-white p-5 py-10 pr-0">
      <Link to="/" className="flex mb-6 items-center justify-center mr-2 gap-1">
        <BsShop />
        <span>YourShop</span>
      </Link>
      <nav>
        <Link to="/" className={active}>
          <AiOutlineHome />
          <span>Dashboard</span>
        </Link>
        <Link to="/orders" className={inActive}>
          <AiOutlineUnorderedList />
          <span>Orders</span>
        </Link>
        <Link to="/products" className={inActive}>
          <AiOutlineInbox />
          Products
        </Link>
        <Link to="/reviews" className={inActive}>
          <AiOutlineStar />
          <span>Reviews</span>
        </Link>
        <Link to="/settings" className={inActive}>
          <BsGear />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
