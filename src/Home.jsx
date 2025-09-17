import React, { useState } from 'react';
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Home() {

  const speakText = (text) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel(); // biar tidak numpuk
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "id-ID"; // Bahasa Indonesia
      window.speechSynthesis.speak(utterance);
    }
  };

  const umkmList = [
    {
      nama: 'Nadira Cell',
      alamat: 'JL. Pasar Butuh KM 01 Tegalurung RT 11A/06 Bawukan Kemalang Klaten',
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
      gambar: '/image/capjaebuwariah.jpg',
      sosmed: {
        instagram: '',
        email: '-'
      }
    },
  ];

  const kegiatanList = [
    {
      nama: 'Bersih Bersih Makam',
      deskripsi: 'Bersih Bersih Makam setiap hari minggu legi seluruh warga tegalurung',
      gambar: '/image/bersihbersihmakam.jpg',
    },
    {
      nama: 'Yasinan ibu ibu Tegalurung',
      deskripsi: 'Yasinan ibu ibu setiap malam jumat di tegalurung.',
      gambar: '/image/yasinan.jpg',
    },
    {
      nama: 'TPA Tegalurung',
      deskripsi: 'Kegiatan TPA untuk anak anak warga tegalurung yang dilaksanakan di masjid darusalam setiap hari senin, jumat, dan sabtu.',
      gambar: '/image/tpategalurung.jpg',
    },
  ];


  const [showModal, setShowModal] = useState(false);
  const [selectedUMKM, setSelectedUMKM] = useState(null);

  const handleOpenModal = (umkm) => {
    setSelectedUMKM(umkm);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUMKM(null);
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  const [selectedKegiatan, setSelectedKegiatan] = useState(null);
  const [showKegiatanModal, setShowKegiatanModal] = useState(false);

  const handleOpenKegiatanModal = (kegiatan) => {
    setSelectedKegiatan(kegiatan);
    setShowKegiatanModal(true);
  };

  const handleCloseKegiatanModal = () => {
    setShowKegiatanModal(false);
    setSelectedKegiatan(null);
  };


  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-green-600 shadow-md z-50 text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 
            className="text-xl font-bold cursor-pointer" 
            onClick={() => speakText("Tegalurung")}
          >
            Tegalurung
          </h1>
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <a 
                href="#profil" 
                className="hover:text-blue-600"
                onClick={() => speakText("Beranda")}
              >
                Beranda
              </a>
            </li>
            <li>
              <a 
                href="/Umkm" 
                className="hover:text-blue-600"
                onClick={() => speakText("UMKM")}
              >
                UMKM
              </a>
            </li>
            <li>
              <a 
                href="/Kegiatan" 
                className="hover:text-blue-600"
                onClick={() => speakText("Kegiatan")}
              >
                Kegiatan
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ... hero, profil, markatilaras, dll tidak berubah */}

      {/* UMKM */}
      <section id="umkm" className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">UMKM Tegalurung</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {umkmList.map((umkm, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

              return (
                <motion.div
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-4 shadow rounded"
                >
                  <div className="font-semibold text-lg mb-2">{umkm.nama}</div>
                  <div className="w-full h-[200px] overflow-hidden rounded mb-3">
                    {umkm.gambar ? (
                      <img src={umkm.gambar} alt={umkm.nama} className="w-full h-full object-cover" />
                    ) : (
                      <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-500">
                        [Foto UMKM]
                      </div>
                    )}
                  </div>

                  <div className="bg-white-200 px-1 py-2 rounded mt-3 text-black text-sm space-y-3">
                    <div>
                      <p>Alamat :</p>
                      <p className='text-justify'>{umkm.alamat}</p>
                    </div>
                    <button
                      onClick={() => {
                        speakText("Lihat detail " + umkm.nama);
                        handleOpenModal(umkm);
                      }}
                      className="mt-3 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kegiatan */}
      <section id="kegiatan" className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Kegiatan Tegalurung</h3>
          <div ref={sliderRef} className="keen-slider">
            {kegiatanList.map((kegiatan, index) => (
              <div className="keen-slider__slide bg-white p-6 shadow rounded-md" key={index}>
                {/* ... gambar */}
                <div className="font-semibold text-xl mb-2 text-green-600">{kegiatan.nama}</div>
                <p className="text-sm text-justify text-gray-700 mb-3">{kegiatan.deskripsi}</p>
                <button
                  onClick={() => {
                    speakText("Lihat detail " + kegiatan.nama);
                    handleOpenKegiatanModal(kegiatan);
                  }}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Lihat Detail
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal UMKM */}
      {showModal && selectedUMKM && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="p-6 max-w-md w-full">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-5">{selectedUMKM.nama}</h2>
              {/* ... isi modal */}
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    speakText("Tutup");
                    handleCloseModal();
                  }}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Tutup
                </button>
                <a
                  href={`https://wa.me/62${selectedUMKM.noTelp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => speakText("Hubungi " + selectedUMKM.nama)}
                  className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Hubungi
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Kegiatan */}
      {showKegiatanModal && selectedKegiatan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="p-6 max-w-md w-full">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-5">{selectedKegiatan.nama}</h2>
              {/* ... isi modal */}
              <button
                onClick={() => {
                  speakText("Tutup");
                  handleCloseKegiatanModal();
                }}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
