import React, { useState } from 'react';
import UMKMCard from './UMKMCard';

function Umkm() {
  const umkmList = [
    {
      nama: 'Nadira Cell',
      alamat: 'Jl. Pasar Butuh Km 01 Tegalurung Rt 11A/06 Bawukan Kemalang Klaten',
      noTelp: '-',
      gambar: '/image/nadiracell.jpg',
      sosmed: {
        instagram: '-',
        email: '-'
      }
    },
    {
      nama: 'Warung Soto Mbok Atun',
      alamat: 'Tegalurung Tengah, Bawukan, Kemalang, Klaten',
      noTelp: '85848111426',
      gambar: '/image/warungsotombakatun.jpg',
      sosmed: {
        instagram: '-',
        email: '-'
      }
    },
    {
      nama: 'Cap jae bu wariah',
      alamat: 'Tegalurung Tengah, Bawukan, Kemalang, Klaten',
      noTelp: '8578398625',
      gambar: '/image/nadiracell.jpg',
      sosmed: {
        instagram: '',
        email: '-'
      }
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedUMKM, setSelectedUMKM] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUMKM = umkmList.filter((umkm) =>
    umkm.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
    umkm.alamat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenModal = (umkm) => {
    setSelectedUMKM(umkm);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUMKM(null);
  };

  return (
    <div className="font-sans">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Tegalurung</h1>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="/" className="hover:text-blue-600">Beranda</a></li>
            <li><a href="#umkm" className="hover:text-blue-600">UMKM</a></li>
            <li><a href="/Kegiatan" className="hover:text-blue-600">Kegiatan</a></li>
          </ul>
        </div>
      </nav>

      {/* Search */}
      <section className="bg-gray-100 pt-[90px] pb-0">
        <div className="flex justify-center">
          <form
            className="w-full md:w-1/3 px-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Cari UMKM..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <div className='pr-3'>
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
            >
              Cari
            </button>
          </div>
        </div>
      </section>

      {/* UMKM */}
      <section id="umkm" className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">UMKM Tegalurung</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredUMKM.map((umkm, index) => (
              <UMKMCard
                key={index}
                umkm={umkm}
                index={index}
                onOpenModal={handleOpenModal}
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
      {showModal && selectedUMKM && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="p-6 max-w-md w-full">
            <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
              <h2 className="text-xl font-bold mb-5">{selectedUMKM.nama}</h2>
              <div className="w-full h-40 rounded overflow-hidden mb-3">
                {selectedUMKM.gambar ? (
                    <img
                    src={selectedUMKM.gambar}
                    alt={selectedUMKM.nama}
                    className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-500">
                    [Foto UMKM]
                    </div>
                )}
              </div>
              <p className="text-sm text-gray-700 mb-1">
                <strong>No Telp:</strong> 0{selectedUMKM.noTelp}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Alamat:</strong> {selectedUMKM.alamat}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Instagram:</strong> {selectedUMKM.sosmed.instagram}
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Gmail:</strong> {selectedUMKM.sosmed.email}
              </p>
              <div className='flex justify-between'>
                <button
                  onClick={handleCloseModal}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Tutup
                </button>
                <a
                  href={`https://wa.me/62${selectedUMKM.noTelp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Hubungi
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Umkm;
