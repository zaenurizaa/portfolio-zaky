import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function PortfolioHome() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'experience', 'certifications', 'about-skills', 'faq', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Sertifikasi' },
    { id: 'about-skills', label: 'Skills' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const faqs = [
    { q: "Apakah Zaky menerima proyek pembuatan website mandiri?", a: "Tentu! Saya terbuka untuk proyek pembuatan website dari awal (UI/UX hingga backend) maupun pengembangan fitur spesifik." },
    { q: "Teknologi apa yang paling sering digunakan?", a: "Saya sering menggunakan Laravel, PHP, MySQL untuk backend, dan HTML/CSS/React untuk frontend." },
    { q: "Apakah bersedia bekerja secara remote?", a: "Sangat bersedia. Sebagian besar proyek yang saya kerjakan selama ini berjalan lancar secara remote." },
    { q: "Bagaimana proses kerja dengan klien biasanya?", a: "Dimulai dari diskusi kebutuhan, pembuatan desain/wireframe, pengembangan kode, hingga testing dan rilis. Semua dilakukan dengan komunikasi rutin." },
    { q: "Apakah bisa membuat desain sistem (UI/UX) saja tanpa kode?", a: "Bisa, saya berpengalaman merancang wireframe dan UI/UX sebelum tahap pengembangan kode." }
  ];

  return (
    <div className="font-body-md text-body-md min-h-screen flex flex-col antialiased bg-[#F2F2F2] text-[#111111]">
      <style>{`
        .neubrutalism-shadow { box-shadow: 4px 4px 0px 0px #000000; }
        .neubrutalism-shadow-hover:hover { box-shadow: 6px 6px 0px 0px #000000; transform: translate(-2px, -2px); }
        .neubrutalism-shadow-active:active { box-shadow: 0px 0px 0px 0px #000000; transform: translate(4px, 4px); }
        .dot-pattern { background-image: radial-gradient(#111111 1px, transparent 1px); background-size: 20px 20px; opacity: 0.1; }
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
      `}</style>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#111111] z-[9999] origin-left"
        style={{ scaleX }}
      />

      {/* TopNavBar */}
      <nav className="sticky top-0 w-full z-50 flex justify-between items-center h-20 px-4 md:px-10 max-w-[1200px] mx-auto bg-[#ffffff] border-b-[3px] border-x-[3px] border-[#111111] mt-1.5 neubrutalism-shadow rounded-b-xl">
        <div className="font-display text-[24px] md:text-[28px] font-black text-[#1c1b1b] tracking-tighter bg-[#ffeb3b] px-3 py-1 border-[3px] border-[#111111] rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          ZZ.
        </div>
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-4 items-center font-bold text-[13px] uppercase tracking-widest">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className={`px-3 py-1.5 rounded-full border-[3px] border-transparent transition-all duration-200 block ${activeSection === link.id ? 'bg-[#ffeb3b] border-[#111111] neubrutalism-shadow text-[#111111]' : 'text-[#4a4733] hover:text-[#111111] hover:bg-[#f2f2f2]'}`}
                  href={`#${link.id}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <a href="https://drive.google.com/drive/folders/18lmIp--VCDIrsTHWlsqFJFYUXii771QY?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-[#111111] text-white font-bold text-[13px] uppercase px-5 py-2 border-[3px] border-[#111111] rounded-full hover:bg-white hover:text-[#111111] neubrutalism-shadow transition-all text-center inline-flex justify-center items-center gap-2 group">
            Download CV
            <span className="material-symbols-outlined text-[18px] group-hover:-translate-y-1 transition-transform">download</span>
          </a>
        </div>
        <button className="md:hidden p-2 border-[3px] border-[#111111] rounded bg-[#fcf9f8] neubrutalism-shadow">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-10 py-12 md:py-24 flex flex-col gap-24 md:gap-32">

        {/* Hero Section */}
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
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a className="bg-[#ffffff] text-[#111111] font-bold text-[15px] uppercase px-8 py-4 border-[3px] border-[#111111] rounded-xl neubrutalism-shadow hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all text-center inline-flex justify-center items-center gap-2" href="https://drive.google.com/drive/folders/18lmIp--VCDIrsTHWlsqFJFYUXii771QY?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download CV
                <span className="material-symbols-outlined">download</span>
              </a>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
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
              { title: "AmikomEventHub", link: "https://3197-laravelapp-omega.vercel.app/", year: "2024", badgeColor: "bg-[#ffeb3b]", img: "/images/Amikomevent.webp", desc: "Independent event web platform from UI/UX to backend systems. Features authentication, event categories, and a responsive ticket booking flow.", tags: ["Laravel", "MySQL", "PHP"] },
              { title: "Alidya Tour", link: "https://zaenurizaa.github.io/alidyatour/", year: "2024", badgeColor: "bg-[#ffdad6]", img: "/images/Alidya.webp", desc: "Car rental & tour website in Yogyakarta. Features a responsive landing page, vehicle catalog, and instant booking system integration.", tags: ["HTML", "CSS", "PHP"] },
              { title: "Forfume", link: "https://zaenurizaa.github.io/Forfume/", year: "2023", badgeColor: "bg-[#d1e4ff]", img: "/images/Forfume.webp", desc: "Elegant e-commerce platform for exclusive perfumes. Features an interactive catalog, order processing, and a highly responsive shopping interface.", tags: ["JavaScript", "HTML", "CSS"] },
              { title: "Gamping Marine", link: "https://zaenurizaa.github.io/gampingmarine/", year: "2023", badgeColor: "bg-[#ffb3ae]", img: "/images/Gamping.webp", desc: "Premium fresh fish supplier website. Equipped with an interactive product catalog and a direct WhatsApp ordering integration.", tags: ["HTML", "CSS", "PHP"] }
            ].map((proj, idx) => (
              <motion.a
                variants={itemVariant}
                key={idx}
                className="bg-[#ffffff] border-[3px] border-[#111111] rounded-2xl overflow-hidden flex flex-col h-full neubrutalism-shadow hover:shadow-[8px_8px_0px_0px_#000000] hover:-translate-y-1 transition-all group cursor-pointer"
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
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
                  <span className="inline-flex items-center gap-2 text-[15px] font-black uppercase text-[#111111] group-hover:text-blue-600 transition-colors mt-auto w-fit">
                    Visit Website
                    <span className="material-symbols-outlined bg-[#111111] text-white p-1 rounded-full text-[16px] group-hover:rotate-45 transition-transform">arrow_outward</span>
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </section>

        {/* Experience Section */}
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

        {/* Certifications Section */}
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

        {/* About & Skills Section */}
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

        {/* FAQ Section */}
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
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="font-black text-[18px] md:text-[20px] text-[#111111] pr-4">{faq.q}</span>
                  <span className={`material-symbols-outlined text-3xl transition-transform duration-300 border-[3px] border-[#111111] rounded-full bg-white ${openFaq === idx ? 'rotate-180' : ''}`}>
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

        {/* Contact Section */}
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

      </main>

      <footer className="w-full bg-[#fcf9f8] text-[#111111] pt-16 pb-8 border-t-[4px] border-[#111111]">
        <div className="w-full px-4 md:px-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div className="font-display text-[32px] md:text-[40px] font-black uppercase tracking-tighter">AHMAD ZAENURI</div>
            <p className="font-medium text-[#4a4733] max-w-xs text-[15px]">Building functional digital experiences through bold design and robust code.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-center md:text-left">
            <div className="flex flex-col gap-4">
              <h4 className="font-black uppercase tracking-widest text-[16px] text-[#111111] mb-2">Links</h4>
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} className="font-bold text-[14px] text-[#4a4733] hover:text-[#ffeb3b] hover:bg-[#111111] px-2 py-1 rounded transition-all uppercase">{link.label}</a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-black uppercase tracking-widest text-[16px] text-[#111111] mb-2">Social</h4>
              <a href="https://www.linkedin.com/in/ahmad-zaenuri-zafa-muzaky-8b347630a/" target="_blank" rel="noopener noreferrer" className="font-bold text-[14px] text-[#4a4733] hover:text-[#ffeb3b] hover:bg-[#111111] px-2 py-1 rounded transition-all uppercase">LinkedIn</a>
              <a href="https://github.com/zaenurizaa" target="_blank" rel="noopener noreferrer" className="font-bold text-[14px] text-[#4a4733] hover:text-[#ffeb3b] hover:bg-[#111111] px-2 py-1 rounded transition-all uppercase">GitHub</a>
              <a href="https://www.instagram.com/zaenafky/" target="_blank" rel="noopener noreferrer" className="font-bold text-[14px] text-[#4a4733] hover:text-[#ffeb3b] hover:bg-[#111111] px-2 py-1 rounded transition-all uppercase">Instagram</a>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 mt-16 pt-8 border-t-[3px] border-[#111111] flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="font-bold uppercase tracking-widest text-xs text-[#4a4733]">
            © {new Date().getFullYear()} AHMAD ZAENURI PORTFOLIO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
