import React from "react";
import {
  AiOutlineHome,
  AiOutlineUnorderedList,
  AiOutlineInbox,
  AiOutlineStar,
} from "react-icons/ai";
import { BsGear } from "react-icons/bs";

const App = () => {
  return (
    <div className="flex gap-3 min-h-screen">
      <aside className="bg-primary text-white p-5">
        <nav>
          <a href="#dashboard" className="block p-2 ">
            <AiOutlineHome />
            <span>Dashboard</span>
          </a>
          <a href="#order" className="block p-2 ">
            <AiOutlineUnorderedList />
            <span>Orders</span>
          </a>
          <a href="#products" className="block p-2 ">
            <AiOutlineInbox />
            Products
          </a>
          <a href="#review" className="block p-2 ">
            <AiOutlineStar />
            <span>Reviews</span>
          </a>
          <a href="#settings" className="block p-2 ">
            <BsGear />
            <span>Settings</span>
          </a>
        </nav>
      </aside>
      <main>Main</main>
    </div>
  );
};

export default App;
