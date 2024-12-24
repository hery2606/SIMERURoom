import React from "react";

const LabKomputerDetail = () => {
  const labDetails = [
    {
      id: 1,
      title: "Lab Komputer 1",
      capacity: "MAX 15 ORANG",
      status: "TERSEDIA",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Lab Komputer 2",
      capacity: "MAX 15 ORANG",
      status: "TERSEDIA",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Lab Komputer 3",
      capacity: "MAX 20 ORANG",
      status: "TERSEDIA",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Lab Komputer
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {labDetails.map((lab) => (
          <div
            key={lab.id}
            className="bg-white rounded-lg shadow-md overflow-hidden w-72"
          >
            <img
              src={lab.image}
              alt={lab.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{lab.title}</h3>
              <p className="text-green-500 font-semibold mt-2">
                {lab.status}
              </p>
              <p className="text-gray-600 text-sm">{lab.capacity}</p>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                + Tambah ke Keranjang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabKomputerDetail;
