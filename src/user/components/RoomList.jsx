import React from "react";

const rooms = [
  { id: 1, name: "Ruang A-101", capacity: "50 Orang", facility: "AC, Proyektor" },
  { id: 2, name: "Ruang B-203", capacity: "30 Orang", facility: "AC" },
  { id: 3, name: "Ruang C-301", capacity: "20 Orang", facility: "Proyektor" },
];

const RoomList = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Daftar Ruangan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold text-lg">{room.name}</h3>
            <p className="text-sm text-gray-600">Kapasitas: {room.capacity}</p>
            <p className="text-sm text-gray-600">Fasilitas: {room.facility}</p>
            <button className="text-blue-600 mt-2 hover:underline">Lihat Detail</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
