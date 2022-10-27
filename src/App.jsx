import React from "react";

const App = () => {
  return (
    <div className="flex gap-3 min-h-screen">
      <aside className="bg-primary text-white p-5">
        <nav>
          <a href="" className="block p-2 ">
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
