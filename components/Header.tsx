import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-50 shadow-sm transition-all duration-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo Section */}
          <div className="flex items-center gap-10">
            <a href="https://verifiedbmbuy.com/" className="block group">
              <img 
                src="https://verifiedbmbuy.com/wp-content/uploads/2025/12/Verified-BM-Buy-VBB-Store.png" 
                alt="Verified BM Buy" 
                className="h-11 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </a>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center md:gap-8 xl:gap-10">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="text-[13px] font-black uppercase text-[#1a202c] hover:text-[#4788f7] transition-all woodmart-nav-link tracking-wider"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials & CTA */}
          <div className="hidden md:ms-8 lg:ms-2 lg:flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <SocialCircleLink href="https://www.facebook.com/vbmbuy" name="facebook" bgColor="#4267B2" />
              <SocialCircleLink href="https://x.com/VBMBuy" name="x" bgColor="#000000" />
              <SocialCircleLink href="https://www.instagram.com/verifiedbmbuy/" name="instagram" bgColor="#7c4a3a" />
              <SocialCircleLink href="https://www.youtube.com/@verifiedbmbuy" name="youtube" bgColor="#FF0000" />
              <SocialCircleLink href="https://www.linkedin.com/company/verifiedbmbuy" name="linkedin" bgColor="#0077B5" />
              <SocialCircleLink href="https://t.me/Verifiedbmbuy" name="telegram" bgColor="#229ED9" />
            </div>
            <a 
              href="https://wa.me/8801302669333" 
              className="relative group bg-[#4788f7] text-white px-8 py-3.5 rounded-xl text-[12px] font-black uppercase tracking-widest hover:text-[#4788f7] transition-all duration-500 shadow-2xl shadow-blue-200 active:scale-95 whitespace-nowrap overflow-hidden"
            >
              <span className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10">WHATSAPP NOW</span>
            </a>
          </div>

          {/* Mobile UI */}
          <div className="lg:hidden flex items-center gap-4">
            <a href="https://wa.me/8801302669333" className="relative group bg-[#4788f7] text-white px-5 py-3 rounded-lg text-[11px] font-black uppercase shadow-lg shadow-blue-100 overflow-hidden">
              <span className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10 transition-colors group-hover:text-[#4788f7]">WhatsApp</span>
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="p-3 text-[#1a202c] bg-slate-50 rounded-lg transition-colors hover:bg-slate-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-16 6h16" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-50 py-10 px-6 shadow-2xl animate-[fadeIn_0.4s_ease-out]">
          <ul className="flex flex-col gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="block text-sm font-black uppercase tracking-[0.2em] text-[#1a202c] hover:text-[#4788f7] transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex items-center gap-3">
             <SocialCircleLink href="#" name="facebook" bgColor="#4267B2" />
             <SocialCircleLink href="#" name="x" bgColor="#000000" />
             <SocialCircleLink href="#" name="instagram" bgColor="#7c4a3a" />
          </div>
        </div>
      )}
    </header>
  );
};

const SocialCircleLink: React.FC<{ href: string; name: string; bgColor: string }> = ({ href, name, bgColor }) => (
  <a 
    href={href} 
    target="_blank" 
    className="relative group w-[36px] h-[36px] rounded-xl flex items-center justify-center text-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg active:scale-95 overflow-hidden"
    style={{ backgroundColor: bgColor }}
  >
    <span className="absolute inset-0 bg-white/50 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
    <div className="relative z-10">
      <SocialIcon name={name} />
    </div>
  </a>
);

const SocialIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'facebook': return <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.2c0-.81.21-1.383 1.256-1.383h2.102v-4.405c-.363-.048-1.61-.157-3.058-.157-3.027 0-5.1 1.847-5.1 5.24v2.905z"/></svg>;
    case 'x': return <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
    case 'instagram': return <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058-1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.428.065-2.404.293-3.259.624-.883.344-1.631.803-2.376 1.549-.746.746-1.205 1.493-1.549 2.376-.331.855-.559 1.831-.624 3.259-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.065 1.428.293 2.404.624 3.259.344.883.803 1.631 1.549 2.376.746.746 1.493 1.205 2.376 1.549.855.331 1.831.559 3.259.624 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.428-.065 2.404-.293 3.259-.624.883-.344 1.631-.803 2.376-1.549.746-.746 1.205-1.493 1.549-2.376.331-.855.559-1.831.624-3.259-.058 1.28-.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.065-1.428-.293-2.404-.624-3.259-.344-.883-.803-1.631-1.549-2.376-.746-.746-1.493-1.205-2.376-1.549-.855-.331-1.831-.559-3.259-.624-1.28-.058-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
    case 'youtube': return <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>;
    case 'linkedin': return <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>;
    case 'telegram': return <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.462 8.876c-.181 1.905-.962 6.502-1.36 8.627-.168.9-.5 1.201-.82 1.23-.703.064-1.237-.465-1.917-.912-1.064-.698-1.665-1.132-2.697-1.812-1.192-.785-.419-1.217.26-1.921.178-.184 3.27-2.997 3.33-3.254.008-.03.014-.142-.052-.201-.066-.059-.163-.039-.232-.023-.098.023-1.659 1.057-4.682 3.101-.443.305-.844.453-1.203.443-.399-.011-1.165-.228-1.735-.413-.699-.227-1.256-.348-1.208-.737.025-.202.301-.41.829-.623 3.243-1.413 5.405-2.347 6.486-2.801 3.085-1.294 3.725-1.518 4.142-1.526.092-.001.297.022.429.13.111.091.141.214.15.304.01.102.013.226.002.345z"/></svg>;
    default: return null;
  }
};

export default Header;
