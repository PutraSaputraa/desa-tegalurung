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
      <div className="h-[200px] overflow-hidden rounded mb-3">
        <img
          src={kegiatan.gambar}
          alt={kegiatan.nama}
          className="w-full h-full object-cover"
        />
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
      nama: 'Gotong Royong RT 11a',
      deskripsi: 'Gotong Royong Minggu Pagi Jam 05.00',
      gambar: '/image/kerjabakti11a.jpg',
    },
    {
      nama: 'Arisan ibu ibu RT 11a',
      deskripsi: 'Arisan ibu ibu warga RT 11a yang dilaksanakan setiap hari minggu',
      gambar: 'Arisan Ibu Ibu RT 11a',
    },
    {
      nama: 'Pertemuan Pemuda RT 11a',
      deskripsi: 'Pertemuan pemuda warga RT 11a yang dilaksanakan setiap malam minggu 2 kali seminggu',
      gambar: 'Pertemuan Pemuda RT 11a',
    },
    {
      nama: 'Pertemuan bapak bapak RT 11a',
      deskripsi: 'Pertemuan bapak bapak warga RT 11a yang dilaksanakan setiap malam senin kliwon',
      gambar: 'Pertemuan bapak bapak RT 11a',
    },
    {
      nama: 'Bersih Bersih Makam',
      deskripsi: 'Bersih Bersih Makam setiap hari minggu legi seluruh warga tegalurung',
      gambar: '/image/bersihbersihmakam.jpg',
    },
    {
      nama: 'Pertemuan RT 11B + Nyapu Jalan',
      deskripsi: 'Bersih bersih jalan disusul dengan pertemuan jam 15.00.',
      gambar: 'Pertemuan RT 11B + Nyapu Jalan',
    },
    {
      nama: 'Pertemuan bapak bapak RT 11B',
      deskripsi: 'Pertemuan bapak bapak yang dilaksanakan setiap hari minggu wage.',
      gambar: 'Pertemuan bapak bapak RT 11B',
    },
    {
      nama: 'Pertemuan + nyapu jalan RT 12',
      deskripsi: 'Bersih bersih jalan disusul dengan pertemuan jam 14.00.',
      gambar: '/image/rapatibuiburt12.jpg',
    },
    {
      nama: 'Yasinan ibu ibu Tegalurung',
      deskripsi: 'Yasinan ibu ibu setiap malam jumat di tegalurung.',
      gambar: '/image/yasinan.jpg',
    },
    {
      nama: 'Pertemuan + nyapu jalan RT 13',
      deskripsi: 'Bersih bersih jalan disusul dengan pertemuan jam 14.00.',
      gambar: 'Pertemuan + nyapu jalan RT 13',
    },
    {
      nama: 'Pertemuan Pemuda RT 13',
      deskripsi: 'Pertemuan pemuda setiap malam sabtu 2 minggu sekali.',
      gambar: '/image/pertemuanpemudart13.jpg',
    },
    {
      nama: 'Pertemuan Bapak bapak RT 13',
      deskripsi: 'Pertemuan bapak bapak yang dilaksanakan setiap malam rabu legi.',
      gambar: '/image/rapatrt13.jpg',
    },
    {
      nama: 'Arisan Bapak bapak RT 13',
      deskripsi: 'Arisan bapak bapak yang dilaksanakan setiap malam jumat pahing.',
      gambar: '/image/rapatrt13.jpg',
    },
    {
      nama: 'TPA Tegalurung',
      deskripsi: 'Kegiatan TPA untuk anak anak warga tegalurung yang dilaksanakan di masjid darusalam setiap hari senin, jumat, dan sabtu.',
      gambar: '/image/tpategalurung.jpg',
    },
    {
      nama: 'Senam Aerobik Tegalurung',
      deskripsi: 'Senam aerobik yang dilaksanakan setiap hari Jumat sore.',
      gambar: '/image/senamaerobik.jpg',
    },
    {
      nama: 'Senam Lansia Tegalurung',
      deskripsi: 'Senam lansia yang dilaksanakan setiap hari minggu pagi.',
      gambar: '/image/senamlansiategalurung.jpg',
    },
    {
      nama: 'Pertemuan Pemuda Pemudi RT 11b',
      deskripsi: 'Pertemuan pemuda pemudi RT 11b setiap malam minggu satu bulan 2 kali.',
      gambar: 'Pertemuan Pemuda Pemudi RT 11b',
    },
    {
      nama: 'Pertemuan Pemuda RT 12',
      deskripsi: 'Pertemuan Pemuda Setiap bulan di Minggu Pertama.',
      gambar: 'Pertemuan Pemuda RT 12',
    },
    {
      nama: 'Pertemuan bapak bapak RT 12',
      deskripsi: 'Pertemuan bapak bapak rt 12 Setiap bulan di sabtu minggu terakhir.',
      gambar: '/image/pertemuanrt12.jpg',
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
          <h3 className="text-2xl font-bold mb-6 text-center">Kontak Dusun</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold">Kepala Dusun</h4>
              <p>Nama: Bapak Gimin</p>
              <p>Telp: 082198679203</p>
            </div>
            <div>
              <h4 className="font-semibold">RT 11A</h4>
              <p>Nama: Pak Tuwarji</p>
              <p>Telp: 085842293243</p>
            </div>
            <div>
              <h4 className="font-semibold">RT 11B</h4>
              <p>Nama: Pak Gandung</p>
              <p>Telp: 085848111429</p>
            </div>
            <div>
              <h4 className="font-semibold">RT 12</h4>
              <p>Nama: Pak Tuwarji</p>
              <p>Telp: 085124601966</p>
            </div>
            <div>
              <h4 className="font-semibold">RT 13</h4>
              <p>Nama: Pak Sarno</p>
              <p>Telp: 085926233515</p>
            </div>
          </div>

          <div className="mt-10 border-t border-white pt-6">
            <p>Email: kkntegalurung297@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-black-500 py-4 bg-green-200">
        &copy; 2025 Dusun Tegalurung. All rights reserved.
      </footer>

      {/* Modal */}
      {showModal && selectedKegiatan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
            <h2 className="text-xl font-bold mb-5">{selectedKegiatan.nama}</h2>
            <div className="h-[200px] overflow-hidden rounded mb-3">
              <img
                src={selectedKegiatan.gambar}
                alt={selectedKegiatan.nama}
                className="w-full h-full object-cover"
              />
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
