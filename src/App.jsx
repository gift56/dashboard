import React from "react";
import { AiOutlineHome, AiOutlineUnorderedList } from "react-icons/ai";
import { HiOutlineArchiveBox } from "react-icons/hi";

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
            <HiOutlineArchiveBox />
            Products
          </a>
          <a href="" className="block p-2 ">
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
