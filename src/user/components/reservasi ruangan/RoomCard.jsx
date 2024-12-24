import React from "react";

const RoomCard = ({ image, title, users, blocks, rooms }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-72">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex mt-2 space-x-1">
          {users.map((user, index) => (
            <img
              key={index}
              src={user}
              alt="User Avatar"
              className="w-8 h-8 rounded-full border-2 border-white -ml-2"
            />
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
          <p>{blocks ? `${blocks} Blok` : "Tidak memiliki Blok"}</p>
          <p>{rooms} Ruangan</p>
        </div>
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Lihat
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
