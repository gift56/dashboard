import {
  AiOutlineHome,
  AiOutlineUnorderedList,
  AiOutlineInbox,
  AiOutlineStar,
} from "react-icons/ai";
import { BsGear } from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className="bg-primary text-white p-5">
      <nav>
        <a
          href="#dashboard"
          className="bg-white text-primary rounded-xl px-4 py-2 flex gap-2 items-center"
        >
          <AiOutlineHome />
          <span>Dashboard</span>
        </a>
        <a href="#order" className="px-4 py-2 flex gap-2 items-center">
          <AiOutlineUnorderedList />
          <span>Orders</span>
        </a>
        <a href="#products" className="flex gap-2 items-center px-4 py-2">
          <AiOutlineInbox />
          Products
        </a>
        <a href="#review" className="flex gap-2 items-center px-4 py-2">
          <AiOutlineStar />
          <span>Reviews</span>
        </a>
        <a href="#settings" className="flex gap-2 items-center px-4 py-2">
          <BsGear />
          <span>Settings</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;