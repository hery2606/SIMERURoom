import React, { useState } from "react";

const Login = () => {
  const [activeTab, setActiveTab] = useState("pegawai");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Login
        </h2>

        {/* Tab Menu */}
        <div className="flex mb-6 border-b">
          <button
            onClick={() => setActiveTab("pegawai")}
            className={`w-1/2 py-2 text-center font-medium ${
              activeTab === "pegawai"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-500"
            }`}
          >
            Pegawai
          </button>
          <button
            onClick={() => setActiveTab("mahasiswa")}
            className={`w-1/2 py-2 text-center font-medium ${
              activeTab === "mahasiswa"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-500"
            }`}
          >
            Mahasiswa
          </button>
        </div>

        {/* Formulir Login */}
        {activeTab === "pegawai" ? (
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">NIP Pegawai</label>
              <input
                type="text"
                placeholder="Masukkan NIP"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Masukkan Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Login sebagai Pegawai
            </button>
          </form>
        ) : (
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">NIM Mahasiswa</label>
              <input
                type="text"
                placeholder="Masukkan NIM"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Masukkan Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Login sebagai Mahasiswa
            </button>
          </form>
        )}

        {/* Link Tambahan */}
        <p className="text-center text-gray-600 mt-4">
          Lupa Password?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Klik di sini
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
