import React from "react";
import { AiOutlineHome } from "react-icons/ai";

const App = () => {
  return (
    <div className="flex gap-3 min-h-screen">
      <aside className="bg-primary text-white p-5">
        <nav>
          <a href="#dashboard" className="block p-2 ">
            <AiOutlineHome />
            Dashboard
          </a>
          <a href="" className="block p-2 ">
            Orders
          </a>
          <a href="" className="block p-2 ">
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
