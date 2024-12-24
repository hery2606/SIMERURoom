import React from "react";
import { Link } from "react-router-dom";
import { Home, Calendar, Settings, Lock } from "react-feather";
import Searching from "./searching";
const Sidebar = () => {
  return (
    <div className="w-full md:w-64 bg-white border-r h-screen shadow-md">
      <div className="fixed w-full top-0 ml-64">
          <Searching/>
          </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-indigo-600">SIMERU Room</h1>
      </div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-indigo-100 cursor-pointer">
            <Link to="/dashboard/beranda" className="flex items-center text-gray-700">
              <Home className="mr-2" /> Beranda
            </Link>
          </li>
          <li className="p-4 hover:bg-indigo-100 cursor-pointer">
            <Link to="/dashboard/reservasi-ruangan" className="flex items-center text-gray-700">
              <Calendar className="mr-2" /> Reservasi Ruangan
            </Link>
          </li>
          <li className="p-4 hover:bg-indigo-100 cursor-pointer">
            <Link to="/dashboard/reservasi-saya" className="flex items-center text-gray-700">
              <Calendar className="mr-2" /> Reservasi Saya
            </Link>
          </li>
          <li className="p-4 hover:bg-indigo-100 cursor-pointer">
            <Link to="/dashboard/ubah-password" className="flex items-center text-gray-700">
              <Lock className="mr-2" /> Ubah Password
            </Link>
          </li>
          <li className="p-4 hover:bg-indigo-100 cursor-pointer">
            <Link to="/dashboard/pengaturan" className="flex items-center text-gray-700">
              <Settings className="mr-2" /> Pengaturan
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
