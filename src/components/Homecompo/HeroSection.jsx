import React, { useState, useRef } from 'react';
import { ShoppingBag, Zap, Flame, Trophy, ArrowRight, Star, MessageSquare } from 'lucide-react';
import logo from "../../assets/logo.jpg";

const HeroSection = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);
      const phoneNumber = "919320001717";
    const message = "Hello! Baba, let me into the Loot! I want VIP access. 🔥"; 
          // WhatsApp SVG
    const WhatsAppIcon = () => (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    );
    const handleMouseMove = (e) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
         
        });
    };

    return (
        <>
            <style>
                {`
                /* FUSE BLINK EFFECT */
                @keyframes fuseBlink {
                    0%, 100% { opacity: 1; text-shadow: 0 0 20px rgba(247,162,33,0.8); }
                    10% { opacity: 0.4; text-shadow: none; }
                    12% { opacity: 1; text-shadow: 0 0 20px rgba(247,162,33,0.8); }
                    20% { opacity: 0.2; text-shadow: none; }
                    22% { opacity: 1; }
                }
                .hover-fuse:hover { animation: fuseBlink 0.4s infinite; }

                /* STAR WAVE ANIMATION */
                @keyframes starWave {
                    0%, 100% { transform: translateY(0); opacity: 1; color: #f7a221; }
                    50% { transform: translateY(8px); opacity: 0.5; color: #ffffff; }
                }
                .star-animate { animation: starWave 1.5s ease-in-out infinite; }
                
                /* TROPHY BEND TRANSITIONS */
                .trophy-main { transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
                .trophy-side { opacity: 0; transition: all 0.4s ease-out; transform: scale(0) translateY(20px); }
                .parent-card:hover .trophy-side-left { opacity: 1; transform: scale(1) translateX(-35px) translateY(-10px) rotate(-45deg); }
                .parent-card:hover .trophy-side-right { opacity: 1; transform: scale(1) translateX(35px) translateY(-10px) rotate(45deg); }
                .parent-card:hover .trophy-main { transform: translateY(-15px) scale(1.1); }
                `}
            </style>

            <section 
                ref={sectionRef}
                onMouseMove={handleMouseMove}
                className="relative w-full min-h-screen lg:min-h-[90vh] p-4 md:p-8 lg:p-12 bg-[#050505] overflow-hidden flex flex-col justify-center"
            >
                {/* INTERACTIVE GLOW */}
                <div 
                    className="absolute inset-0 z-0 pointer-events-none opacity-40"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(247, 162, 33, 0.12), transparent 80%)`
                    }}
                />

                <div className="relative z-10 max-w-[1500px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                    
                    {/* LEFT COLUMN: MAIN CONTENT */}
                    <div className="lg:col-span-7 flex flex-col  min-h-[500px] md:min-h-[600px] p-8 md:p-16 rounded-[3rem] bg-[#0a0a0a] border border-white/5 relative overflow-hidden group">
                        <div className="space-y-6 relative z-10">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                <span className="flex h-2 w-2 rounded-full bg-[#f7a221] animate-pulse"></span>
                                <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Wholesale Kingdom</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl lg:text-[5rem] font-black text-white leading-[0.8] tracking-tighter">
                                SHOP SMART <br />
                                <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #f7a221'}}>LIVE BIG.</span>
                            </h1>
                            
                            <p className="text-gray-400 text-base md:text-xl max-w-md font-medium leading-relaxed">
                                India's most aggressive prices on viral gadgets. Join the club of 10k+ smart shoppers.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 relative z-10 mt-8">
                            <button className="w-full md:w-auto px-10 py-5 bg-[#f7a221] text-black font-black rounded-2xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-[#f7a221]/10 uppercase">
                                SHOP THE SMARTER <ShoppingBag size={20} />
                            </button>
                            <button className="w-full md:w-auto px-8 py-5 bg-white/5 text-white  rounded-2xl hover:bg-white/10 transition-all border border-white/10 uppercase text-xs tracking-widest">
                                BABA'S CATALOG
                            </button>
                        </div>


{/* RIGHT COLUMN: INTERACTIVE GRID */}
                    <div style={{border:""}} className="lg:col-span-5 flex flex-col gap-0 lg:gap-6 mt-5">
                        
                        {/* 1. HOT DROPS CARD */}
                        <div className="flex-1 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 flex items-center justify-between group cursor-default relative overflow-hidden">
                            <div className="relative z-10">
                                {/* <div className="bg-[#f7a221]/10 text-[#f7a221] p-3 rounded-2xl w-fit mb-4">
                                    <Flame size={24} fill="currentColor" />
                                </div> */}
<div className="bg-[#f7a221]/10 text-[#f7a221] p-3 rounded-2xl w-fit mb-4 mx-auto">
    <Flame size={24} fill="currentColor" />
</div>

                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Hot Drops</h3>
                                <p className="text-gray-500 text-[14px] font-bold uppercase tracking-widest mt-1">Refreshed Every 24h</p>
                            </div>
        {/* <div className="text-7xl md:text-9xl font-black text-[#f7a221] hover-fuse transition-all duration-300 select-none cursor-default">
    #01
</div> */}

  <div className="parent-card bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-[#f7a221]/40 transition-all duration-500 cursor-pointer">
                                <div className="relative flex items-center justify-center mb-6 h-12 w-full">
                              
                                    <Trophy className="trophy-side trophy-side-left absolute text-[#f7a221]/40" size={28} />
                              
                                    <Trophy className="trophy-main text-[#f7a221] z-10" size={40} />
                            
                                    <Trophy className="trophy-side trophy-side-right absolute text-[#f7a221]/40" size={28} />
                                </div>
                                <p className="text-4xl font-black text-white group-hover:text-[#f7a221] hover-fuse transition-colors">10K+</p>
                                <p className="text-[14px] font-bold text-gray-500 uppercase tracking-widest mt-1">Looters Joined</p>
                            </div>
                        




   <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center group">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star 
                                            key={i} 
                                            size={16} 
                                            fill="currentColor" 
                                            className="star-animate"
                                            style={{ animationDelay: `${i * 0.15}s` }} 
                                        />
                                    ))}
                                </div>
                                <p className="text-4xl font-black text-white">4.9</p>
                                <p className="text-[14px] font-bold text-gray-500 uppercase tracking-widest mt-1">Customer Rating</p>
                            </div>

                        </div>

                     

        
                    
                    </div>







{/* RIGHT COLUMN: INTERACTIVE GRID */}
                    







                    </div>

                    {/* RIGHT COLUMN: INTERACTIVE GRID */}
                    <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6">
                        <img style={{borderRadius:"20px"}} width="100%" src={logo} alt="" />
                       

                        {/* 3. PROFESSIONAL WHATSAPP VIP CARD */}
                        <a 
                        
                             onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative bg-gradient-to-br from-[#0d1b15] to-[#050505] border border-[#25d366]/20 rounded-[2.5rem] p-8 group cursor-pointer overflow-hidden transition-all hover:border-[#25d366]/50"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#25d366]/5 blur-[80px] rounded-full group-hover:bg-[#25d366]/10 transition-all duration-700" />
                            
                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="p-4 bg-[#25d366] text-black rounded-2xl shadow-lg shadow-[#25d366]/20">
                                 
                                       <WhatsAppIcon size={32} fill="currentColor" />
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="flex h-2 w-2 rounded-full bg-[#25d366] animate-ping mb-2"></span>
                                    <p className="text-[10px] font-black text-[#25d366] uppercase tracking-[0.2em] bg-[#25d366]/10 px-3 py-1 rounded-full border border-[#25d366]/20">VIP Portal</p>
                                </div>
                            </div>

                            <div className="space-y-2 relative z-10">
                                <h4 className="text-3xl font- text-white uppercase tracking-tight">VIP WHATSAPP ACCESS</h4>
                                <p className="text-gray-400 text-xs leading-relaxed max-w-[280px] font-medium">
                                    Join <span className="text-white font-bold">5,000+ members</span> and get instant loot alerts before items sell out on the site.
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-3 text-[#25d366]  text-xs uppercase tracking-[0.2em] group-hover:gap-5 transition-all relative z-10">
                                CLAIM YOUR INVITE <ArrowRight size={16} />
                            </div>
                        </a>
                    </div>
                </div>

                {/* SCROLL INDICATOR */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-20">
                    <p className="text-[9px] font-bold text-white uppercase tracking-[0.5em]">Loot Protocol</p>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                </div>
            </section>


            <style jsx>{`
              .hover-fuse {
  animation: flicker 1.5s infinite;
}
            `}</style>
        </>
    );
};

export default HeroSection;








// import React, { useState, useRef } from 'react';
// import { ShoppingBag, Zap, Flame, Trophy, ArrowRight, Star, MessageSquare } from 'lucide-react';
// import logo from "../../assets/logo.jpg";

// const HeroSection = () => {
//     const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//     const sectionRef = useRef(null);
//     const phoneNumber = "919320001717";
//     const message = "Hello! Baba, let me into the Loot! I want VIP access. 🔥"; 
    
//     // WhatsApp SVG
//     const WhatsAppIcon = () => (
//         <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
//             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//         </svg>
//     );

//     const handleMouseMove = (e) => {
//         if (!sectionRef.current) return;
//         const rect = sectionRef.current.getBoundingClientRect();
//         setMousePos({
//             x: e.clientX - rect.left,
//             y: e.clientY - rect.top,
//         });
//     };

//     return (
//         <>
//             <style>
//                 {`
//                 /* FUSE BLINK EFFECT */
//                 @keyframes fuseBlink {
//                     0%, 100% { opacity: 1; text-shadow: 0 0 20px rgba(247,162,33,0.8); }
//                     10% { opacity: 0.4; text-shadow: none; }
//                     12% { opacity: 1; text-shadow: 0 0 20px rgba(247,162,33,0.8); }
//                     20% { opacity: 0.2; text-shadow: none; }
//                     22% { opacity: 1; }
//                 }
//                 .hover-fuse:hover { animation: fuseBlink 0.4s infinite; }

