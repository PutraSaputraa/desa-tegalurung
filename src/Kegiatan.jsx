import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Komponen KegiatanCard dengan animasi scroll
function KegiatanCard({ kegiatan, index, onClick }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white p-6 shadow rounded-md"
    >
      <div className="bg-gray-200 h-[200px] flex items-center justify-center rounded mb-3">
        <span className="text-gray-500">{kegiatan.gambar}</span>
      </div>
      <div className="font-semibold text-xl mb-2 text-green-600">{kegiatan.nama}</div>
      <p className="text-sm text-justify text-gray-700 mb-3">{kegiatan.deskripsi}</p>
      <button
        onClick={onClick}
        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
      >
        Lihat Detail
      </button>
    </motion.div>
  );
}

function Kegiatan() {
  const kegiatanList = [
    {
      nama: 'Posyandu Puskesmas',
      deskripsi: 'Ya posyandu ajah mau gimana lagi lek, yakan yak.',
      gambar: '[Foto Kegiatan]',
    },
    {
      nama: 'Kerja Bakti Bersih Desa',
      deskripsi: 'Minggu pagi warga membersihkan jalan dan saluran air.',
      gambar: '[Foto Kegiatan]',
    },
    {
      nama: 'Pelatihan Kegiatan',
      deskripsi: 'Warga dilatih untuk membuat produk makanan ringan kemasan.',
      gambar: '[Foto Kegiatan]',
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedKegiatan, setSelectedKegiatan] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenModal = (kegiatan) => {
    setSelectedKegiatan(kegiatan);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedKegiatan(null);
  };

  const filteredKegiatan = kegiatanList.filter((kegiatan) =>
    kegiatan.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-sans">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Tegalurung</h1>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="/" className="hover:text-blue-600">Beranda</a></li>
            <li><a href="/Umkm" className="hover:text-blue-600">UMKM</a></li>
            <li><a href="#kegiatan" className="hover:text-blue-600">Kegiatan</a></li>
          </ul>
        </div>
      </nav>

      {/* Search Bar */}
      <section className="bg-gray-100 pt-[90px] pb-0">
        <div className="flex justify-center items-center gap-2 px-4">
          <input
            type="text"
            placeholder="Cari Kegiatan..."
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
            >
              Cari
            </button>
        </div>
      </section>

      {/* Kegiatan */}
      <section id="kegiatan" className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Kegiatan Tegalurung</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredKegiatan.map((kegiatan, index) => (
              <KegiatanCard
                key={index}
                kegiatan={kegiatan}
                index={index}
                onClick={() => handleOpenModal(kegiatan)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="bg-green-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">Kontak Desa</h3>
          <p>Email: desategalurung@gmail.com</p>
          <p>Telp: 0812-xxxx-xxxx</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-black-500 py-4 bg-green-200">
        &copy; 2025 Desa Tegalurung. All rights reserved.
      </footer>

      {/* Modal */}
      {showModal && selectedKegiatan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
            <h2 className="text-xl font-bold mb-5">{selectedKegiatan.nama}</h2>
            <div className="bg-gray-200 h-40 flex items-center justify-center rounded mb-5">
              <span className="text-gray-500">{selectedKegiatan.gambar}</span>
            </div>
            <p className="text-sm text-gray-700 mb-3">{selectedKegiatan.deskripsi}</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Kegiatan;
