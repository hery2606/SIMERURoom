import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ReservasiRuangan from "./ReservasiRuangan";
import ReservasiSaya from "./ReservasiSaya";
import UbahPassword from "./UbahPassword";
import Pengaturan from "./Pengaturan";
import Beranda from "./Beranda";
import Footer from "../components/Footer";



const Dashboard = () => {
  return (
    <div className="flex ">
   
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen">
      <Sidebar/>
      
      
      
    
    </div>
      {/* Content Area */}
      <div className="flex-1 p-4 ml-64">
        <Routes>
          <Route path="/beranda" element={<Beranda />} />
          <Route path="reservasi-ruangan" element={<ReservasiRuangan />} />
          <Route path="reservasi-saya" element={<ReservasiSaya />} />
          <Route path="ubah-password" element={<UbahPassword />} />
          <Route path="pengaturan" element={<Pengaturan />} />
        </Routes>
      </div>
    <div className="fixed bottom-0 w-full">
      <Footer />
    </div>
    </div>
  );
};

export default Dashboard;


