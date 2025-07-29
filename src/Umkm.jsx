import React, { useState } from 'react';
import UMKMCard from './UMKMCard';

function Umkm() {
  const umkmList = [
    {
      nama: 'Nadira Cell',
      alamat: 'JL. Pasar Butuh KM 01 Tegalurung RT 11A/06 Bawukan Kemalang Klaten',
      noTelp: '-',
      gambar: '/image/nadiracell.jpg',
      lokasi: 'https://maps.app.goo.gl/UBznNrNM9HNtJqHR8',
    },
    {
      nama: 'Warung Soto Mbok Atun',
      alamat: 'Tegalurung Tengah, Bawukan, Kemalang, Klaten RT 11b',
      noTelp: '85848111426',
      gambar: '/image/warungsotombakatun.jpg',
      lokasi: 'https://maps.app.goo.gl/svSDi9gvqsUnbrLo6',
    },
    {
      nama: 'Cap jae bu wariah',
      alamat: 'Tegalurung Tengah, Bawukan, Kemalang, Klaten RT 11b',
      noTelp: '8578398625',
      gambar: '/image/capjaebuwariah.jpg',
      lokasi: 'https://maps.app.goo.gl/ZGpXVHixrHmgt1mY8',
    },
    {
      nama: 'Dirin Motor',
      alamat: 'Tegalurung bawukan, kemalang, klaten, RT 11a, RW 06',
      noTelp: '85878226177',
      gambar: '/image/dirinmotor.jpg',
      lokasi: 'https://maps.app.goo.gl/p57HcWUEBYN3NuRg7',
    },
    {
      nama: 'Sembako Bu Suprih',
      alamat: 'Tegalurung bawukan, kemalang, klaten, RT 11a, RW 06',
      noTelp: '85878226177',
      gambar: '/image/sembakobusuprih.jpg',
      lokasi: 'https://maps.app.goo.gl/xUc2T1erd1hgyBbB7',
    },
    {
      nama: 'Pak Gun Car Wash',
      alamat: 'Tegalurung Bawukan, Kemalang, Klaten, RT 11a, RW 06',
      noTelp: '82134850931',
      gambar: '/image/pakguncarwash.jpg',
      lokasi: '',
    },
    {
      nama: 'Kelontong Pak Gun',
      alamat: 'Tegalurung Bawukan, Kemalang, Klaten, RT 11a, RW 06',
      noTelp: '82134850931',
      gambar: '/image/pakgunkelontong.jpg',
      lokasi: 'https://maps.app.goo.gl/gc1JF8WTvwZXrm2J8',
    },
    {
      nama: 'Laundry Pak Gun',
      alamat: 'Tegalurung Bawukan, Kemalang, Klaten, RT 11a, RW 06',
      noTelp: '82134850931',
      gambar: '/image/pakgunlaundry.jpg',
      lokasi: 'https://maps.app.goo.gl/oNCwpDuWQJ79LAvu8',
    },
    {
      nama: 'Duren Merapi Mas Susanto',
      alamat: 'Tegalurung bawukan, kemalang, klaten, RT 13, RW 07',
      noTelp: '81215311920',
      gambar: '/image/durenmerapimassusanto.jpg',
      lokasi: 'https://maps.app.goo.gl/rPetaStVG2g2uziCA',
    },
    {
      nama: 'Gula Jawa Ibu Ngadirah',
      alamat: 'Tegalurung bawukan, kemalang, klaten, RT 13, RW 07',
      noTelp: '81215311920',
      gambar: '/image/gulajawabungadirah.jpg',
      lokasi: 'https://maps.app.goo.gl/rPetaStVG2g2uziCA',
    },
    {
      nama: 'Supri Batako',
      alamat: 'Tegalurung bawukan, kemalang, klaten, rt 11a, rw 06',
      noTelp: '-',
      gambar: '/image/supribatako.jpg',
      lokasi: '',
    },
    {
      nama: 'Pemotongan Ayam Satiyem',
      alamat: 'Tegalurung bawukan, kemalang, klaten, rt 11a, rw 06',
      noTelp: '85876233332',
      gambar: '/image/pemotonganayamsatiyem.jpg',
      lokasi: 'https://maps.app.goo.gl/crm9rJkW2Kn6fAqP6',
    },
    {
      nama: 'Abadi Motor',
      alamat: 'Jalan Kepurun - Panggang KM 02, Tegalurung 12/06, Bawukan, Kemalang, Klaten',
      noTelp: '85879301770',
      gambar: '/image/abadimotor.jpg',
      lokasi: 'https://maps.app.goo.gl/dJ4vFmmUVf6VZwB98',
    },
    {
      nama: 'Kelapa Pak Reka',
      alamat: 'Tegalurung bawukan, kemalang, klaten, rt 11a, rw 06',
      noTelp: '85799156132',
      gambar: '/image/kelapapakreka.jpg',
      lokasi: 'https://maps.app.goo.gl/5Um5GzXShj3BSm3e9',
    },
    {
      nama: 'Es Degan KSM',
      alamat: 'Tegalurung bawukan, kemalang, klaten, rt 11b, rw 06',
      noTelp: '85150718236',
      gambar: '/image/esdeganksm.jpg',
      lokasi: '',
    },
    {
      nama: 'Pakan Ayam Nur Arifin',
      alamat: 'Tegalurung bawukan, kemalang, klaten, rt 11b, rw 06',
      noTelp: '85729986908',
      gambar: '/image/pakanayamnurarifin.jpg',
      lokasi: 'https://maps.app.goo.gl/ata1Zr6hFS3AN4mG6',
    },
    {
      nama: 'Gula Jawa Bu Suyat',
      alamat: 'Tegalurung bawukan, kemalang, klaten, rt 12, rw 06',
      noTelp: '82137884719',
      gambar: '/image/gulajawabusuyat.jpg',
      lokasi: '',
    },
    {
      nama: 'Gula Jawa Bu Bariyo',
      alamat: 'Tegalurung bawukan, kemalang, klaten, rt 12, rw 06',
      noTelp: '82137884719',
      gambar: '/image/gulajawabubariyo.jpg',
      lokasi: '',
    },
    {
      nama: 'Gula Jawa Bu Temu',//pakjono
      alamat: 'Tegalurung bawukan, kemalang, klaten, rt 12, rw 06',
      noTelp: '-',
      gambar: '/image/GulaJawaBuTemu.jpg',
      lokasi: '',
    },
    {
      nama: 'Gula Jawa Bu Wartini',//Ngarepe pak jono
      alamat: 'Tegalurung bawukan, kemalang, klaten, rt 12, rw 06',
      noTelp: '-',
      gambar: '/image/GulaJawaBuWartini.jpg',
      lokasi: '',
    },
    {
      nama: 'Cap Jae Bu Mursih',
      alamat: 'Tegalurung bawukan, kemalang, klaten, rt 13, rw 06',
      noTelp: '-',
      gambar: '/image/capjaebumursih.jpg',
      lokasi: '',
    },
    {
      nama: 'Cap Jae Bu Surya',
      alamat: 'Tegalurung bawukan, kemalang, klaten, rt 13, rw 06',
      noTelp: '-',
      gambar: '/image/capjaebursuryo.jpg',
      lokasi: '',
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
          <h3 className="text-2xl font-bold mb-6 text-center">Kontak Dusun</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold">Kepala Dusun</h4>
              <p>Nama: Bapak Gimin</p>
              <p>Telp: -</p>
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
            <p>Email: -</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-black-500 py-4 bg-green-200">
        &copy; 2025 Dusun Tegalurung. All rights reserved.
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
              <a
              href={selectedUMKM?.lokasi}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 underline underline-offset-2 transition-colors duration-200"
              >
              Buka Maps
              </a>
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