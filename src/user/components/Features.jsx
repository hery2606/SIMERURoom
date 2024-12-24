import React from "react";
import { IoLocationSharp, IoCallSharp, IoMailSharp, IoTimeSharp } from "react-icons/io5"; // Import icons from react-icons
const Features = () => {
  return (
    <div className="bg-white py-12">
       <div
      className="h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}
    >
      <div className="text-center text-white bg-black bg-opacity-50 p-6 rounded">
        <h2 className="text-4xl font-bold mb-2">Selamat Datang di SIMERU</h2>
        <p className="text-lg mb-4">Pesan ruangan dengan mudah dan cepat!</p>
        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
          Booking Sekarang
        </button>
      </div>
    </div>
      {/* Section 1: Penjelasan Singkat */}
      <div className="container mx-auto flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 p-6">
          <h3 className="text-indigo-600 font-bold uppercase mb-2">SIMERU room</h3>
          <h2 className="text-3xl font-bold mb-4">Penjelasan Singkat</h2>
          <p className="text-gray-600 leading-relaxed">
            Aplikasi Reservasi Sarana Prasarana berbasis Website yang dibuat untuk Pengelolaan Sarana Prasarana di Universitas ahmad dahlan. Aplikasi ini juga sistem reservasi yang mengakomodir setiap kebutuhan sarana prasarana untuk penyelenggaraan suatu acara atau kegiatan seperti penggunaan ruang pertemuan, kelas, wisma, dan fasilitas lainnya. Sehingga Seluruh Mahasiswa dan Mahasiswi bisa menggunakan fasilitas sesuai jadwal yang ditetapkan.
          </p>
        </div>
        <div className="md:w-1/2 p-6 flex justify-center">
          <img
            src="./images/login-example.png" // Ganti dengan path gambar
            alt="Login Example"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section 2: Fitur Utama */}
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8 text-indigo-700">
          Pelayanan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
            <img
              src="/images/tempat-icon.png" // Ganti dengan path gambar
              alt="Tempat"
              className="mx-auto mb-4 w-32"
            />
            <h3 className="font-bold text-lg mb-2">Tempat</h3>
            <p className="text-gray-600">
              Kampus Ahmad Dahlan menyediakan berbagai tempat untuk mendukung Mahasiswa dan Mahasiswi untuk belajar.
            </p>
          </div>
          {/* Card 2 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
            <img
              src="/images/akses-icon.png" // Ganti dengan path gambar
              alt="Akses"
              className="mx-auto mb-4 w-32"
            />
            <h3 className="font-bold text-lg mb-2">Akses</h3>
            <p className="text-gray-600">
              Mahasiswa dan Mahasiswi dapat mengakses dengan mudah.
            </p>
          </div>
          {/* Card 3 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
            <img
              src="/images/waktu-icon.png" // Ganti dengan path gambar
              alt="Waktu"
              className="mx-auto mb-4 w-32"
            />
            <h3 className="font-bold text-lg mb-2">Waktu</h3>
            <p className="text-gray-600">
              Mahasiswa dan Mahasiswi mendapatkan respon cepat.
            </p>
          </div>
        </div>
      </div>
          <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-8 text-indigo-700">
          Kontak Kami
        </h2>

        {/* Contact Info Section */}
        <div className="flex flex-col md:flex-row mb-8">
          <div className="md:w-1/3 p-6">
            <div className="mb-6 flex items-center">
              <IoLocationSharp className="text-indigo-600 text-3xl mr-4" />
              <div>
                <h3 className="text-indigo-600 font-semibold text-xl mb-2">Alamat</h3>
                <p className="text-gray-600">
                  Media Information Center <br />
                  Jl. Margonda Raya 100, Depok <br />
                  West Java, INDONESIA - 16424
                </p>
              </div>
            </div>
            <div className="mb-6 flex items-center">
              <IoCallSharp className="text-indigo-600 text-3xl mr-4" />
              <div>
                <h3 className="text-indigo-600 font-semibold text-xl mb-2">Telfon Kami</h3>
                <p className="text-gray-600">+62-21-78881112</p>
              </div>
            </div>
            <div className="mb-6 flex items-center">
              <IoMailSharp className="text-indigo-600 text-3xl mr-4" />
              <div>
                <h3 className="text-indigo-600 font-semibold text-xl mb-2">Email Kami</h3>
                <p className="text-gray-600">mediacenter@gunadarma.ac.id</p>
              </div>
            </div>
            <div className="mb-6 flex items-center">
              <IoTimeSharp className="text-indigo-600 text-3xl mr-4" />
              <div>
                <h3 className="text-indigo-600 font-semibold text-xl mb-2">Jam Buka</h3>
                <p className="text-gray-600">Senin - Sabtu: 9:00 AM - 05:00 PM</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="md:w-2/3 p-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.5814269879843!2d110.38116760870672!3d-7.834046442977162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5701a2ae1c23%3A0x173dbeeddc56d9e!2sUniversitas%20Ahmad%20Dahlan%20-%20Kampus%204!5e0!3m2!1sid!2sid!4v1734416471898!5m2!1sid!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Features;