//                 /* STAR WAVE ANIMATION */
//                 @keyframes starWave {
//                     0%, 100% { transform: translateY(0); opacity: 1; color: #f7a221; }
//                     50% { transform: translateY(8px); opacity: 0.5; color: #ffffff; }
//                 }
//                 .star-animate { animation: starWave 1.5s ease-in-out infinite; }
                
//                 /* TROPHY BEND TRANSITIONS */
//                 .trophy-main { transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
//                 .trophy-side { opacity: 0; transition: all 0.4s ease-out; transform: scale(0) translateY(20px); }
//                 .parent-card:hover .trophy-side-left { opacity: 1; transform: scale(1) translateX(-35px) translateY(-10px) rotate(-45deg); }
//                 .parent-card:hover .trophy-side-right { opacity: 1; transform: scale(1) translateX(35px) translateY(-10px) rotate(45deg); }
//                 .parent-card:hover .trophy-main { transform: translateY(-15px) scale(1.1); }

//                 /* LOGO ANIMATIONS */
//                 @keyframes floatGlow {
//                     0%, 100% { filter: drop-shadow(0 10px 15px rgba(247,162,33,0.3)) brightness(1); transform: translateY(0) scale(1); }
//                     50% { filter: drop-shadow(0 25px 25px rgba(247,162,33,0.6)) brightness(1.2); transform: translateY(-10px) scale(1.02); }
//                 }
//                 .logo-float { animation: floatGlow 4s ease-in-out infinite; }

