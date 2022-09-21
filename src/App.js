import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Billings from "./pages/Billings";
import Delivery from "./pages/Delivery";
import Orders from "./pages/Orders";
import Analytics from "./pages/Analytics";
import Add from "./pages/Add";
import Products from "./pages/Products";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { UserData } from "./Data/UsersLoginData";
import Navbar from "./components/Navbar";
function App() {
  
  return (
    <Router>
      <Navbar/> 
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard  />} />
          <Route path="/bill" element={<Billings />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
