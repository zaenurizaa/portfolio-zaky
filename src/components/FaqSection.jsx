import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FaqSection({ fadeUpVariant, staggerContainer, itemVariant }) {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    { q: "Do you accept independent website development projects?", a: "Absolutely! I am open to end-to-end website development projects (from UI/UX to backend) as well as specific feature development." },
    { q: "What technologies do you use most often?", a: "I frequently use Laravel, PHP, and MySQL for the backend, and HTML/CSS/React for the frontend." },
    { q: "Are you available for remote work?", a: "Very much so. Most of the projects I've worked on have been successfully completed remotely." },
    { q: "What is your typical workflow with clients?", a: "It starts with requirement discussions, designing wireframes, coding, testing, and finally release. Everything is done with regular communication." },
    { q: "Can you design systems (UI/UX) without coding?", a: "Yes, I am highly experienced in designing wireframes and UI/UX before jumping into the coding phase." }
  ];

  return (
    <section className="flex flex-col gap-12" id="faq">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="flex justify-between items-end border-b-[4px] border-[#111111] pb-6"
      >
        <h2 className="text-[36px] md:text-[48px] font-black text-[#111111] uppercase tracking-tight">FAQ</h2>
      </motion.div>

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="flex flex-col gap-4"
      >
        {faqs.map((faq, idx) => (
          <motion.div
            variants={itemVariant}
            key={idx}
            className={`border-[3px] border-[#111111] rounded-xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'bg-[#ffeb3b] neubrutalism-shadow translate-x-[-4px] translate-y-[-4px]' : 'bg-[#ffffff] hover:bg-[#f2f2f2]'}`}
          >
            <button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              aria-expanded={openFaq === idx}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <span className="font-black text-[18px] md:text-[20px] text-[#111111] pr-4">{faq.q}</span>
              <span className={`material-symbols-outlined text-3xl transition-transform duration-300 border-[3px] border-[#111111] rounded-full bg-white ${openFaq === idx ? 'rotate-180' : ''}`} aria-hidden="true">
                expand_more
              </span>
            </button>
            <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-[#4a4733] font-medium text-[16px] md:text-[18px] border-t-[3px] border-[#111111] pt-4 mt-2">
                {faq.a}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
