import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceSection({ fadeUpVariant }) {
  return (
    <section className="flex flex-col gap-12" id="experience">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="flex justify-between items-end border-b-[4px] border-[#111111] pb-6"
      >
        <h2 className="text-[36px] md:text-[48px] font-black text-[#111111] uppercase tracking-tight">Organization Experience</h2>
      </motion.div>
      <div className="flex flex-col gap-8 md:gap-16">
        {[
          { role: "Communication & Info Staff", org: "BEM KM AMIKOM", img: "/images/Bem.webp", desc: [
            "Designed and executed social media publication strategies to increase student engagement.",
            "Managed photo and video documentation for university and national-scale events.",
            "Took full responsibility for the visual quality of all official organizational promotional content."
          ] },
          { role: "Head of External Dept.", org: "HIMASI", img: "/images/Eksternal.webp", desc: [
            "Led a team in building and maintaining strategic relations with campus authorities and external organizations.",
            "Initiated collaborative partnership programs that expanded the association's reach and branding.",
            "Coordinated task distribution among members and ensured all departmental targets were met."
          ] },
          { role: "Internal Department Staff", org: "HIMASI", img: "/images/internal.webp", desc: [
            "Played an active role in maintaining member solidarity through internal strengthening programs.",
            "Fully supported the operational aspects of various organizational agendas and routine discussions.",
            "Served as an effective communication facilitator across divisions to ensure smooth event execution."
          ] }
        ].map((exp, idx) => (
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            key={idx}
            className={`bg-[#ffffff] border-[3px] border-[#111111] rounded-2xl p-6 md:p-8 neubrutalism-shadow flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start relative w-full md:w-5/6 ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
          >
            <div className="w-20 h-20 md:w-28 md:h-28 shrink-0 border-[3px] border-[#111111] bg-[#e5e2e1] overflow-hidden rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-transform">
              <img alt={exp.org} className="w-full h-full object-cover" src={exp.img} />
            </div>
            <div className="flex flex-col gap-4 text-center md:text-left">
              <div>
                <h3 className="text-[28px] font-black text-[#111111] uppercase leading-tight">{exp.org}</h3>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-3">
                  <span className="font-bold text-[14px] bg-[#ffeb3b] border-[2px] border-[#111111] px-3 py-1 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-[#111111]">{exp.role}</span>
                </div>
              </div>
              <ul className="text-[#4a4733] text-[16px] font-medium leading-relaxed list-disc list-inside text-left flex flex-col gap-1.5">
                {exp.desc.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
