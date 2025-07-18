import React, { useState } from 'react';
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Home() {

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
      nama: 'Posyandu Puskesmas',
      deskripsi: 'Ya posyandu ajah mau gimana lagi lek, yakan yak.',
      gambar: 'https://cdn.antaranews.com/cache/1200x800/2024/11/17/1000055476.jpg',
    },
    {
      nama: 'Kerja Bakti Bersih Desa',
      deskripsi: 'Minggu pagi warga membersihkan jalan dan saluran air.',
      gambar: '',
    },
    {
      nama: 'Pelatihan UMKM',
      deskripsi: 'Warga dilatih untuk membuat produk makanan ringan kemasan.',
      gambar: '',
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
          <h1 className="text-xl font-bold">Tegalurung</h1>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="#profil" className="hover:text-blue-600">Beranda</a></li>
            <li><a href="/Umkm" className="hover:text-blue-600">UMKM</a></li>
            <li><a href="/Kegiatan" className="hover:text-blue-600">Kegiatan</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen text-white flex items-center justify-center overflow-hidden" id="hero">
        {/* Gambar latar belakang */}
        <img
          src="https://cdn.antaranews.com/cache/1200x800/2024/11/17/1000055476.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Lapisan hijau transparan di atas gambar */}
        <div className="absolute inset-0 bg-green-600 opacity-40 z-10"></div>

        {/* Konten utama */}
        <div className="relative z-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Selamat Datang di Dusun Tegalurung
          </h2>
        </div>

        {/* Panah scroll */}
        <div className="absolute bottom-6 animate-bounce z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 
                .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 
                .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
            />
          </svg>
        </div>
      </section>



      {/* Profil Desa */}
      <section id="profil" className="max-w-5xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-4">Profil Desa</h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          Dusun Tegalurung terletak di Kecamatan Kemalang, Klaten, Jawa Tengah. Dikenal dengan udara sejuk lereng Merapi dan suasana pedesaan yang asri, dusun ini dihuni masyarakat ramah yang mayoritas bekerja sebagai petani, peternak, dan pelaku usaha mikro. Lahan pertanian yang subur, semangat gotong royong, serta kekayaan budaya dan alam menjadikan Tegalurung sebagai dusun dengan potensi pertanian dan wisata lokal yang menjanjikan. Nilai religius, kebersamaan, dan keterbukaan terhadap inovasi menjadi kekuatan utama masyarakatnya.
        </p>
        
        {/* Statistik Desa */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {[
            { angka: "35", label: "Total KK" },
            { angka: "150", label: "Total Penduduk" },
            { angka: "? km²", label: "Luas Wilayah" },
          ].map((stat, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-green-100 p-6 rounded-lg shadow-md"
              >
                <p className="text-xl font-bold text-green-800">{stat.angka}</p>
                <p className="text-gray-700">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>


      </section>

      {/* Markatilaras */}
      <section id="profil" className="max-w-5xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-4">Karawitan Markatilaras</h3>
        <img src="https://cdn.antaranews.com/cache/1200x800/2024/11/17/1000055476.jpg" alt="" />
        <p className="text-gray-700 leading-relaxed text-justify mt-6">
          Markatilaras adalah kelompok seni karawitan dari Desa Tegalurung yang melestarikan musik tradisional Jawa melalui gamelan dan tembang. Aktif dalam berbagai acara adat dan budaya, Markatilaras menjadi simbol kebanggaan desa dan sarana belajar bagi generasi muda.
        </p>

      </section>

      {/* UMKM */}
      <section id="umkm" className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-4">UMKM Tegalurung</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {umkmList.map((umkm, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,     
                threshold: 0.2,         
              });

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
                      <img
                        src={umkm.gambar}
                        alt={umkm.nama}
                        className="w-full h-full object-cover"
                      />
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
                      onClick={() => handleOpenModal(umkm)}
                      className="mt-3 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
              );
            })}


          </div>
          <div className='font-semibold text-black-600 mt-5'>
            <a href="/Umkm" className="hover:text-blue-600">Selengkapnya</a>
          </div>
        </div>
      </section>


      {/* Peta */}
      <section id="peta" className="max-w-5xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-4">Peta Desa</h3>
        <img src="https://cdn.antaranews.com/cache/1200x800/2024/11/17/1000055476.jpg" alt="" className='h-full w-full' />
      </section>

      {/* Kegiatan */}
      <section id="kegiatan" className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Kegiatan Tegalurung</h3>

          {/* Carousel Kegiatan */}
          <div ref={sliderRef} className="keen-slider">
            {kegiatanList.map((kegiatan, index) => (
              <div className="keen-slider__slide bg-white p-6 shadow rounded-md" key={index}>
                <div className="w-full h-[300px] overflow-hidden rounded mb-3">
                  {kegiatan.gambar ? (
                    <img
                      src={kegiatan.gambar}
                      alt={kegiatan.nama}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-500">
                      [Foto Kegiatan]
                    </div>
                  )}
                </div>



                <div className="font-semibold text-xl mb-2 text-green-600">{kegiatan.nama}</div>

                <p className="text-sm text-justify text-gray-700 mb-3">
                  {kegiatan.deskripsi}
                </p>

                <button
                  onClick={() => handleOpenKegiatanModal(kegiatan)}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Lihat Detail
                </button>

              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mb-4 mt-5">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
              </svg>
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
            </button>
          </div>

          <div className="font-semibold text-black-600 mt-6">
            <a href="/Umkm" className="hover:text-blue-600">Selengkapnya</a>
          </div>
        </div>
      </section>


      {/* Kontak */}
      <section id="kontak" className="bg-green-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-center">Kontak Desa</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold">Kepala Desa</h4>
              <p>Nama: Bapak Sugeng</p>
              <p>Telp: 0812-3456-7890</p>
            </div>
            <div>
              <h4 className="font-semibold">Kepala Dusun</h4>
              <p>Nama: Ibu Siti</p>
              <p>Telp: 0813-9876-5432</p>
            </div>
            <div>
              <h4 className="font-semibold">RT 11A</h4>
              <p>Nama: Pak Rahmat</p>
              <p>Telp: 0852-1234-5678</p>
            </div>
            <div>
              <h4 className="font-semibold">RT 11B</h4>
              <p>Nama: Bu Rina</p>
              <p>Telp: 0853-8765-4321</p>
            </div>
            <div>
              <h4 className="font-semibold">RT 12</h4>
              <p>Nama: Pak Dedi</p>
              <p>Telp: 0811-2233-4455</p>
            </div>
            <div>
              <h4 className="font-semibold">RT 13</h4>
              <p>Nama: Bu Yani</p>
              <p>Telp: 0822-3344-5566</p>
            </div>
          </div>

          <div className="mt-10 border-t border-white pt-6">
            <p>Email: desategalurung@gmail.com</p>
            <p>Telp Umum: 0857-0205-5011</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-black-500 py-4 bg-green-200">
        &copy; 2025 Desa Tegalurung. All rights reserved.
      </footer>

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
    
    {showKegiatanModal && selectedKegiatan && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="p-6 max-w-md w-full">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-5">{selectedKegiatan.nama}</h2>

            <div className="w-full h-40 rounded overflow-hidden mb-3">
              {selectedKegiatan.gambar ? (
                <img
                  src={selectedKegiatan.gambar}
                  alt={selectedKegiatan.nama}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-500">
                  [Foto Kegiatan]
                </div>
              )}
            </div>

            <p className="text-sm text-gray-700 mb-3 text-justify">
              {selectedKegiatan.deskripsi}
            </p>

            <button
              onClick={handleCloseKegiatanModal}
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
