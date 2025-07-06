import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function UMKMCard({ umkm, index, onOpenModal }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white p-4 shadow rounded"
    >
      <div className="font-semibold text-lg mb-2">{umkm.nama}</div>
      <div className="bg-gray-200 h-40 px-4 flex items-center justify-center rounded">
        <span className="text-gray-500">[Foto UMKM]</span>
      </div>
      <div className="bg-white-200 px-1 py-2 rounded mt-3 text-black text-sm space-y-3">
        <div>
          <p>Alamat :</p>
          <p className="text-justify">{umkm.alamat}</p>
        </div>
        <button
          onClick={() => onOpenModal(umkm)}
          className="mt-3 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          Lihat Detail
        </button>
      </div>
    </motion.div>
  );
}

export default UMKMCard;
