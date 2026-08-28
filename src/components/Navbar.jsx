import React from 'react';

export default function Navbar({ navLinks, activeSection }) {
  return (
    <nav className="sticky top-0 w-full z-50 flex justify-between items-center h-20 px-4 md:px-10 max-w-[1200px] mx-auto bg-[#ffffff] border-b-[3px] border-x-[3px] border-[#111111] mt-1.5 neubrutalism-shadow rounded-b-xl">
      <div className="font-display text-[24px] md:text-[28px] font-black text-[#1c1b1b] tracking-tighter bg-[#ffeb3b] px-3 py-1 border-[3px] border-[#111111] rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        ZZ.
      </div>
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex gap-4 items-center font-bold text-[13px] uppercase tracking-widest">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                className={`px-4 py-2.5 rounded-full border-[3px] border-transparent transition-all duration-200 block ${activeSection === link.id ? 'bg-[#ffeb3b] border-[#111111] neubrutalism-shadow text-[#111111]' : 'text-[#4a4733] hover:text-[#111111] hover:bg-[#f2f2f2]'}`}
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
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-y-1 transition-transform" aria-hidden="true">download</span>
        </a>
      </div>
      <button aria-label="Toggle menu" className="md:hidden p-3 border-[3px] border-[#111111] rounded bg-[#fcf9f8] neubrutalism-shadow">
        <span className="material-symbols-outlined" aria-hidden="true">menu</span>
      </button>
    </nav>
  );
}
