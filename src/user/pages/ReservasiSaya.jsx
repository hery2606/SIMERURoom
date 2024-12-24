import React from "react";

const ReservasiSaya = () => {
  const reservasiData = [
    { no: 1, ruangan: "Lab komputer 1", mulai: "2024-01-24", selesai: "2024-01-25", status: "PENDING", aksi: "BATALKAN" },
    { no: 2, ruangan: "Lab komputer 2", mulai: "2024-01-25", selesai: "2024-01-26", status: "DIBATALKAN", aksi: "-" },
    { no: 3, ruangan: "Lab komputer 1", mulai: "2024-01-08", selesai: "2024-01-09", status: "DISETUJUI", aksi: "DIKEMBALIKAN" },
    { no: 4, ruangan: "G312", mulai: "2024-01-08", selesai: "2024-01-09", status: "DISETUJUI", aksi: "DIKEMBALIKAN" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-28">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Reservasi Saya</h1>

      {/* Statistik */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="p-4 bg-white rounded shadow">
          <p className="text-gray-500">Reservasi</p>
          <h2 className="text-xl font-bold">11</h2>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <p className="text-gray-500">Disetujui</p>
          <h2 className="text-xl font-bold text-green-500">8</h2>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <p className="text-gray-500">Tidak Disetujui</p>
          <h2 className="text-xl font-bold text-red-500">1</h2>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <p className="text-gray-500">Dibatalkan</p>
          <h2 className="text-xl font-bold text-red-400">1</h2>
        </div>
      </div>

      {/* Tabel */}
      <div className="bg-white rounded-lg shadow p-4">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2 text-left">NO</th>
              <th className="border-b p-2 text-left">RUANGAN</th>
              <th className="border-b p-2 text-left">TANGGAL MULAI</th>
              <th className="border-b p-2 text-left">TANGGAL SELESAI</th>
              <th className="border-b p-2 text-left">STATUS</th>
              <th className="border-b p-2 text-left">AKSI</th>
            </tr>
          </thead>
          <tbody>
            {reservasiData.map((item) => (
              <tr key={item.no}>
                <td className="border-b p-2">{item.no}</td>
                <td className="border-b p-2">{item.ruangan}</td>
                <td className="border-b p-2">{item.mulai}</td>
                <td className="border-b p-2">{item.selesai}</td>
                <td className="border-b p-2">
                  <span
                    className={`px-2 py-1 rounded ${
                      item.status === "PENDING"
                        ? "bg-yellow-200 text-yellow-800"
                        : item.status === "DIBATALKAN"
                        ? "bg-red-200 text-red-800"
                        : "bg-green-200 text-green-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="border-b p-2">
                  {item.aksi === "BATALKAN" ? (
                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                      {item.aksi}
                    </button>
                  ) : (
                    <span className="text-gray-500">{item.aksi}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservasiSaya;
