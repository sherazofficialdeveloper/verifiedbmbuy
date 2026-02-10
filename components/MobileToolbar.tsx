import React from 'react';

const MobileToolbar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex items-center justify-around z-50 px-2 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <ToolbarItem icon="home" label="Home" active />
      <ToolbarItem icon="shop" label="Shop" />
      <ToolbarItem 
        icon="whatsapp" 
        label="WhatsApp" 
        href="https://wa.me/8801302669333" 
        customIcon="https://verifiedbmbuy.com/wp-content/uploads/2025/12/whatsapp-1-150x150.png"
      />
      <ToolbarItem icon="user" label="My Account" />
    </div>
  );
};

const ToolbarItem: React.FC<{ icon: string; label: string; active?: boolean; href?: string; customIcon?: string }> = ({ 
  icon, label, active, href = "#", customIcon 
}) => {
  return (
    <a href={href} className={`flex flex-col items-center justify-center flex-1 ${active ? 'text-blue-600' : 'text-gray-500'}`}>
      <div className="w-6 h-6 mb-1 flex items-center justify-center">
        {customIcon ? (
          <img src={customIcon} alt={label} className="w-6 h-6" />
        ) : (
          <Icon name={icon} />
        )}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-tighter">{label}</span>
    </a>
  );
};

const Icon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'home':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
    case 'shop':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>;
    case 'user':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
    default:
      return null;
  }
};

export default MobileToolbar;