import React from "react";
import {
  AiOutlineHome,
  AiOutlineUnorderedList,
  AiOutlineInbox,
  AiOutlineStar,
} from "react-icons/ai";

const App = () => {
  return (
    <div className="flex gap-3 min-h-screen">
      <aside className="bg-primary text-white p-5">
        <nav>
          <a href="#dashboard" className="block p-2 ">
            <AiOutlineHome />
            Dashboard
          </a>
          <a href="#order" className="block p-2 ">
            <AiOutlineUnorderedList />
            Orders
          </a>
          <a href="#products" className="block p-2 ">
            <AiOutlineInbox />
            Products
          </a>
          <a href="#review" className="block p-2 ">
            <AiOutlineStar />
            Reviews
          </a>
          <a href="" className="block p-2 ">
            Settings
          </a>
        </nav>
      </aside>
      <main>Main</main>
    </div>
  );
};

export default App;
