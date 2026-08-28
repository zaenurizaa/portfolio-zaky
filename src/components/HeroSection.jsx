import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection({ fadeUpVariant }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariant}
      className="relative bg-[#fcf9f8] rounded-3xl border-[3px] border-[#111111] overflow-hidden flex flex-col justify-center items-center text-center p-12 md:p-24 neubrutalism-shadow"
    >
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl mx-auto">
        <div className="bg-[#ffffff] px-4 py-1.5 rounded-full border-[3px] border-[#111111] font-bold text-[14px] uppercase tracking-widest inline-flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffeb3b] border border-[#111111] animate-pulse"></span>
          WEB DEV & DIGITAL MEDIA — YOGYAKARTA
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full">
          <h1 className="font-display text-[56px] md:text-[72px] font-black text-[#111111] m-0 leading-none">Hi, I'm</h1>
          <motion.div
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="transform rotate-3 transition-transform duration-300"
          >
            <div className="bg-[#ffffff] p-2 pb-6 border-[3px] border-[#111111] rounded-lg neubrutalism-shadow relative">
              <div className="w-32 h-32 md:w-40 md:h-40 border-[3px] border-[#111111] overflow-hidden bg-[#e5e2e1] rounded">
                <img alt="Portrait Ahmad Zaenuri" className="w-full h-full object-cover" src="/images/Zaky.webp" />
              </div>
              <div className="absolute bottom-1 right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-[#111111]"></div>
            </div>
          </motion.div>
          <h1 className="font-display text-[56px] md:text-[72px] font-black text-[#111111] m-0 leading-none">Zaky!</h1>
        </div>

        <p className="text-[18px] md:text-[20px] text-[#4a4733] max-w-3xl mt-4 leading-relaxed font-medium">
          I am an Information Systems student at Amikom University Yogyakarta with a passion for Web Development, Digital Media, and System Administration. I am accustomed to working adaptively and structurally, capable of combining creativity and technical skills in every project and activity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a className="bg-[#ffeb3b] text-[#111111] font-bold text-[15px] uppercase px-8 py-4 border-[3px] border-[#111111] rounded-xl neubrutalism-shadow hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all text-center inline-flex justify-center items-center gap-2" href="#work">
            View Projects
            <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
          </a>
          <a className="bg-[#ffffff] text-[#111111] font-bold text-[15px] uppercase px-8 py-4 border-[3px] border-[#111111] rounded-xl neubrutalism-shadow hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all text-center inline-flex justify-center items-center gap-2" href="https://drive.google.com/drive/folders/18lmIp--VCDIrsTHWlsqFJFYUXii771QY?usp=sharing" target="_blank" rel="noopener noreferrer">
            Download CV
            <span className="material-symbols-outlined" aria-hidden="true">download</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
