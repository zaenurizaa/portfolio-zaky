import React from 'react';

export default function Footer({ navLinks }) {
  return (
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
  );
}
