import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function KegiatanCard({ kegiatan, index, onClick }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white p-6 shadow rounded-md"
    >
      <div className="h-[200px] overflow-hidden rounded mb-3 flex items-center justify-center bg-gray-200">
        {kegiatan.gambar === 'none' ? (
          <span className="text-gray-600 font-semibold text-center px-2">
            {kegiatan.nama}
          </span>
        ) : (
          <img
            src={kegiatan.gambar}
            alt={kegiatan.nama}
            className="w-full h-full object-cover"
          />
        )}
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

export default KegiatanCard;