//                 @keyframes glitch {
//                     0%, 100% { clip-path: inset(0 0 0 0); transform: skew(0deg); }
//                     5% { clip-path: inset(2px 0 5px 0); transform: skew(2deg); }
//                     10% { clip-path: inset(5px 0 2px 0); transform: skew(-2deg); }
//                     15% { clip-path: inset(0 0 0 0); transform: skew(0deg); }
//                 }
//                 .logo-glitch:hover { animation: glitch 0.5s infinite; }

//                 @keyframes borderRotate {
//                     0% { transform: rotate(0deg); }
//                     100% { transform: rotate(360deg); }
//                 }
//                 .logo-border-rotate { animation: borderRotate 8s linear infinite; }

//                 /* WAVY CLIP PATH */
//                 .hero-wavy-clip {
//                     clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 95% 88%, 90% 92%, 85% 95%, 80% 97%, 75% 98%, 70% 99%, 65% 99.5%, 60% 100%, 55% 99.8%, 50% 99%, 45% 98%, 40% 96%, 35% 93%, 30% 90%, 25% 87%, 20% 85%, 15% 83%, 10% 82%, 5% 81%, 0% 80%);
//                 }

//                 /* CORNER ACCENTS */
//                 .corner-accent {
//                     position: absolute;
//                     width: 60px;
//                     height: 60px;
//                     border: 2px solid #f7a221;
//                     opacity: 0.3;
//                     transition: all 0.3s ease;
//                 }
//                 .corner-accent:hover { opacity: 0.8; transform: scale(1.1); }
//                 .corner-tl { top: 20px; left: 20px; border-right: none; border-bottom: none; }
//                 .corner-tr { top: 20px; right: 20px; border-left: none; border-bottom: none; }
//                 .corner-bl { bottom: 20px; left: 20px; border-right: none; border-top: none; }
//                 .corner-br { bottom: 20px; right: 20px; border-left: none; border-top: none; }
//                 `}
//             </style>

