import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import Navbar from './src/components/Navbar';
import HeroSection from './src/components/HeroSection';
import ProjectsSection from './src/components/ProjectsSection';
import ExperienceSection from './src/components/ExperienceSection';
import CertificationsSection from './src/components/CertificationsSection';
import AboutSkillsSection from './src/components/AboutSkillsSection';
import FaqSection from './src/components/FaqSection';
import ContactSection from './src/components/ContactSection';
import Footer from './src/components/Footer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

export default function PortfolioHome() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['work', 'experience', 'certifications', 'about-skills', 'faq', 'contact'];
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -75% 0px' });

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'about-skills', label: 'Skills' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
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

      <Navbar navLinks={navLinks} activeSection={activeSection} />

      {/* Main Content */}
      <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-10 py-12 md:py-24 flex flex-col gap-24 md:gap-32">
        <HeroSection fadeUpVariant={fadeUpVariant} />
        <ProjectsSection fadeUpVariant={fadeUpVariant} staggerContainer={staggerContainer} itemVariant={itemVariant} />
        <ExperienceSection fadeUpVariant={fadeUpVariant} />
        <CertificationsSection fadeUpVariant={fadeUpVariant} staggerContainer={staggerContainer} itemVariant={itemVariant} />
        <AboutSkillsSection fadeUpVariant={fadeUpVariant} staggerContainer={staggerContainer} itemVariant={itemVariant} />
        <FaqSection fadeUpVariant={fadeUpVariant} staggerContainer={staggerContainer} itemVariant={itemVariant} />
        <ContactSection fadeUpVariant={fadeUpVariant} staggerContainer={staggerContainer} />
      </main>

      <Footer navLinks={navLinks} />
    </div>
  );
}
