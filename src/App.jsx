import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex gap-3 min-h-screen">
      <Sidebar />
      <main>Main</main>
    </div>
  );
};

export default App;
