import React from "react";
import RoomCard from "../components/reservasi ruangan/RoomCard";

const ReservasiRuangan = () => {
  const rooms = [
    {
      id: 1,
      title: "Blok A",
      image: "https://via.placeholder.com/300x200", // Ganti dengan link gambar asli
      users: [
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/45.jpg",
        "https://randomuser.me/api/portraits/women/47.jpg",
      ],
      blocks: 3,
      rooms: 9,
    },
    {
      id: 2,
      title: "Lab Komputer",
      image: "https://via.placeholder.com/300x200",
      users: [
        "https://randomuser.me/api/portraits/men/40.jpg",
        "https://randomuser.me/api/portraits/men/41.jpg",
        "https://randomuser.me/api/portraits/women/42.jpg",
      ],
      blocks: null,
      rooms: 3,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Reservasi Ruangan</h1>
      <div className="flex flex-wrap gap-6">
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            image={room.image}
            title={room.title}
            users={room.users}
            blocks={room.blocks}
            rooms={room.rooms}
          />
        ))}
      </div>
    </div>
  );
};

export default ReservasiRuangan;
