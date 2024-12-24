import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">SIMERU Room</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#" className="hover:underline">Beranda</a></li>
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">pelayanan</a></li>
          <li><a href="#" className="hover:underline">Kontak</a></li>
        </ul>
      </nav>

      <button className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-300 transition hover:text-black">
        Login
      </button>
    </header>
  );
};

export default Header;
