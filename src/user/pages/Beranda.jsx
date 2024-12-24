import React from "react";
import Searching from "../components/searching";
const Beranda = () => {
    return (
      <div className="flex flex-col md:flex-row h-screen ">
      {/* Sidebar */}

     
        
        <div className="flex-1 bg-gray-50 p-4 mt-28">
          {/* Header */}
       
  
          {/* Welcome Message */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-2">Selamat Datang HERI ARISTA 🎉</h1>
            <div className="flex items-center">
              <span className="mr-2 text-gray-600">AR</span>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span>👤</span>
              </div>
            </div>
            <p className="text-gray-500">
              Ayo mulai reservasi ruangan dengan mudah dan nyaman.
            </p>
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-indigo-600">
              Reservasi Ruangan
            </button>
          </div>
  
          {/* Statistik Reservasi */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="font-semibold mb-2">Ruangan Tersedia</h3>
              <p className="text-3xl text-indigo-500">12</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="font-semibold mb-2">Total Reservasi Anda</h3>
              <p className="text-3xl text-indigo-500">11</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="font-semibold mb-2">Reservasi Disetujui</h3>
              <p className="text-3xl text-green-500">8</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="font-semibold mb-2">Reservasi Ditolak</h3>
              <p className="text-3xl text-red-500">0</p>
            </div>
          </div>
  
          {/* List Aktivitas Reservasi */}
          <div className="bg-white p-4 rounded-md shadow mb-6">
            <h3 className="font-semibold mb-4">Aktivitas Reservasi</h3>
            <ul>
              <li className="mb-3">
                <span className="text-yellow-500 font-semibold">Menunggu Konfirmasi</span>
                <p>Lab Komputer 1 | 2024-01-24 s/d 2024-01-25</p>
              </li>
              <li className="mb-3">
                <span className="text-blue-500 font-semibold">Reservasi Dibatalkan</span>
                <p>Lab Komputer 2 | 2024-01-25 s/d 2024-01-26</p>
              </li>
              <li>
                <span className="text-green-500 font-semibold">Reservasi Disetujui</span>
                <p>Lab Komputer 1 | 2024-01-08 s/d 2024-01-09</p>
              </li>
            </ul>
          </div>
  
          {/* Ruangan Dipinjam */}
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="font-semibold mb-2">Ruangan yang Sedang Dipinjam</h3>
            <div className="flex justify-between">
              <p>Lab Komputer 2 (Blok A - G3)</p>
              <p className="font-semibold">1 Hari</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Beranda;
  