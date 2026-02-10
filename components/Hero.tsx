import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-28 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8fbff] -z-10 skew-x-12 origin-top-right"></div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full text-[#407ADE] font-bold text-xs uppercase tracking-widest mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#407ADE] animate-pulse"></span>
              <span>Direct Meta Partnership Assets</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[#0f172a] leading-[1.1] mb-8">
              Reliable <span className="text-[#407ADE]">Verified BM</span> For Global Advertising
            </h1>
            
            <p className="text-gray-500 text-lg lg:text-xl mb-10 max-w-xl leading-relaxed font-medium">
              Stop worrying about restrictions. Get enterprise-grade Facebook Business Managers and WhatsApp API accounts with 100% genuine documentation and instant setup.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <motion.a 
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/8801302669333" 
                target="_blank"
                className="px-10 py-5 bg-[#407ADE] text-white rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-[#3462b5] transition-all shadow-xl shadow-blue-200"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                <span className="text-lg">Buy via WhatsApp</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://t.me/Verifiedbmbuy" 
                target="_blank"
                className="px-10 py-5 bg-white text-gray-800 border-2 border-gray-100 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:border-[#407ADE] hover:text-[#407ADE] transition-all shadow-lg shadow-gray-100"
              >
                <i className="fab fa-telegram-plane text-2xl"></i>
                <span className="text-lg">Join Community</span>
              </motion.a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="user" 
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-bold text-gray-900">5k+</span> Active Advertisers
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            {/* Background Blob for Image */}
            <div className="absolute -top-10 -right-10 w-full h-full bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
            
            <img 
              src="https://verifiedbmbuy.com/wp-content/uploads/2025/03/Buy-Verified-BM-Facebook-Business-Manager-VBB-Store-1.webp" 
              alt="Verified BM Buy Dashboard" 
              className="w-full max-w-lg rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500"
            />
            
            {/* Floating stat card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-50"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#407ADE] rounded-lg flex items-center justify-center">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Delivery Status</div>
                  <div className="text-sm font-bold text-gray-900 italic">Instant Active</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;