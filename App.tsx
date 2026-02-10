import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import MobileToolbar from './components/MobileToolbar';
import { PRODUCTS, WORK_SAMPLES, FAQS, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('META TOOLS');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const reviewSliderRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const filteredProducts = activeTab === 'META TOOLS' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.categories.some(c => c.toUpperCase().includes(activeTab.toUpperCase())));

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Work Samples Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % WORK_SAMPLES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.scrollWidth / WORK_SAMPLES.length;
      sliderRef.current.scrollTo({ left: currentSlide * itemWidth, behavior: 'smooth' });
    }
  }, [currentSlide]);

  // Reviews Slider Logic (Showing 3 cards roughly on desktop)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewSlide((prev) => (prev + 1) % (TESTIMONIALS.length - 2));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (reviewSliderRef.current) {
      const cardContainer = reviewSliderRef.current.children[0] as HTMLElement;
      if (cardContainer && cardContainer.children[0]) {
        const firstCard = cardContainer.children[0] as HTMLElement;
        const cardWidth = firstCard.offsetWidth + 32; // width + gap (8 = 32px)
        reviewSliderRef.current.scrollTo({ left: currentReviewSlide * cardWidth, behavior: 'smooth' });
      }
    }
  }, [currentReviewSlide]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to get initials
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#4788f7] selection:text-white bg-white font-['Roboto',sans-serif]">
      <Header />

      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 bg-white">
          <div className="container mx-auto px-4 relative z-10">
             <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-5/12 flex justify-center reveal">
                   <div className="relative animate-float group cursor-pointer">
                      <div className="absolute inset-0 bg-blue-400/10 blur-2xl rounded-full transform scale-90 translate-y-8"></div>
                      <img 
                        src="https://verifiedbmbuy.com/wp-content/uploads/2025/02/cropped-verified-BM-Buy-buy-verified-facebook-business-manager-account-300x300.webp" 
                        alt="VBB Logo Large"
                        className="w-72 h-72 md:w-96 md:h-96 object-contain relative transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-[#4788f7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full pointer-events-none"></div>
                   </div>
                </div>
                <div className="w-full md:w-7/12 text-left reveal" style={{ animationDelay: '0.2s' }}>
                   <div className="text-[#4788f7] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
                      FULLY VERIFIED. INSTANTLY DELIVERED. GLOBALLY TRUSTED.
                   </div>
                   <h1 className="text-3xl md:text-[44px] font-[900] text-[#1a202c] mb-6 leading-tight tracking-tight">
                      Buy Verified BM – Facebook Business Manager & WhatsApp API Accounts
                   </h1>
                   <p className="text-[#64748b] text-[16px] leading-relaxed mb-8 max-w-3xl font-medium">
                      Verified BM Buy is a trusted and secure platform for purchasing <span className="text-[#1a202c] font-bold">verified Business Manager accounts</span> (Meta BM) and <span className="text-[#1a202c] font-bold">WhatsApp Business API</span> (WABA) accounts. We also offer <span className="text-[#1a202c] font-bold">Facebook Ads accounts</span>, reinstated profiles, and exclusive access to <span className="text-[#1a202c] font-bold">Ballon BM</span> and other advanced <span className="text-[#1a202c] font-bold">Meta tools</span>. All our accounts come with genuine documentation, ensuring authenticity, security, and dependability for advertisers and businesses worldwide.
                   </p>
                   
                   <div className="flex flex-wrap gap-4">
                      <SupportButton href="https://wa.me/8801302669333" text="WHATSAPP" color="#4788f7" icon="whatsapp" />
                      <SupportButton href="https://t.me/Verifiedbmbuy" text="TELEGRAM" color="#f8fafc" icon="telegram" border />
                      <SupportButton href="https://www.facebook.com/vbmbuy" text="FACEBOOK" color="#4788f7" icon="facebook" />
                      <SupportButton href="mailto:verifiedbmbuy@gmail.com" text="EMAIL" color="#f8fafc" icon="email" border />
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 2. FEATURES BAR */}
        <section className="bg-white py-12 border-y border-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureItem icon="https://verifiedbmbuy.com/wp-content/uploads/2025/12/electronics-2-best.svg" title="BEST QUALITY" desc="Many years on the market" />
              <FeatureItem icon="https://verifiedbmbuy.com/wp-content/uploads/2025/12/electronics-2-support.svg" title="24/7 SUPPORT" desc="If you have any questions" />
              <FeatureItem icon="https://verifiedbmbuy.com/wp-content/uploads/2025/12/electronics-2-free-shipping.svg" title="INSTANT DELIVERY" desc="Place an order and contact us." />
              <FeatureItem icon="https://verifiedbmbuy.com/wp-content/uploads/2025/12/electronics-2-return.svg" title="7 DAYS REPLACEMENT" desc="Replacement guarantee for 7days." />
            </div>
          </div>
        </section>

        {/* 3. SEO TEXT BLOCK */}
        <section className="py-12 bg-white">
           <div className="container mx-auto px-4 text-center max-w-5xl reveal">
              <h2 className="text-[18px] font-black text-[#1a202c] mb-6 uppercase tracking-tight">Buy Verified Business Manager and WhatsApp Business API - WABA - 100% Verified BM For Sale</h2>
              <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
                Get 100% <span className="text-[#1a202c] font-bold">verified Facebook Business Manager</span> fully approved by Meta. Safe and stable for long-term use. Run unlimited <span className="text-[#1a202c] font-bold">Facebook ad accounts</span>. Improve your ad delivery and performance. <span className="text-[#1a202c] font-bold">Buy verified BM for Facebook Ads</span>. Connect your business with <span className="text-[#1a202c] font-bold">WhatsApp Business API</span>. Verified WABA numbers are ready to use. Send template messages and bulk replies. Best solution for agencies and media buyers. Fast delivery. Real documents. Trusted seller. <span className="text-[#1a202c] font-bold">Support</span> for international clients.
              </p>
           </div>
        </section>

        {/* 4. PRODUCT TABS SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 reveal">
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-slate-100 mb-12">
                <span className="text-[#1a202c] font-black uppercase text-[15px] mr-6 py-4">BM SERVICES</span>
                {['META TOOLS', 'META VERIFIED BM', 'WHATSAPP API (WABA)', 'FACEBOOK ADS ACCOUNT', 'SOCIAL ACCOUNTS'].map(tab => (
                  <button 
                    key={tab} 
                    onClick={() => setActiveTab(tab)} 
                    className={`pb-4 px-2 text-[12px] font-black uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-[#4788f7] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#4788f7]' : 'text-slate-400 hover:text-slate-900'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
              {filteredProducts.map((product, idx) => <ProductCard key={idx} product={product} />)}
            </div>
          </div>
        </section>

        {/* 5. WHY CHOOSE A VERIFIED BUSINESS MANAGER? */}
        <section className="py-24 bg-[#fcfcfc] overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20 max-w-3xl mx-auto reveal">
              <h2 className="text-2xl md:text-[28px] font-black text-[#1a202c] mb-10 tracking-tight">Why Choose a Verified Business Manager (Verified BM)?</h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ServiceInfoCard icon="trust" title="Trust & Credibility" text="Verified accounts show Meta you are legitimate, reducing ad-delivery friction." />
              <ServiceInfoCard icon="security" title="Superior Security" text="Protected against unauthorized access with built-in Meta security features." />
              <ServiceInfoCard icon="restrictions" title="Avoid Restrictions" text="Face fewer checkpoints and automatic flags through a verified, high-trust account." />
              <ServiceInfoCard icon="commerce" title="Commerce Ready" text="Unlock Facebook Shops and premium Marketplace features exclusive to verified businesses." />
              <ServiceInfoCard icon="features" title="Advanced Toolset" text="Use custom audience targeting, pixel sharing, and API integrations standard accounts can't access." />
              <ServiceInfoCard icon="recovery" title="Fast Recovery" text="Instantly prove your identity to Meta support in case of hacking or technical issues." />
            </div>
          </div>
        </section>

        {/* 6. IMPORTANCE OF WHATSAPP API SECTION */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 reveal">
               <h2 className="text-2xl font-black text-[#1a202c] mb-6">Importance of <span className="text-[#4788f7]">WhatsApp Business API</span> . Why Your Business Needs It.</h2>
               <p className="text-slate-500 text-[15px] max-w-4xl mx-auto font-medium">The WhatsApp Business API helps you connect with customers easily. It secures 24/7 communication, so your business stays in touch. It also builds trust. WhatsApp Business API helps you reach more customers, which increases conversion rates. Direct and real-time chats are key for today's businesses. It supports 1,000-unlimited messages daily. All chats are secure and encrypted.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <ServiceInfoCard icon="customer" title="Direct Customer Engagement" text="WhatsApp helps you connect with your customers easily. It's the top messaging app, so your message gets through fast." />
               <ServiceInfoCard icon="rates" title="Higher Open & Response Rates" text="WhatsApp messages are powerful. They have a 90% open rate, which is much higher than emails or SMS." />
               <ServiceInfoCard icon="verified" title="Verified & Secure Communication" text="Using an official Meta-approved channel keeps your communications safe. It builds trust. Verified messaging also enhances your business's professionalism." />
               <ServiceInfoCard icon="automate" title="Automate Business Messaging" text="Set up auto-replies and reminders. Engage with customers around the clock. Never miss a lead." />
               <ServiceInfoCard icon="share" title="Share Multimedia & Documents" text="You can send different types of media in one message. Include images, videos, documents, and payment links." />
               <ServiceInfoCard icon="globe" title="Global Reach, Local Feel" text="Connect with customers around the globe. WhatsApp helps you reach them in their own language, making interactions personal." />
            </div>
          </div>
        </section>

        {/* 7. WHAT SERVICE OFFERED SECTION */}
        <section className="py-24 bg-[#fcfcfc] border-y border-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-5/12 reveal-left text-left lg:pl-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-[2.5px] bg-[#4788f7]"></div>
                  <div className="text-[#4788f7] text-[12px] font-black uppercase tracking-[0.2em]">Verified Accounts</div>
                </div>
                <h2 className="text-4xl md:text-[52px] font-black text-[#1a202c] uppercase mb-10 leading-[1.1] tracking-tighter">
                  WHAT SERVICE <br/>
                  <span className="text-[#4788f7]">"VERIFIED BM BUY"</span> <br/>
                  IS OFFERING.
                </h2>
                <div className="text-slate-500 text-[16px] leading-relaxed mb-12 space-y-8 font-medium">
                  <p>
                    Boost your success with a <span className="font-black text-[#1a202c] underline underline-offset-4 decoration-2">verified business manager</span> and <span className="font-black text-[#1a202c]">WhatsApp API</span>. Get a reinstated profile and Facebook Ads account. Launch powerful campaigns without limits.
                  </p>
                  <p>
                    At Verified BM Buy, we prioritize trust and security. Our services are not just reliable, they are a guarantee. We are unwavering in our commitment to these values.
                  </p>
                </div>
                <div className="flex gap-5">
                  <ReverseSlideButton href="#" text="VIEW TOOLS" />
                  <SlideButton href="https://wa.me/8801302669333" text="WHATSAPP" />
                </div>
              </div>
              <div className="lg:w-7/12 space-y-6 reveal-right mt-12 lg:mt-0">
                <ServiceItemLarge title="Verified Facebook Business Manager Accounts" text="Get verified Business Manager accounts from Meta, ensuring your safety with real documentation and a 100% safety guarantee." />
                <ServiceItemLarge title="Reinstated Profiles" text="We can easily recover your restricted or disabled accounts. Our reinstated profiles are fully verified and ready for deployment." />
                <ServiceItemLarge title="WhatsApp API Solutions" text="Connect with customers worldwide using WhatsApp Cloud API. Enjoy automated messages and high deliverability. Communication is secure and Meta-approved." />
                <ServiceItemLarge title="Ballon BM Infrastructure" text="Maximize your marketing with Ballon BM. Simplify your campaigns. Improve targeting. Cut down on ad rejections and scale faster." />
                <ServiceItemLarge title="Facebook Ads Account For Scaling" text="Start advertising now with verified Facebook Ads accounts. They're safe and trusted, making them perfect for quick campaign scaling and high volume." />
              </div>
            </div>
          </div>
        </section>

        {/* 8. WHY CHOOSE VERIFIED BM BUY? - EXACT MATCHING SCREENSHOT */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-24">
              {/* Left Column: Text & Buttons */}
              <div className="w-full lg:w-5/12 reveal-left flex flex-col justify-center">
                <div className="text-slate-400 text-[13px] font-black uppercase tracking-[0.2em] mb-6">CHOOSE VERIFIED BM BUY</div>
                <h2 className="text-[44px] md:text-[56px] font-black text-[#1a202c] mb-10 leading-[1.05] tracking-tighter">
                  Why Choose <br/>
                  Verified BM <br/>
                  Buy?
                </h2>
                <div className="text-[#1a202c] text-[17px] leading-relaxed mb-12 font-medium">
                  At <span className="font-black">Verified BM Buy</span>, we focus on high-quality digital assets. Our goal is to help you thrive in today's advertising world. We offer <span className="font-black">Verified Business Managers</span>, <span className="font-black">WhatsApp Business API</span>, and <span className="font-black">Facebook Ads accounts</span>. Advertisers around the globe trust our solutions.
                </div>
                <div className="flex flex-wrap gap-4">
                  <ReverseSlideButton href="#" text="VIEW MORE" />
                  <SlideButton href="#" text="SHOP NOW" />
                </div>
              </div>

              {/* Right Column: Grid of Features */}
              <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 reveal-right" style={{ animationDelay: '0.2s' }}>
                <SideFeatureItem 
                  icon="ban" 
                  title="100% Ban-Free Accounts" 
                  text="All our accounts include real documentation. This reduces risk and ensures we follow Meta's policies." 
                  bgColor="bg-[#fff1f2]" iconColor="text-red-500"
                />
                <SideFeatureItem 
                  icon="money" 
                  title="Money-Back Guarantee" 
                  text="We stand by every order. If we don't deliver as promised, you'll get your money back. Your investment is safe." 
                  bgColor="bg-[#f0fdf4]" iconColor="text-[#22c55e]"
                />
                <SideFeatureItem 
                  icon="truck" 
                  title="High Quality & Instant Delivery" 
                  text="We process orders quickly, and most are delivered the same day. This allows you to launch your campaigns on time." 
                  bgColor="bg-[#f0f9ff]" iconColor="text-[#0ea5e9]"
                />
                <SideFeatureItem 
                  icon="support" 
                  title="Dedicated Expert Support" 
                  text="Our customer success team is available 24/7. We can help with setup, integration, and any technical questions." 
                  bgColor="bg-[#f0fdfa]" iconColor="text-[#0d9488]"
                />
                <SideFeatureItem 
                  icon="globe" 
                  title="Global Reach, Local Expertise" 
                  text="We help businesses around the globe. Our solutions grow with your campaigns. We provide local support." 
                  bgColor="bg-[#f0fdf4]" iconColor="text-[#10b981]"
                />
                <SideFeatureItem 
                  icon="secure" 
                  title="Safe & Secure Transactions" 
                  text="Our platform uses encrypted communication and secure payment gateways. We prioritize client data confidentiality." 
                  bgColor="bg-[#fff7ed]" iconColor="text-[#f97316]"
                />
                <SideFeatureItem 
                  icon="transfer" 
                  title="Ownership Transfer" 
                  text="Every account comes with ownership documents. You get full support for an easy transfer. No dependencies or strings." 
                  bgColor="bg-[#f0fdf4]" iconColor="text-[#10b981]"
                />
                <SideFeatureItem 
                  icon="record" 
                  title="Proven Track Record" 
                  text="Verified BM Buy has many satisfied clients, a strong record of delivering results, and is known as a leader in Meta marketing." 
                  bgColor="bg-[#f0fdf4]" iconColor="text-[#10b981]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 9. WORK SAMPLE SECTION */}
        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 reveal">
              <div className="text-[#64748b] text-[13px] font-bold uppercase tracking-[0.2em] mb-4">BM Verified</div>
              <h3 className="text-4xl font-black text-[#1a202c] uppercase tracking-tight">VBB STORE'S WORK SAMPLE</h3>
            </div>
            <div className="relative group reveal" style={{ animationDelay: '0.2s' }}>
              <div ref={sliderRef} className="overflow-x-hidden flex gap-8 py-10 px-4">
                {WORK_SAMPLES.map((src, i) => (
                  <div key={i} className="min-w-[320px] md:min-w-[440px] flex-shrink-0 transition-transform hover:scale-[1.02] relative group/item cursor-pointer">
                    <img src={src} alt={`Sample ${i}`} className="w-full h-96 rounded-xl shadow-xl border-4 border-white" />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-[#4788f7]/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 rounded-xl pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10. RECENT REVIEWS SECTION */}
        <section className="py-24 bg-white border-t border-slate-50 overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Header matching screenshot */}
            <div className="text-center mb-20 reveal">
              <div className="text-[#4788f7] text-[12px] font-bold uppercase tracking-[0.25em] mb-4">SUCCESS STORIES</div>
              <h2 className="text-[32px] md:text-[44px] font-black text-[#1a202c] relative pb-6 inline-block">
                Customer Experiences
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#4788f7] rounded-full"></span>
              </h2>
            </div>
            
            <div className="relative max-w-7xl mx-auto reveal" style={{ animationDelay: '0.2s' }}>
              <div 
                ref={reviewSliderRef}
                className="overflow-x-hidden scroll-smooth"
              >
                <div className="flex gap-8 py-4 w-max">
                  {TESTIMONIALS.map((t, i) => (
                    <div 
                      key={i} 
                      className="w-[calc(100vw-48px)] md:w-[410px] flex-shrink-0 bg-[#f8fafc] p-8 md:p-12 rounded-[2.5rem] flex flex-col shadow-[0_15px_35px_rgba(0,0,0,0.02)] transition-all duration-500"
                    >
                       {/* Blue stars matching screenshot */}
                       <div className="flex gap-1 mb-8">
                          {[...Array(5)].map((_, idx) => (
                            <svg key={idx} className="w-4 h-4 fill-[#4788f7]" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                       </div>
                       
                       <p className="text-[15px] md:text-[16px] text-slate-600 italic leading-relaxed mb-10 font-medium">
                         "{t.text}"
                       </p>
                       
                       <div className="mt-auto flex items-center gap-4">
                          {/* Circle Avatar with Initials */}
                          <div className="w-12 h-12 rounded-full bg-[#4788f7] flex items-center justify-center text-white text-[15px] font-bold shadow-lg shadow-blue-100/50">
                            {getInitials(t.name)}
                          </div>
                          <div className="flex flex-col">
                             <div className="font-bold text-[#1a202c] text-[15px]">
                               {t.name}
                             </div>
                             <div className="text-[11px] text-[#4788f7] font-bold uppercase tracking-[0.05em]">
                               {t.role}
                             </div>
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Dots */}
              <div className="flex justify-center gap-2.5 mt-14">
                {Array.from({ length: Math.ceil(TESTIMONIALS.length - 2) }).map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentReviewSlide(i)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${currentReviewSlide === i ? 'w-10 bg-[#4788f7]' : 'w-1.5 bg-slate-200 hover:bg-slate-300'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 11. FAQ SECTION */}
        <section className="py-24 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-[32px] md:text-[40px] font-black text-[#1a202c] text-center mb-20 uppercase reveal tracking-tight">Frequently Asked Questions (FAQ)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 reveal" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                {FAQS.slice(0, 7).map((faq, i) => <FaqItem key={i} question={faq.q} answer={faq.a} />)}
              </div>
              <div className="space-y-6">
                {FAQS.slice(7).map((faq, i) => <FaqItem key={i} question={faq.q} answer={faq.a} />)}
              </div>
            </div>
          </div>
        </section>

        {/* 12. SCALE YOUR ADVERTISING BLOCK - UPDATED CONTENT FROM SCREENSHOT */}
        <section className="py-24 bg-white">
           <div className="container mx-auto px-4 max-w-5xl text-left reveal prose prose-slate">
              <h2 className="text-3xl md:text-4xl font-black text-[#1a202c] text-center mb-10 tracking-tight leading-tight">Scale Your Advertising with a Verified Business Manager</h2>
              
              <p className="text-[16px] leading-relaxed text-slate-600 mb-10">
                Navigating the complexities of digital advertising requires more than just a creative strategy; it requires a stable foundation. For agencies and individual marketers, the ability to run ads without constant interruptions is the difference between profit and loss. <span className="font-bold text-[#1a202c]">Verified BM Buy Store</span> operates as a specialized digital commerce platform providing high-quality Meta solutions. By choosing to <span className="font-bold text-[#1a202c]">buy verified bm</span> accounts, you bypass the common hurdles of account restrictions and verification delays that often stall growth.
              </p>

              <h2 className="text-2xl md:text-3xl font-black text-[#1a202c] text-center mb-10 tracking-tight">Why Top Advertisers Buy Verified Business Manager Accounts</h2>
              
              <p className="text-[16px] leading-relaxed text-slate-600 mb-8">
                The Meta advertising ecosystem demands high levels of trust and compliance. When you use a <span className="font-bold text-[#1a202c]">verified business manager</span>, you are telling the platform that your entity is legitimate and legal. This status significantly reduces the risk of sudden account bans and increases your daily spending limits, allowing for aggressive scaling.
              </p>

              <div className="mb-12">
                 <h4 className="font-black text-[#1a202c] mb-6 text-[18px]">Securing a <span className="text-[#4788f7]">verified business manager account</span> provides several operational advantages:</h4>
                 <ul className="space-y-4 text-[16px] text-slate-600 font-medium">
                    <li className="flex items-start gap-3">
                      <span className="text-[#4788f7] font-black mt-1">•</span>
                      <span><span className="font-bold text-[#1a202c]">increased trust scores within the Meta algorithm:</span> this leads to faster ad approvals and lower chances of automated flags;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4788f7] font-black mt-1">•</span>
                      <span><span className="font-bold text-[#1a202c]">higher daily spending limits:</span> new accounts are often capped, but verified assets allow for much higher budgets right from the start;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#4788f7] font-black mt-1">•</span>
                      <span><span className="font-bold text-[#1a202c]">access to premium features:</span> certain tools, like the WhatsApp Business API or advanced developer integrations, require a verified status to function correctly.</span>
                    </li>
                 </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-[#1a202c] text-center mb-10 tracking-tight">The Distinct Benefits of Verified Business Manager Assets</h2>
              
              <p className="text-[16px] leading-relaxed text-slate-600 mb-8">
                Unlike standard accounts that are prone to checkpoints, the <span className="font-bold text-[#1a202c]">benefits of verified business manager</span> assets lie in their resilience. Standard accounts often struggle with limited support and low spending thresholds. In contrast, the professional-grade solutions at Verified BM Buy Store are prepared specifically for enterprise-level performance. Our accounts undergo a rigorous verification process using authentic documentation, ensuring they meet Meta's strict compliance standards.
              </p>
              
              <p className="text-[16px] leading-relaxed text-slate-600 mb-12">
                While other providers might offer unverified or "fresh" accounts that trigger security alerts the moment you upload a credit card, our specialized <span className="font-bold text-[#1a202c]">verified BM for sale</span> options are seasoned and ready for immediate deployment. This reliability is why global marketing agencies treat our platform as their go-to infrastructure partner.
              </p>

              <h2 className="text-2xl md:text-3xl font-black text-[#1a202c] text-center mb-10 tracking-tight uppercase">Premium Meta Solutions and Purchase Conditions</h2>
              
              <p className="text-[16px] leading-relaxed text-slate-600 mb-10">
                Our inventory is designed to support various scales of operation. Whether you need a single <span className="font-bold text-[#1a202c]">business manager verified</span> for a local brand or a complex setup for a global agency, we offer tailored products. Our current catalog includes:
              </p>

              <div className="bg-[#f8fafc] p-10 rounded-[2rem] border border-slate-100 mb-12">
                <ul className="space-y-5 text-[16px] text-slate-600 font-medium">
                   <li className="flex items-start gap-3">
                     <span className="text-[#4788f7] font-black mt-1">•</span>
                     <span><span className="font-bold text-[#1a202c]">Verified Facebook Business Manager:</span> ideal for standard advertising needs with increased limits;</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="text-[#4788f7] font-black mt-1">•</span>
                     <span><span className="font-bold text-[#1a202c]">WhatsApp Business API (WABA):</span> accounts with high messaging limits for automated customer engagement;</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="text-[#4788f7] font-black mt-1">•</span>
                     <span><span className="font-bold text-[#1a202c]">Reinstated Facebook Accounts:</span> pre-warmed accounts with a history of restored access for maximum stability;</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="text-[#4788f7] font-black mt-1">•</span>
                     <span><span className="font-bold text-[#1a202c]">TikTok Agency Ad Accounts:</span> for marketers looking to diversify their traffic sources beyond Meta.</span>
                   </li>
                </ul>
              </div>

              <p className="text-[16px] leading-relaxed text-slate-600 mb-8">
                When you <span className="font-bold text-[#1a202c]">buy verified business manager</span> services from us, the delivery is nearly instantaneous. Once payment is confirmed via our secure gateway, the account credentials and recovery information are sent directly to your email. Prices typically range from $100 to $500, depending on the specific account history and spending limit capacity. Every purchase comes with comprehensive setup guides and a 24/7 support guarantee to ensure a smooth transition into your new advertising environment.
              </p>

              <p className="text-[16px] leading-relaxed text-slate-600 mb-10">
                Our commitment to legitimacy and transparency ensures that your business stays ahead of the competition. By securing a reliable infrastructure today, you protect your marketing efforts from the unpredictability of platform policy changes.
              </p>

              <p className="text-[18px] leading-relaxed text-[#1a202c] font-black text-center italic">
                Would you like to know more about the <span className="text-[#4788f7] underline decoration-2 underline-offset-4">specific daily spending limits</span> available for our current stock of verified accounts?
              </p>
           </div>
        </section>

        {/* 13. LOCATE SECTION */}
        <section className="py-24 bg-white border-t border-slate-50">
          <div className="container mx-auto px-4 max-w-7xl reveal">
            <h2 className="text-4xl font-black text-center text-[#1a202c] mb-20 uppercase tracking-tighter">How to find our <span className="text-[#4788f7]">Verified BM BUY</span> Store</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               <ContactBox icon="https://verifiedbmbuy.com/wp-content/uploads/2025/12/placeholder-40x40.png" title="POSTAL ADDRESS" text="Pirgonj, Rangpur, Bangladesh - 5470" />
               <ContactBox icon="https://verifiedbmbuy.com/wp-content/uploads/2025/12/working-time-40x40.png" title="WORK HOURS" text="Saturday-Friday: 8:00 - 23:00" />
               <ContactBox icon="https://verifiedbmbuy.com/wp-content/uploads/2025/12/whatsapp-40x40.png" title="CONTACT ON WHATSAPP" text="+88 013 0266 9333" />
               <ContactBox icon="https://verifiedbmbuy.com/wp-content/uploads/2025/12/mail-40x40.png" title="EMAIL ADDRESS" text="verifiedbmbuy@gmail.com" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileToolbar />

      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 md:bottom-12 md:right-12 bg-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-slate-400 hover:bg-[#4788f7] hover:text-white transition-all duration-300 z-[60] border border-slate-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

// HELPER COMPONENTS

// Button with Left-to-Right Blue Overlay (for white buttons)
const SlideButton: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <a 
    href={href} 
    className="relative group overflow-hidden bg-white border-2 border-[#4788f7] text-[#4788f7] px-10 py-3.5 rounded-lg font-black uppercase text-[11px] tracking-widest transition-all duration-500 hover:text-white flex items-center justify-center min-w-[140px]"
  >
    <span className="absolute inset-0 bg-[#4788f7] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
    <span className="relative z-10 transition-colors duration-500">{text}</span>
  </a>
);

// Button with Right-to-Left White Overlay (for blue buttons)
const ReverseSlideButton: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <a 
    href={href} 
    className="relative group overflow-hidden bg-[#4788f7] text-white px-10 py-3.5 rounded-lg font-black uppercase text-[11px] tracking-widest transition-all duration-500 hover:text-[#4788f7] shadow-lg shadow-blue-100/50 flex items-center justify-center min-w-[140px]"
  >
    <span className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
    <span className="relative z-10 transition-colors duration-500">{text}</span>
  </a>
);

const SupportButton: React.FC<{ href: string; text: string; color: string; icon: string; border?: boolean }> = ({ href, text, color, icon, border }) => {
  if (color === "#4788f7") {
    return (
      <a 
        href={href} 
        className="relative group overflow-hidden bg-[#4788f7] text-white px-8 py-3 rounded-xl font-black text-[12px] flex items-center gap-3 transition-all duration-500 hover:text-[#4788f7] shadow-sm"
      >
        <span className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
        <span className="relative z-10 flex items-center gap-3 transition-colors duration-500">
          <SupportIcon name={icon} />
          {text}
        </span>
      </a>
    );
  }
  
  return (
    <a 
      href={href} 
      className={`relative group overflow-hidden bg-white text-[#4788f7] border-2 border-[#4788f7] px-8 py-3 rounded-xl font-black text-[12px] flex items-center gap-3 transition-all duration-500 hover:text-white shadow-sm`}
    >
      <span className="absolute inset-0 bg-[#4788f7] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
      <span className="relative z-10 flex items-center gap-3 transition-colors duration-500">
        <SupportIcon name={icon} />
        {text}
      </span>
    </a>
  );
};

const SupportIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'whatsapp': return <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
    case 'telegram': return <svg className="w-4 h-4 fill-current text-[#229ED9] group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.462 8.876c-.181 1.905-.962 6.502-1.36 8.627-.168.9-.5 1.201-.82 1.23-.703.064-1.237-.465-1.917-.912-1.064-.698-1.665-1.132-2.697-1.812-1.192-.785-.419-1.217.26-1.921.178-.184 3.27-2.997 3.33-3.254.008-.03.014-.142-.052-.201-.066-.059-.163-.039-.232-.023-.098.023-1.659 1.057-4.682 3.101-.443.305-.844.453-1.203.443-.399-.011-1.165-.228-1.735-.413-.699-.227-1.256-.348-1.208-.737.025-.202.301-.41.829-.623 3.243-1.413 5.405-2.347 6.486-2.801 3.085-1.294 3.725-1.518 4.142-1.526.092-.001.297.022.429.13.111.091.141.214.15.304.01.102.013.226.002.345z"/></svg>;
    case 'facebook': return <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.2c0-.81.21-1.383 1.256-1.383h2.102v-4.405c-.363-.048-1.61-.157-3.058-.157-3.027 0-5.1 1.847-5.1 5.24v2.905z"/></svg>;
    case 'email': return <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l1.324 1.072c.156.126.348.189.54.189.192 0 .384-.063.54-.189l1.325-1.072 6.454 7.971h-16.637l6.454-7.971zm4.101-2.101l4.623-3.746v9.458l-4.623-5.712z"/></svg>;
    default: return null;
  }
};

const FeatureItem: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex items-center gap-5 group cursor-default relative px-10 py-3 rounded-xl border-2 border-transparent hover:border-[#4788f7]/20 hover:bg-slate-50/50 transition-all duration-300">
    <div className="flex-shrink-0 bg-blue-50/50 p-3 rounded-xl transition-all duration-500 group-hover:bg-blue-100/60 group-hover:scale-105 relative overflow-hidden">
      <img src={icon} alt={title} className="w-10 h-10 object-contain relative z-10" />
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-[#4788f7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
    <div>
      <h4 className="text-[13px] font-black text-[#1a202c] uppercase tracking-tight mb-1 transition-colors group-hover:text-[#4788f7]">{title}</h4>
      <p className="text-[11px] text-slate-400 font-bold">{desc}</p>
    </div>
  </div>
);

// SERVICE INFO CARD COMPONENT WITH MATCHING DESIGN AND SLIDING OVERLAY HOVER
const ServiceInfoCard: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => {
  const getIconData = () => {
    switch(icon) {
      case 'trust': return { 
        bg: 'bg-blue-50', color: 'text-blue-500', 
        svg: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> 
      };
      case 'security': return { 
        bg: 'bg-purple-50', color: 'text-purple-500', 
        svg: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg> 
      };
      case 'restrictions': return { 
        bg: 'bg-red-50', color: 'text-red-500', 
        svg: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2.5" /></svg> 
      };
      case 'commerce': return { 
        bg: 'bg-emerald-50', color: 'text-emerald-500', 
        svg: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> 
      };
      case 'features': return { 
        bg: 'bg-indigo-50', color: 'text-indigo-500', 
        svg: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg> 
      };
      case 'recovery': return { 
        bg: 'bg-pink-50', color: 'text-pink-500', 
        svg: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> 
      };
      case 'customer': return { 
        bg: 'bg-sky-50', color: 'text-sky-500', 
        svg: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg> 
      };
      case 'rates': return { 
        bg: 'bg-amber-50', color: 'text-amber-500', 
        svg: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> 
      };
      case 'verified': return { 
        bg: 'bg-green-50', color: 'text-green-500', 
        svg: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> 
      };
      case 'automate': return { 
        bg: 'bg-indigo-50', color: 'text-indigo-500', 
        svg: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> 
      };
      case 'share': return { 
        bg: 'bg-rose-50', color: 'text-rose-500', 
        svg: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> 
      };
      case 'globe': return { 
        bg: 'bg-teal-50', color: 'text-teal-500', 
        /* Removed duplicate stroke attributes that were causing line 658 error */
        svg: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9" /></svg> 
      };
      default: return { bg: 'bg-slate-50', color: 'text-slate-500', svg: null };
    }
  };

  const data = getIconData();

  return (
    <div className="relative group overflow-hidden bg-white p-12 rounded-[2.5rem] shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-slate-50 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2">
      {/* Sliding Background Overlay - slides left to right */}
      <div className="absolute inset-0 bg-[#4788f7] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Icon Circle */}
        <div className={`w-16 h-16 rounded-full ${data.bg} flex items-center justify-center ${data.color} mb-8 transition-all duration-500 group-hover:bg-white/20 group-hover:text-white group-hover:scale-110 relative overflow-hidden`}>
           {data.svg}
           {/* Subtle Overlay */}
           <div className="absolute inset-0 bg-[#4788f7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
        
        <h3 className="text-[20px] font-black text-[#1a202c] mb-4 tracking-tight group-hover:text-white transition-colors duration-500">
          {title}
        </h3>
        
        <p className="text-[14px] text-slate-500 leading-relaxed font-medium transition-colors duration-500 group-hover:text-white/80">
          {text}
        </p>
      </div>
    </div>
  );
};

// FEATURE ITEM COMPONENT WITH HORIZONTAL LAYOUT (AS SEEN IN SCREENSHOT)
const SideFeatureItem: React.FC<{ icon: string; title: string; text: string; bgColor: string; iconColor: string }> = ({ 
  icon, title, text, bgColor, iconColor 
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'ban': return <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} /></svg>;
      case 'money': return <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.633 1M12 8V7m0 11v1m0-1c-1.11 0-2.08-.407-2.633-1M12 18v-1m4-7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /></svg>;
      case 'truck': return <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} /></svg>;
      case 'support': return <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} /></svg>;
      case 'globe': return <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} /></svg>;
      case 'secure': return <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} /></svg>;
      case 'transfer': return <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} /></svg>;
      case 'record': return <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} /></svg>;
      default: return null;
    }
  };

  return (
    <div className="flex items-start gap-6 group p-6 rounded-2xl border-2 border-transparent hover:border-[#4788f7]/20 hover:bg-[#4788f7]/5 transition-all duration-500 cursor-default">
      <div className={`w-[60px] h-[60px] rounded-full ${bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
        <div className={iconColor + " relative z-10"}>{getIcon()}</div>
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-[#4788f7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
      <div className="flex flex-col text-left pt-1">
        <h4 className="text-[17px] font-[900] text-[#1a202c] mb-2 leading-tight tracking-tight group-hover:text-[#4788f7] transition-colors uppercase">{title}</h4>
        <p className="text-[14px] text-slate-500 font-medium leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

const ServiceItemLarge: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div className="flex items-start gap-8 group p-6 rounded-2xl border-2 border-transparent hover:border-[#4788f7]/20 hover:bg-[#4788f7]/5 transition-all duration-500 cursor-default">
    <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
       <div className="absolute inset-0 bg-blue-50/50 rounded-full border border-slate-50 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-100/50 relative overflow-hidden flex items-center justify-center">
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-[#4788f7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
       </div>
       <div className="relative w-10 h-10 bg-[#4788f7] rounded-lg flex items-center justify-center shadow-lg shadow-blue-200/50 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
          </svg>
       </div>
    </div>
    <div className="flex flex-col text-left pt-1">
      <h4 className="text-[19px] font-[900] text-[#1a202c] mb-2 leading-tight tracking-tight group-hover:text-[#4788f7] transition-colors">{title}</h4>
      <p className="text-[16px] text-slate-500 leading-relaxed font-medium max-w-xl">{text}</p>
    </div>
  </div>
);

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-2 border border-slate-100 rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-300 hover:border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-slate-50/50 transition-colors"
      >
        <span className="text-[18px] md:text-[20px] font-black text-[#1a202c] tracking-tight">{question}</span>
        <span className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-8 pb-8 pt-0 text-[16px] md:text-[18px] text-slate-500 leading-relaxed font-medium animate-[fadeIn_0.4s_ease-out]">
          {answer}
        </div>
      )}
    </div>
  );
};

const ContactBox: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex flex-col items-center text-center group cursor-default px-12 py-5 rounded-[2rem] border-2 border-transparent hover:border-[#4788f7]/20 hover:bg-slate-50/30 transition-all duration-500">
    <div className="bg-slate-50/80 p-5 rounded-2xl mb-6 group-hover:bg-blue-50 group-hover:scale-105 transition-all duration-500 shadow-sm relative overflow-hidden">
      <img src={icon} alt={title} className="w-8 h-8 object-contain relative z-10" />
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-[#4788f7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
    <h5 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1a202c] mb-3 group-hover:text-[#4788f7] transition-colors">{title}</h5>
    <p className="text-[13px] text-slate-500 font-bold max-w-[200px]">{text}</p>
  </div>
);

export default App;