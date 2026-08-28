import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSkillsSection({ fadeUpVariant, staggerContainer, itemVariant }) {
  return (
    <section className="flex flex-col gap-12 border-t-[4px] border-[#111111] pt-16" id="about-skills">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="flex justify-between items-end border-b-[4px] border-[#111111] pb-6"
      >
        <h2 className="text-[36px] md:text-[48px] font-black text-[#111111] uppercase tracking-tight">About & Skills</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="bg-[#ffffff] border-[3px] border-[#111111] rounded-2xl p-8 neubrutalism-shadow relative">
            <span className="material-symbols-outlined absolute -top-5 -left-5 text-4xl bg-[#ffeb3b] border-[3px] border-[#111111] rounded-full p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">format_quote</span>
            <p className="text-[#111111] text-[18px] md:text-[20px] leading-relaxed font-medium">
              I am a Web Developer specializing in designing end-to-end digital products. I have deep expertise in the JavaScript ecosystem (React.js) for creating dynamic interfaces, combined with the robustness of PHP, Laravel, and MySQL for scalable system architecture. My main focus is bridging highly functional code with premium UI/UX standards, ensuring every application not only operates flawlessly but also provides a highly intuitive and engaging user experience.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="flex flex-wrap gap-4 items-start content-start"
        >
          {[
            { name: "JavaScript & React.js", bg: "bg-[#ffeb3b]" },
            { name: "MySQL / SQL Database", bg: "bg-[#ffffff]" },
            { name: "Laravel Framework", bg: "bg-[#ffeb3b]" },
            { name: "C++ Programming", bg: "bg-[#ffffff]" },
            { name: "HTML, CSS & PHP", bg: "bg-[#ffeb3b]" },
            { name: "UI/UX & Web Design", bg: "bg-[#ffffff]" },
            { name: "Media & Communication", bg: "bg-[#ffeb3b]" }
          ].map((skill, idx) => (
            <motion.span
              variants={itemVariant}
              key={idx}
              className={`px-6 py-3.5 border-[3px] border-[#111111] rounded-full text-[16px] font-black uppercase tracking-wide ${skill.bg} neubrutalism-shadow hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] cursor-default transition-all`}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
