import React from "react";
import DashboardComponent from "./components/DashboardContent/DashboardComponent";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex gap-3 min-h-screen">
      <Sidebar />
      <DashboardComponent />
    </div>
  );
};

export default App;
