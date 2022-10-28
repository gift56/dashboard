import React from "react";
import DashboardComponent from "./components/DashboardContent/DashboardComponent";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Routes>
        <Route />
      </Routes>
      <DashboardComponent />
    </div>
  );
};

export default App;