//             <section 
//                 ref={sectionRef}
//                 onMouseMove={handleMouseMove}
//                 className="relative w-full min-h-screen lg:min-h-[90vh] p-4 md:p-8 lg:p-12 bg-[#050505] overflow-hidden flex flex-col justify-center hero-wavy-clip"
//             >
//                 {/* INTERACTIVE GLOW */}
//                 <div 
//                     className="absolute inset-0 z-0 pointer-events-none opacity-40"
//                     style={{
//                         background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(247, 162, 33, 0.12), transparent 80%)`
//                     }}
//                 />

//                 {/* WAVY BACKGROUND LINES */}
//                 <div className="absolute inset-0 opacity-10">
//                     <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
//                         <path d="M0,300 Q300,250 600,300 T1200,300" stroke="#f7a221" fill="none" strokeWidth="2"/>
//                         <path d="M0,400 Q300,350 600,400 T1200,400" stroke="#f7a221" fill="none" strokeWidth="2"/>
//                         <path d="M0,500 Q300,450 600,500 T1200,500" stroke="#f7a221" fill="none" strokeWidth="2"/>
//                     </svg>
//                 </div>

//                 {/* CORNER ACCENTS */}
//                 <div className="corner-accent corner-tl"></div>
//                 <div className="corner-accent corner-tr"></div>
//                 <div className="corner-accent corner-bl"></div>
//                 <div className="corner-accent corner-br"></div>

//                 <div className="relative z-10 max-w-[1500px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                    
//                     {/* LEFT COLUMN: MAIN CONTENT */}
//                     <div className="lg:col-span-7 flex flex-col min-h-[500px] md:min-h-[600px] p-8 md:p-16 rounded-[3rem] bg-[#0a0a0a] border border-white/5 relative overflow-hidden group">
//                         <div className="space-y-6 relative z-10">
//                             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
//                                 <span className="flex h-2 w-2 rounded-full bg-[#f7a221] animate-pulse"></span>
//                                 <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Wholesale Kingdom</span>
//                             </div>

