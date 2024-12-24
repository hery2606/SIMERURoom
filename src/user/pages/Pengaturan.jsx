import React from "react";

const UbahPassword = () => {
  return (
    <div className="max-w-4x mx-auto p-4 bg-white rounded-lg shadow-md mt-24">
      <h2 className="text-2xl font-semibold mb-6">Detail Profil</h2>

      {/* Foto Profil */}
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 flex items-center justify-center bg-purple-500 text-white text-3xl font-semibold rounded-md">
          HR
        </div>
        <div className="ml-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">
            Unggah foto baru
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
            Reset
          </button>
          <p className="text-gray-500 text-sm mt-2">
            Diperbolehkan PNG, JPG, JPEG, WEBP. Maksimal ukuran 2MB
          </p>
        </div>
      </div>

      {/* Form Input */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-1">Nama Lengkap</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">E-Mail</label>
          <input
            type="email"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">NIK/NIP</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Nomor Telepon</label>
          <input
            type="tel"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Posisi</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Instansi</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>

      {/* Tombol Aksi */}
      <div className="flex items-center mt-6">
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">
          Simpan Perubahan
        </button>
        <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
          Batal
        </button>
      </div>
    </div>
  );
};

export default UbahPassword;
