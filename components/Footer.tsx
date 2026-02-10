import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-0 border-t border-slate-100">
      {/* 1. Top Trust Badges Bar (Woodmart Infoboxes) */}
      <div className="bg-[#fcfcfc] border-b border-slate-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10">
            <TrustBadge icon="https://verifiedbmbuy.com/wp-content/uploads/2021/09/Real-Documents-Verified-60x60.avif" title="Real Documents Verified" />
            <TrustBadge icon="https://verifiedbmbuy.com/wp-content/uploads/2021/09/All-Features-Unlocked-50x50.avif" title="All Features Unlocked" />
            <TrustBadge icon="https://verifiedbmbuy.com/wp-content/uploads/2021/09/Instant-Delivery-60x60.avif" title="Instant Delivery" />
            <TrustBadge icon="https://verifiedbmbuy.com/wp-content/uploads/2021/09/24_7-SUPPORT-50x50.avif" title="24/7 SUPPORT" />
            <TrustBadge icon="https://verifiedbmbuy.com/wp-content/uploads/2021/09/100-SAFE-50x50.avif" title="100% SAFE" />
          </div>
        </div>
      </div>

      {/* 2. Main Footer Columns */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col">
            <div className="mb-8 self-start">
              <img 
                src="https://verifiedbmbuy.com/wp-content/uploads/2025/12/Verified-BM-Buy-VBB-Store.png" 
                alt="Verified BM Buy VBB Store" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-500 text-[14px] leading-relaxed mb-10 font-medium">
              Verified BM Buy - VBB STORE is a secure and trusted platform for purchasing verified Business Manager accounts, Facebook Ads accounts, and other Meta-related tools.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <SocialSquareLink href="https://www.facebook.com/vbmbuy" name="facebook" bgColor="#3b5998" />
              <SocialSquareLink href="https://x.com/VBMBuy" name="x" bgColor="#000000" />
              <SocialSquareLink href="https://www.instagram.com/verifiedbmbuy/" name="instagram" bgColor="#8a3ab9" />
              <SocialSquareLink href="https://www.youtube.com/@verifiedbmbuy" name="youtube" bgColor="#ff0000" />
              <SocialSquareLink href="https://www.linkedin.com/company/verifiedbmbuy" name="linkedin" bgColor="#0077b5" />
              <SocialSquareLink href="https://t.me/Verifiedbmbuy" name="telegram" bgColor="#0088cc" />
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="text-[14px] font-[900] uppercase tracking-wider text-[#1a202c] mb-10">USEFUL LINK OF VBB</h4>
            <ul className="flex flex-col gap-5 text-[14px] text-slate-500 font-medium">
              <li><a href="https://verifiedbmbuy.com/shop/" className="hover:text-[#4788f7] transition-all">Buy BM Facebook</a></li>
              <li><a href="https://verifiedbmbuy.com/about-verified-bm-buy/" className="hover:text-[#4788f7] transition-all">About us - VBB</a></li>
              <li><a href="https://verifiedbmbuy.com/contact-verified-bm-buy/" className="hover:text-[#4788f7] transition-all">Contact VBB</a></li>
              <li><a href="https://verifiedbmbuy.com/blog/" className="hover:text-[#4788f7] transition-all">Blog Post</a></li>
            </ul>
          </div>

          {/* Column 3: Legal Terms */}
          <div>
            <h4 className="text-[14px] font-[900] uppercase tracking-wider text-[#1a202c] mb-10">LEGAL TERMS</h4>
            <ul className="flex flex-col gap-5 text-[14px] text-slate-500 font-medium">
              <li><a href="https://verifiedbmbuy.com/privacy-policy/" className="hover:text-[#4788f7] transition-all">Privacy Policy</a></li>
              <li><a href="https://verifiedbmbuy.com/return-refund-policy/" className="hover:text-[#4788f7] transition-all">Return & Refund Policy</a></li>
              <li><a href="https://verifiedbmbuy.com/terms-and-conditions/" className="hover:text-[#4788f7] transition-all">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Column 4: Why Buy From VBB */}
          <div>
            <h4 className="text-[14px] font-[900] uppercase tracking-wider text-[#1a202c] mb-10">Why Buy From VBB</h4>
            <ul className="flex flex-col gap-4 text-[14px] font-bold text-slate-600">
              <li className="flex items-center gap-3">Ban Free.</li>
              <li className="flex items-center gap-3">Money-Back Guarantee.</li>
              <li className="flex items-center gap-3">Dedicated Customer Support.</li>
              <li className="flex items-center gap-3">High Quality & Authentic.</li>
              <li className="flex items-center gap-3">Instant Delivery.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="border-t border-slate-50 py-8 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-[13px] text-slate-400 font-medium gap-6">
          <p>© 2026 <a href="https://verifiedbmbuy.com/" className="text-[#1a202c] font-black hover:text-[#4788f7] transition-colors">Verified BM Buy</a>. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <img 
              src="https://verifiedbmbuy.com/wp-content/themes/woodmart/images/payments.png" 
              alt="Accepted Payments" 
              className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

// Trust Badge with specific L-shaped corner brackets from screenshot
const TrustBadge: React.FC<{ icon: string; title: string }> = ({ icon, title }) => (
  <div className="flex items-center justify-center lg:justify-start px-4 gap-4 group cursor-default">
    <div className="w-12 h-12 flex-shrink-0 relative flex items-center justify-center overflow-hidden rounded-lg">
       {/* Corner Brackets */}
       <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#4788f7] z-10 transition-all duration-300 group-hover:scale-125"></div>
       <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#4788f7] z-10 transition-all duration-300 group-hover:scale-125"></div>
       
       <span className="absolute inset-0 bg-[#4788f7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
       
       <img src={icon} alt={title} className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110 relative z-0" />
    </div>
    <h5 className="text-[13px] font-black uppercase text-[#1a202c] tracking-tight leading-tight transition-colors group-hover:text-[#4788f7]">{title}</h5>
  </div>
);

// Square Social Links as seen in footer screenshot
const SocialSquareLink: React.FC<{ href: string; name: string; bgColor: string }> = ({ href, name, bgColor }) => (
  <a 
    href={href} 
    target="_blank" 
    className="relative group w-9 h-9 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 rounded-[2px] overflow-hidden shadow-sm"
    style={{ backgroundColor: bgColor }}
  >
    <span className="absolute inset-0 bg-white/50 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
    <div className="relative z-10">
      <SocialIconSmall name={name} />
    </div>
  </a>
);

const SocialIconSmall: React.FC<{ name: string }> = ({ name }) => {
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

export default Footer;