//                             <h1 className="text-6xl md:text-8xl lg:text-[5rem] font-black text-white leading-[0.8] tracking-tighter">
//                                 SHOP SMART <br />
//                                 <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #f7a221'}}>LIVE BIG.</span>
//                             </h1>
                            
//                             <p className="text-gray-400 text-base md:text-xl max-w-md font-medium leading-relaxed">
//                                 India's most aggressive prices on viral gadgets. Join the club of 10k+ smart shoppers.
//                             </p>
//                         </div>

//                         <div className="flex flex-wrap gap-4 relative z-10 mt-8">
//                             <button className="w-full md:w-auto px-10 py-5 bg-[#f7a221] text-black font-black rounded-2xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-[#f7a221]/10 uppercase">
//                                 SHOP THE SMARTER <ShoppingBag size={20} />
//                             </button>
//                             <button className="w-full md:w-auto px-8 py-5 bg-white/5 text-white rounded-2xl hover:bg-white/10 transition-all border border-white/10 uppercase text-xs tracking-widest">
//                                 BABA'S CATALOG
//                             </button>
//                         </div>

//                         {/* INTERACTIVE GRID */}
//                         <div className="lg:col-span-5 flex flex-col gap-0 lg:gap-6 mt-5">
                            
//                             {/* HOT DROPS CARD */}
//                             <div className="flex-1 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 flex items-center justify-between group cursor-default relative overflow-hidden">
//                                 <div className="relative z-10">
//                                     <div className="bg-[#f7a221]/10 text-[#f7a221] p-3 rounded-2xl w-fit mb-4 mx-auto">
//                                         <Flame size={24} fill="currentColor" />
//                                     </div>

//                                     <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Hot Drops</h3>
//                                     <p className="text-gray-500 text-[14px] font-bold uppercase tracking-widest mt-1">Refreshed Every 24h</p>
//                                 </div>

//                                 <div className="parent-card bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-[#f7a221]/40 transition-all duration-500 cursor-pointer">
//                                     <div className="relative flex items-center justify-center mb-6 h-12 w-full">
//                                         <Trophy className="trophy-side trophy-side-left absolute text-[#f7a221]/40" size={28} />
//                                         <Trophy className="trophy-main text-[#f7a221] z-10" size={40} />
//                                         <Trophy className="trophy-side trophy-side-right absolute text-[#f7a221]/40" size={28} />
//                                     </div>
//                                     <p className="text-4xl font-black text-white group-hover:text-[#f7a221] hover-fuse transition-colors">10K+</p>
//                                     <p className="text-[14px] font-bold text-gray-500 uppercase tracking-widest mt-1">Looters Joined</p>
//                                 </div>

//                                 <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center group">
//                                     <div className="flex gap-1 mb-4">
//                                         {[...Array(5)].map((_, i) => (
//                                             <Star 
//                                                 key={i} 
//                                                 size={16} 
//                                                 fill="currentColor" 
//                                                 className="star-animate"
//                                                 style={{ animationDelay: `${i * 0.15}s` }} 
//                                             />
//                                         ))}
//                                     </div>
//                                     <p className="text-4xl font-black text-white">4.9</p>
//                                     <p className="text-[14px] font-bold text-gray-500 uppercase tracking-widest mt-1">Customer Rating</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* RIGHT COLUMN: ENHANCED CREATIVE LOGO */}
//                     <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6">
//                         {/* CREATIVE LOGO CONTAINER */}
//                         <div className="relative group perspective">
//                             {/* Rotating Border */}
//                             <div className="absolute -inset-1 bg-gradient-to-r from-[#f7a221] via-white to-[#f7a221] rounded-[2.5rem] opacity-75 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                            
//                             {/* Main Logo Container */}
//                             <div className="relative bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-[2.5rem] p-1 overflow-hidden">
//                                 {/* Animated Border */}
//                                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f7a221] to-transparent opacity-30 group-hover:opacity-60 animate-logo-border-rotate"></div>
                                
