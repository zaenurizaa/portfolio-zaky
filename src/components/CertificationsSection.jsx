import React from 'react';
import { motion } from 'framer-motion';

export default function CertificationsSection({ fadeUpVariant, staggerContainer, itemVariant }) {
  return (
    <section className="flex flex-col gap-12" id="certifications">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="flex justify-between items-end border-b-[4px] border-[#111111] pb-6"
      >
        <h2 className="text-[36px] md:text-[48px] font-black uppercase tracking-tight">Certifications & Academic</h2>
      </motion.div>

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {[
          { title: "Internal Staff HIMASI", img: "/images/Sertif_INter.webp", date: "Jan 2026" },
          { title: "Database Management Teaching Assistant", img: "/images/Sertifikat_Asisten_AHMAD_ZAENURI_ZAFA_MUZAKY_Sistem_Manajemen_Basis_Data_1.webp", date: "Aug 2026" },
          { title: "PDD Member PIMOPS", img: "/images/Pdd_Pimpos.webp", date: "Jan 2026" }
        ].map((cert, idx) => (
          <motion.div
            variants={itemVariant}
            key={idx}
            className="bg-[#ffffff] border-[3px] border-[#111111] rounded-2xl overflow-hidden flex flex-col aspect-[3/4] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#111111] transition-all duration-300 cursor-pointer neubrutalism-shadow"
          >
            <div className="flex-1 border-b-[3px] border-[#111111] overflow-hidden bg-[#e5e2e1] p-2 flex items-center justify-center">
              <img src={cert.img} alt={cert.title} className="w-full h-full object-contain drop-shadow-md" />
            </div>
            <div className="p-5 flex flex-col justify-center shrink-0 bg-[#ffffff] h-28 border-t-[3px] border-[#111111]">
              <h3 className="text-[16px] font-black uppercase leading-tight line-clamp-2">{cert.title}</h3>
              <p className="font-bold text-[13px] text-gray-500 mt-2">Issued: {cert.date}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
