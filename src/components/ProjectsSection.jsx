import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectsSection({ fadeUpVariant, staggerContainer, itemVariant }) {
  return (
    <section className="flex flex-col gap-12" id="work">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="flex justify-between items-end border-b-[4px] border-[#111111] pb-6"
      >
        <h2 className="text-[36px] md:text-[48px] font-black text-[#111111] uppercase tracking-tight">Selected Work</h2>
      </motion.div>

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {[
          { title: "AmikomEventHub", link: "https://3197-laravelapp-omega.vercel.app/", githubLink: "https://github.com/zaenurizaa/3197_LARAVELAPP", year: "2024", badgeColor: "bg-[#ffeb3b]", img: "/images/Amikomevent.webp", desc: "Independent event web platform from UI/UX to backend systems. Features authentication, event categories, and a responsive ticket booking flow.", tags: ["Laravel", "MySQL", "PHP"] },
          { title: "Alidya Tour", link: "https://zaenurizaa.github.io/alidyatour/", githubLink: "https://github.com/zaenurizaa/alidyatour", year: "2024", badgeColor: "bg-[#ffdad6]", img: "/images/Alidya.webp", desc: "Car rental & tour website in Yogyakarta. Features a responsive landing page, vehicle catalog, and instant booking system integration.", tags: ["HTML", "CSS", "PHP"] },
          { title: "Forfume", link: "https://zaenurizaa.github.io/Forfume/", githubLink: "https://github.com/zaenurizaa/Forfume", year: "2023", badgeColor: "bg-[#d1e4ff]", img: "/images/Forfume.webp", desc: "Elegant e-commerce platform for exclusive perfumes. Features an interactive catalog, order processing, and a highly responsive shopping interface.", tags: ["JavaScript", "HTML", "CSS"] },
          { title: "Gamping Marine", link: "https://zaenurizaa.github.io/gampingmarine/", githubLink: "https://github.com/zaenurizaa/gampingmarine", year: "2023", badgeColor: "bg-[#ffb3ae]", img: "/images/Gamping.webp", desc: "Premium fresh fish supplier website. Equipped with an interactive product catalog and a direct WhatsApp ordering integration.", tags: ["HTML", "CSS", "PHP"] }
        ].map((proj, idx) => (
          <motion.div
            variants={itemVariant}
            key={idx}
            className="bg-[#ffffff] border-[3px] border-[#111111] rounded-2xl overflow-hidden flex flex-col h-full neubrutalism-shadow hover:shadow-[8px_8px_0px_0px_#000000] hover:-translate-y-1 transition-all group"
          >
            <div className="h-72 border-b-[3px] border-[#111111] relative overflow-hidden bg-[#e5e2e1]">
              <img className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" alt={proj.title} src={proj.img} />
              <div className={`absolute top-4 right-4 ${proj.badgeColor} border-[3px] border-[#111111] px-3 py-1.5 text-[14px] font-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-[#111111]`}>
                {proj.year}
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow relative">
              <h3 className="text-[28px] md:text-[32px] font-black text-[#111111] mb-3 leading-tight group-hover:text-blue-600 transition-colors">{proj.title}</h3>
              <p className="text-[16px] text-[#4a4733] mb-6 flex-grow font-medium leading-relaxed">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 border-[2px] border-[#111111] rounded-full text-[12px] font-bold bg-[#f2f2f2] text-[#111111]">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[15px] font-black uppercase text-[#111111] hover:text-blue-600 transition-colors group/link">
                  Visit Website
                  <span className="material-symbols-outlined bg-[#111111] text-white p-1 rounded-full text-[16px] transition-transform group-hover/link:-translate-y-1 group-hover/link:rotate-12" aria-hidden="true">arrow_outward</span>
                </a>
                <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[15px] font-black uppercase text-[#111111] hover:text-blue-600 transition-colors group/link">
                  Source Code
                  <span className="material-symbols-outlined bg-[#111111] text-white p-1 rounded-full text-[16px] transition-transform group-hover/link:-translate-y-1 group-hover/link:scale-110" aria-hidden="true">code</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