//                                 {/* Logo Image with Creative Effects */}
//                                 <div className="relative rounded-[2.3rem] overflow-hidden">
//                                     {/* Floating Effect */}
//                                     <img 
//                                         src={logo} 
//                                         alt="Logo" 
//                                         className="w-full h-auto object-cover logo-float group-hover:scale-105 transition-transform duration-700"
//                                     />
                                    
//                                     {/* Overlay Effects */}
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
//                                     {/* Hover Glitch Text */}
//                                     <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//                                         <p className="text-white text-sm font-bold bg-black/50 backdrop-blur-sm p-3 rounded-xl inline-block">
//                                             OFFER WALE BABA
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
                            
//                             {/* Decorative Elements */}
//                             <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#f7a221]/20 rounded-full blur-2xl group-hover:bg-[#f7a221]/30 transition-all duration-500"></div>
//                             <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#f7a221]/20 rounded-full blur-2xl group-hover:bg-[#f7a221]/30 transition-all duration-500"></div>
                            
//                             {/* Floating Badges */}
//                             <div className="absolute -top-6 -left-6 bg-[#f7a221] text-black px-4 py-2 rounded-full text-xs font-black rotate-[-15deg] shadow-2xl animate-bounce">
//                                 🔥 HOT
//                             </div>
//                             <div className="absolute -bottom-6 -right-6 bg-white text-black px-4 py-2 rounded-full text-xs font-black rotate-[15deg] shadow-2xl animate-pulse">
//                                 VIP
//                             </div>
//                         </div>

//                         {/* WHATSAPP VIP CARD */}
//                         <a 
//                             onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="relative bg-gradient-to-br from-[#0d1b15] to-[#050505] border border-[#25d366]/20 rounded-[2.5rem] p-8 group cursor-pointer overflow-hidden transition-all hover:border-[#25d366]/50"
//                         >
//                             <div className="absolute top-0 right-0 w-64 h-64 bg-[#25d366]/5 blur-[80px] rounded-full group-hover:bg-[#25d366]/10 transition-all duration-700" />
                            
//                             <div className="flex justify-between items-start mb-6 relative z-10">
//                                 <div className="p-4 bg-[#25d366] text-black rounded-2xl shadow-lg shadow-[#25d366]/20">
//                                     <WhatsAppIcon size={32} fill="currentColor" />
//                                 </div>
//                                 <div className="flex flex-col items-end">
//                                     <span className="flex h-2 w-2 rounded-full bg-[#25d366] animate-ping mb-2"></span>
//                                     <p className="text-[10px] font-black text-[#25d366] uppercase tracking-[0.2em] bg-[#25d366]/10 px-3 py-1 rounded-full border border-[#25d366]/20">VIP Portal</p>
//                                 </div>
//                             </div>

//                             <div className="space-y-2 relative z-10">
//                                 <h4 className="text-3xl text-white uppercase tracking-tight">VIP WHATSAPP ACCESS</h4>
//                                 <p className="text-gray-400 text-xs leading-relaxed max-w-[280px] font-medium">
//                                     Join <span className="text-white font-bold">5,000+ members</span> and get instant loot alerts before items sell out on the site.
//                                 </p>
//                             </div>

//                             <div className="mt-8 flex items-center gap-3 text-[#25d366] text-xs uppercase tracking-[0.2em] group-hover:gap-5 transition-all relative z-10">
//                                 CLAIM YOUR INVITE <ArrowRight size={16} />
//                             </div>
//                         </a>
//                     </div>
//                 </div>

//                 {/* SCROLL INDICATOR */}
//                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-20">
//                     <p className="text-[9px] font-bold text-white uppercase tracking-[0.5em]">Loot Protocol</p>
//                     <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
//                 </div>
//             </section>
//         </>
//     );
// };

// export default HeroSection;






























































