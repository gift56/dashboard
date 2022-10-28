import React from "react";
import DashboardComponent from "./components/DashboardContent/DashboardComponent";
import Sidebar from "./components/Sidebar/Sidebar";
import Order from "./Page/Order";
import Products from "./Page/Products";
import Preview from "./Page/Preview";
import Settings from "./Page/Settings";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardComponent />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reviews" element={<Preview />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;
