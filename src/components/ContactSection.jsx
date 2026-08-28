import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection({ fadeUpVariant, staggerContainer }) {
  return (
    <section className="flex flex-col gap-12 bg-[#ffeb3b] p-8 md:p-16 rounded-[2rem] border-[3px] border-[#111111] neubrutalism-shadow" id="contact">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-[4px] border-[#111111] pb-6 gap-4"
      >
        <h2 className="text-[36px] md:text-[56px] font-black text-[#111111] uppercase tracking-tight leading-none">Connect<br />With Me!</h2>
        <div className="font-bold text-[16px] bg-white border-[3px] border-[#111111] px-4 py-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">
          Open for work
        </div>
      </motion.div>

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <a className="flex flex-col items-center text-center gap-4 bg-[#ffffff] p-8 border-[3px] border-[#111111] rounded-2xl neubrutalism-shadow neubrutalism-shadow-hover transition-all text-[#111111] group" href="tel:085708911314">
          <span className="material-symbols-outlined text-5xl bg-[#f2f2f2] p-4 rounded-full border-[3px] border-[#111111] group-hover:scale-110 transition-transform">phone_iphone</span>
          <div>
            <div className="font-bold text-[14px] uppercase text-gray-500 mb-2">WhatsApp / Phone</div>
            <div className="text-[18px] font-black">0857-0891-1314</div>
          </div>
        </a>

        <a className="flex flex-col items-center text-center gap-4 bg-[#ffffff] p-8 border-[3px] border-[#111111] rounded-2xl neubrutalism-shadow neubrutalism-shadow-hover transition-all text-[#111111] group" href="mailto:amuzzaky8@gmail.com">
          <span className="material-symbols-outlined text-5xl bg-[#ffdad6] p-4 rounded-full border-[3px] border-[#111111] group-hover:scale-110 transition-transform">mail</span>
          <div className="w-full">
            <div className="font-bold text-[14px] uppercase text-gray-500 mb-2">Email</div>
            <div className="text-[18px] font-black break-all">amuzzaky8@gmail.com</div>
          </div>
        </a>

        <a className="flex flex-col items-center text-center gap-4 bg-[#ffffff] p-8 border-[3px] border-[#111111] rounded-2xl neubrutalism-shadow neubrutalism-shadow-hover transition-all text-[#111111] group" href="https://www.linkedin.com/in/ahmad-zaenuri-zafa-muzaky-8b347630a/" target="_blank" rel="noopener noreferrer">
          <span className="material-symbols-outlined text-5xl bg-[#d1e4ff] p-4 rounded-full border-[3px] border-[#111111] group-hover:scale-110 transition-transform">link</span>
          <div>
            <div className="font-bold text-[14px] uppercase text-gray-500 mb-2">LinkedIn</div>
            <div className="text-[18px] font-black">Ahmad Zaenuri</div>
          </div>
        </a>

        <a className="flex flex-col items-center text-center gap-4 bg-[#ffffff] p-8 border-[3px] border-[#111111] rounded-2xl neubrutalism-shadow neubrutalism-shadow-hover transition-all text-[#111111] group" href="https://www.instagram.com/zaenafky/" target="_blank" rel="noopener noreferrer">
          <span className="material-symbols-outlined text-5xl bg-[#ffb3ae] p-4 rounded-full border-[3px] border-[#111111] group-hover:scale-110 transition-transform">alternate_email</span>
          <div>
            <div className="font-bold text-[14px] uppercase text-gray-500 mb-2">Instagram</div>
            <div className="text-[18px] font-black">@zaenafky</div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
