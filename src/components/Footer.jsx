import React from 'react';
import { 
  Facebook, Instagram, Youtube, ShieldCheck, Star, Award, 
  ChevronRight, Zap,Briefcase,Globe
} from 'lucide-react';
import logo from "../assets/logo.jpg"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    { title: "Ecosystem", items: ["What is Drop Shipping", "Franchise", "Become Vendor", "Wholesale Signup", "VIP Customers"] },
    { title: "Assistance", items: ["Contact Us", "Shipping Policy", "Return & Refund", "Privacy Policy", "Grievance Redressal"] },
    { title: "Resources", items: ["Influencer Form", "Blogs", "FAQs", "Shipment Tracking", "Store Locator"] },
    { title: "Solutions", items: ["Brand Drop Shipping", "Shopify Website", "B2B Drop Shipping", "Reseller Plan"] }
  ];

  return (
    <footer className="relative bg-[#050505] text-gray-400 pt-32 pb-12 overflow-hidden font-sans selection:bg-[#f7a221] selection:text-black">
      
      {/* --- BACKGROUND WATERMARK (BABA) WITH INTEGRATED PRECISION NEON --- */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <svg 
          viewBox="0 0 1000 400" 
          className="w-[120vw] h-auto opacity-40" 
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* High-end architectural glow filter */}
            <filter id="neon-glow-premium" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* SHARED TEXT GROUP: Ensures the heavy fill and the neon line are perfectly pixel-aligned */}
          <g className="baba-master-group">
            {/* 1. The Heavy Background Fill (The "Big BABA" Text) */}
            <text 
              x="50%" y="50%" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              className="text-fill-base"
            >
              BABA
            </text>

            {/* 2. The Precision Running Neon Border (The "Electricity" Layer) */}
            <text 
              x="50%" y="50%" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              className="text-neon-border"
              filter="url(#neon-glow-premium)"
            >
              BABA
            </text>
          </g>
        </svg>
      </div>

      {/* --- AMBIENT LIGHT EFFECTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[600px] bg-[#f7a221]/[0.05] rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        
        {/* CENTERED LOGO SECTION */}
        <div className="flex flex-col items-center text-center mb-24">
            <div className="relative group inline-block">
                <div className="absolute -inset-10 bg-[#f7a221]/20 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
                
                <div className="flex items-center justify-center gap-4 mb-8">
                    <span className="h-[1.5px] w-12 bg-[#f7a221]"></span>
                    <span className="text-[#f7a221] font-black text-[12px] tracking-[0.6em] uppercase">
                      OfferwaleBaba Exclusive
                    </span>
                    <span className="h-[1.5px] w-12 bg-[#f7a221]"></span>
                </div>
                
                <h1 
                    className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.75] uppercase italic bg-cover bg-center bg-no-repeat"
                    style={{ 
                        backgroundImage: `url(${logo})`,
                        backgroundSize: 'cover',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0px 10px 30px rgba(0,0,0,0.5))'
                    }}
                >
                    Offerwale <br /> 
                    BABA
                </h1>
                
                <h2 className="mt-8 text-2xl md:text-3xl font-black text-white tracking-tighter max-w-2xl mx-auto uppercase italic">
                    The New Standard of <span className="text-[#f7a221] not-italic">Indian Minimalism</span>
                </h2>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
                {[
                  { icon: "fa-whatsapp", color: "hover:bg-[#25D366]" },
                  { icon: "fa-telegram", color: "hover:bg-[#0088cc]" },
                  { icon: "fa-instagram", color: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]" },
                  { icon: "fa-facebook", color: "hover:bg-[#1877F2]" },
                  { icon: "fa-youtube", color: "hover:bg-[#FF0000]" },
                  { icon: "fa-threads", color: "hover:bg-black border-white/20" },
                  { icon: "fa-google", color: "hover:bg-[#4285F4]", label: "Google" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`p-4 bg-white/5 border border-white/10 rounded-2xl text-gray-400
                                hover:text-white hover:-translate-y-2 hover:shadow-2xl
                                transition-all duration-500 ${social.color}`}
                  >
                    <i className={`fa-brands ${social.icon} text-2xl`} />
                  </a>
                ))}
            </div>
        </div>

        {/* MAIN FOOTER CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-16 mb-24 border-t border-white/5 pt-24">
            <div className="lg:col-span-5 space-y-8">
                <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 group">
                   <iframe
                    title="location"
                    src="https://www.google.com/maps?q=19.2092622,73.1663272&z=16&output=embed"
                    className="w-full h-full border-0 grayscale invert opacity-40 
                               group-hover:opacity-100 group-hover:grayscale-0 
                               transition-all duration-1000"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex gap-8">
                    <div>
                        <p className="text-[#f7a221] font-black text-[10px] tracking-widest uppercase mb-2">Support</p>
                        <p className="text-white font-bold text-lg">+91 99999 00000</p>
                    </div>
                    <div>
                        <p className="text-[#f7a221] font-black text-[10px] tracking-widest uppercase mb-2">Location</p>
                        <p className="text-white font-bold text-lg">Maharashtra, India</p>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
                {footerSections.map((section, idx) => (
                    <div key={idx} className="space-y-6">
                        <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                            <div className="h-px w-3 bg-[#f7a221]"></div>
                            {section.title}
                        </h4>
                        <ul className="space-y-3">
                            {section.items.map((item, i) => (
                                <li key={i} className="group flex items-center text-sm font-semibold text-white cursor-pointer">
                                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-[#f7a221]">
                                        <ChevronRight size={14} />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>



{/* TRUST SECTION */}
<div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 flex flex-wrap justify-between items-center gap-8 mb-12">
    <div className="flex flex-wrap gap-12 items-center">
        {/* IndiaMart Section */}
        <div className="flex items-center gap-4 group">
            <div className="p-3 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20 transition-all">
                <ShieldCheck size={40} className="text-blue-500" strokeWidth={1.5} />
            </div>
            <div>
                <p className="text-white font-black text-xl italic uppercase tracking-tighter">IndiaMart</p>
                <p className="text-[10px] uppercase font-bold text-gray-500 group-hover:text-blue-400 transition-colors">Gold Verified</p>
            </div>
        </div>

        {/* TradeIndia Section */}
        <div className="flex items-center gap-4 group">
            <div className="p-3 bg-[#f7a221]/10 rounded-2xl group-hover:bg-[#f7a221]/20 transition-all">
                <Briefcase size={40} className="text-[#f7a221]" strokeWidth={1.5} />
            </div>
            <div>
                <p className="text-white font-black text-xl italic uppercase tracking-tighter">Trade India</p>
                <p className="text-[10px] uppercase font-bold text-gray-500 group-hover:text-[#f7a221] transition-colors">Premium Member</p>
            </div>
        </div>

        {/* ExportersIndia Section */}
        <div className="flex items-center gap-4 group">
            <div className="p-3 bg-green-500/10 rounded-2xl group-hover:bg-green-500/20 transition-all">
                <Globe size={40} className="text-green-500" strokeWidth={1.5} />
            </div>
            <div>
                <p className="text-white font-black text-xl italic uppercase tracking-tighter">Export India</p>
                <p className="text-[10px] uppercase font-bold text-gray-500 group-hover:text-green-400 transition-colors">Global Trust</p>
            </div>
        </div>
    </div>
    
    {/* Ratings Section */}
    <div className="flex items-center gap-6 px-8 py-4 bg-black/40 rounded-3xl border border-white/5 backdrop-blur-sm hover:border-[#f7a221]/30 transition-all">
        <div className="flex -space-x-3">
            {[1,2,3,4,5].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-zinc-800 flex items-center justify-center hover:-translate-y-1 transition-transform">
                   <Star size={12} fill="#f7a221" className="text-[#f7a221]" />
                </div>
            ))}
        </div>
        <div>
            <div className="flex items-center gap-1">
                <p className="text-white font-black text-2xl leading-none">4.9</p>
                <span className="text-[#f7a221] text-xs">★★★★★</span>
            </div>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Trustpilot Score</p>
        </div>
    </div>
</div>
        {/* TRUST SECTION */}
        {/* <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 flex flex-wrap justify-between items-center gap-8 mb-12">
            <div className="flex flex-wrap gap-12 items-center">
                <div className="flex items-center gap-4">
                    <Award size={40} className="text-[#f7a221]" strokeWidth={1} />
                    <div>
                        <p className="text-white font-black text-xl italic uppercase">ISO 9001</p>
                        <p className="text-[10px] uppercase font-bold text-gray-600">Certified Quality</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <ShieldCheck size={40} className="text-blue-500" strokeWidth={1} />
                    <div>
                        <p className="text-white font-black text-xl italic uppercase">IndiaMart</p>
                        <p className="text-[10px] uppercase font-bold text-gray-600">Gold Verified</p>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center gap-6 px-8 py-4 bg-black/40 rounded-3xl border border-white/5">
                <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-zinc-800 flex items-center justify-center">
                           <Star size={12} fill="#f7a221" className="text-[#f7a221]" />
                        </div>
                    ))}
                </div>
                <div>
                    <p className="text-white font-black text-xl leading-none">4.9/5</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">User Rating</p>
                </div>
            </div>
        </div> */}

        {/* COPYRIGHT BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-12">
            <p className="text-[10px] text-gray-700 font-bold uppercase tracking-[0.2em] text-center md:text-left">
                © {currentYear} Offer Wale Baba International • GSTIN: 24AAHCD5265C1ZX
            </p>
            <div className="flex items-center gap-4 bg-[#f7a221]/10 px-6 py-2 rounded-full border border-[#f7a221]/20">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]"></div>
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Global Operations Live</span>
            </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.05); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 12s infinite ease-in-out alternate; }

        /* SHARED TYPOGRAPHY - Ensures pixel-perfect alignment */
        .text-fill-base, .text-neon-border {
          font-family: sans-serif;
          font-weight: 900;
          font-size: 380px;
          letter-spacing: -24px;
        }

        /* 1. The Heavy Background */
        .text-fill-base {
          fill: rgba(255, 255, 255, 0.2);
        }

        /* 2. The Precision Neon Border Animation */
        .text-neon-border {
          fill: transparent;
          stroke: #f7a221;
          stroke-width: 3px;
          stroke-dasharray: 200 1200;
          animation: precisionRun 14s linear infinite;
        }
 
        @keyframes precisionRun {
          from { stroke-dashoffset: 1400; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;


//  import React from 'react';

// import { 

//   Facebook, Instagram, Youtube, ShieldCheck, Star, Award, 

//   ChevronRight, Zap

// } from 'lucide-react';

// import logo from "../assets/logo.jpg"; // Your logo asset



// const Footer = () => {

//   const currentYear = new Date().getFullYear();



//   const footerSections = [

//     { title: "Ecosystem", items: ["What is Drop Shipping", "Franchise", "Become Vendor", "Wholesale Signup", "VIP Customers"] },

//     { title: "Assistance", items: ["Contact Us", "Shipping Policy", "Return & Refund", "Privacy Policy", "Grievance Redressal"] },

//     { title: "Resources", items: ["Influencer Form", "Blogs", "FAQs", "Shipment Tracking", "Store Locator"] },

//     { title: "Solutions", items: ["Brand Drop Shipping", "Shopify Website", "B2B Drop Shipping", "Reseller Plan"] }

//   ];



//   return (

//     <footer className="relative bg-[#050505] text-gray-400 pt-32 pb-12 overflow-hidden font-sans selection:bg-[#f7a221] selection:text-black">

      

//       {/* --- BACKGROUND WATERMARK (BABA) --- */}

//       {/* EDIT VISIBILITY: change opacity-[0.05] for background BABA */}

//       <div className="absolute inset-0 flex items-center justify-center opacity-[0.09] select-none pointer-events-none z-0">

//         <h2 className="text-[45vw] font-black leading-none uppercase tracking-tighter text-white">

//           BABA

//         </h2>

//       </div>



//       {/* --- AMBIENT LIGHT EFFECTS --- */}

//       <div className="absolute inset-0 pointer-events-none">

//         <div className="absolute top-0 left-1/4 w-[1000px] h-[600px] bg-[#f7a221]/[0.05] rounded-full blur-[120px] animate-blob"></div>

//         <div className="absolute bottom-0 right-1/4 w-[800px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[120px] animate-blob animation-delay-4000"></div>

//       </div>



//       <div className="container relative z-10 mx-auto px-6 lg:px-12">

        

//         {/* CENTERED LOGO SECTION */}

//         <div className="flex flex-col items-center text-center mb-24">

//             <div className="relative group inline-block">

//                 {/* GLOW EFFECT BEHIND LOGO */}

//                 <div className="absolute -inset-10 bg-[#f7a221]/20 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>

                

//                 {/* TOP TAGLINE */}

//                 <div className="flex items-center justify-center gap-4 mb-8">

//                     <span className="h-[1.5px] w-12 bg-[#f7a221]"></span>

//                     <span className="text-[#f7a221] font-black text-[12px] tracking-[0.6em] uppercase">

//                       OfferwaleBaba Exclusive

//                     </span>

//                     <span className="h-[1.5px] w-12 bg-[#f7a221]"></span>

//                 </div>

                

//                 {/* MASSIVE CLIPPED TEXT LOGO */}

//                 <h1 

//                     className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.75] uppercase italic bg-cover bg-center bg-no-repeat"

//                     style={{ 

//                         backgroundImage: `url(${logo})`,

//                         backgroundSize: 'cover',

//                         WebkitBackgroundClip: 'text',

//                         WebkitTextFillColor: 'transparent',

//                         filter: 'drop-shadow(0px 10px 30px rgba(0,0,0,0.5))'

//                     }}

//                 >

//                     Offerwale <br /> 

//                     BABA

//                 </h1>

                

//                 <h2 className="mt-8 text-2xl md:text-3xl font-black text-white tracking-tighter max-w-2xl mx-auto uppercase italic">

//                     The New Standard of <span className="text-[#f7a221] not-italic">Indian Minimalism</span>

//                 </h2>

//             </div>



//             {/* SOCIAL CONNECT CENTERED */}

//             <div className="mt-12 flex flex-wrap justify-center gap-3">

//                 {[

//                   { icon: "fa-whatsapp", color: "hover:bg-[#25D366]" },

//                   { icon: "fa-telegram", color: "hover:bg-[#0088cc]" },

//                   { icon: "fa-instagram", color: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]" },

//                   { icon: "fa-facebook", color: "hover:bg-[#1877F2]" },

//                   { icon: "fa-youtube", color: "hover:bg-[#FF0000]" },

//                   { icon: "fa-threads", color: "hover:bg-black border-white/20" },

//                   { icon: "fa-google", color: "hover:bg-[#4285F4]", label: "Google" },

//                 ].map((social, i) => (

//                   <a

//                     key={i}

//                     href="#"

//                     className={`p-4 bg-white/5 border border-white/10 rounded-2xl text-gray-400

//                                 hover:text-white hover:-translate-y-2 hover:shadow-2xl

//                                 transition-all duration-500 ${social.color}`}

//                   >

//                     <i className={`fa-brands ${social.icon} text-2xl`} />

//                   </a>

//                 ))}

//             </div>

//         </div>



//         {/* MAIN FOOTER CONTENT GRID */}

//         <div className="grid lg:grid-cols-12 gap-16 mb-24 border-t border-white/5 pt-24">

            

//             {/* Map and Details */}

//             <div className="lg:col-span-5 space-y-8">

//                 <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 group">

//                   <iframe

//                     title="location"

//                     src="https://www.google.com/maps?q=19.2092622,73.1663272&z=16&output=embed"

//                     className="w-full h-full border-0 grayscale invert opacity-40 

//                               group-hover:opacity-100 group-hover:grayscale-0 

//                               transition-all duration-1000"

//                     loading="lazy"

//                     referrerPolicy="no-referrer-when-downgrade"

//                   />

//                 </div>

//                 <div className="flex gap-8">

//                     <div>

//                         <p className="text-[#f7a221] font-black text-[10px] tracking-widest uppercase mb-2">Support</p>

//                         <p className="text-white font-bold text-lg">+91 99999 00000</p>

//                     </div>

//                     <div>

//                         <p className="text-[#f7a221] font-black text-[10px] tracking-widest uppercase mb-2">Location</p>

//                         <p className="text-white font-bold text-lg">Maharashtra, India</p>

//                     </div>

//                 </div>

//             </div>



//             {/* Links Grid */}

//             <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">

//                 {footerSections.map((section, idx) => (

//                     <div key={idx} className="space-y-6">

//                         <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">

//                             <div className="h-px w-3 bg-[#f7a221]"></div>

//                             {section.title}

//                         </h4>

//                         <ul className="space-y-3">

//                             {section.items.map((item, i) => (

//                                 <li key={i} className="group flex items-center text-sm font-semibold text-white cursor-pointer">

//                                     <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-[#f7a221]">

//                                         <ChevronRight size={14} />

//                                     </span>

//                                     {item}

//                                 </li>

//                             ))}

//                         </ul>

//                     </div>

//                 ))}

//             </div>

//         </div>



//         {/* TRUST SECTION */}

//         <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 flex flex-wrap justify-between items-center gap-8 mb-12">

//             <div className="flex flex-wrap gap-12 items-center">

//                 <div className="flex items-center gap-4">

//                     <Award size={40} className="text-[#f7a221]" strokeWidth={1} />

//                     <div>

//                         <p className="text-white font-black text-xl italic uppercase">ISO 9001</p>

//                         <p className="text-[10px] uppercase font-bold text-gray-600">Certified Quality</p>

//                     </div>

//                 </div>

//                 <div className="flex items-center gap-4">

//                     <ShieldCheck size={40} className="text-blue-500" strokeWidth={1} />

//                     <div>

//                         <p className="text-white font-black text-xl italic uppercase">IndiaMart</p>

//                         <p className="text-[10px] uppercase font-bold text-gray-600">Gold Verified</p>

//                     </div>

//                 </div>

//             </div>

            

//             <div className="flex items-center gap-6 px-8 py-4 bg-black/40 rounded-3xl border border-white/5">

//                 <div className="flex -space-x-3">

//                     {[1,2,3,4].map(i => (

//                         <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-zinc-800 flex items-center justify-center">

//                            <Star size={12} fill="#f7a221" className="text-[#f7a221]" />

//                         </div>

//                     ))}

//                 </div>

//                 <div>

//                     <p className="text-white font-black text-xl leading-none">4.9/5</p>

//                     <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">User Rating</p>

//                 </div>

//             </div>

//         </div>



//         {/* COPYRIGHT BAR */}

//         <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-12">

//             <p className="text-[10px] text-gray-700 font-bold uppercase tracking-[0.2em] text-center md:text-left">

//                 © {currentYear} Offer Wale Baba International • GSTIN: 24AAHCD5265C1ZX

//             </p>

//             <div className="flex items-center gap-4 bg-[#f7a221]/10 px-6 py-2 rounded-full border border-[#f7a221]/20">

//                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]"></div>

//                 <span className="text-[10px] font-black text-white uppercase tracking-widest">Global Operations Live</span>

//             </div>

//         </div>

//       </div>



//       <style jsx>{`

//         @keyframes blob {

//           0% { transform: translate(0px, 0px) scale(1); }

//           50% { transform: translate(20px, -30px) scale(1.05); }

//           100% { transform: translate(0px, 0px) scale(1); }

//         }

//         .animate-blob { animation: blob 12s infinite ease-in-out alternate; }

//       `}</style>

//     </footer>

//   );

// };



// export default Footer;

// import React from 'react';
// import { 
//   Facebook, Instagram, Youtube, ShieldCheck, Star, Award, 
//   ChevronRight, Zap
// } from 'lucide-react';
// import logo from "../assets/logo.jpg"; // Your logo asset

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerSections = [
//     { title: "Ecosystem", items: ["What is Drop Shipping", "Franchise", "Become Vendor", "Wholesale Signup", "VIP Customers"] },
//     { title: "Assistance", items: ["Contact Us", "Shipping Policy", "Return & Refund", "Privacy Policy", "Grievance Redressal"] },
//     { title: "Resources", items: ["Influencer Form", "Blogs", "FAQs", "Shipment Tracking", "Store Locator"] },
//     { title: "Solutions", items: ["Brand Drop Shipping", "Shopify Website", "B2B Drop Shipping", "Reseller Plan"] }
//   ];

//   return (
//     <footer className="relative bg-[#050505] text-gray-400 pt-32 pb-12 overflow-hidden font-sans selection:bg-[#f7a221] selection:text-black">
      
//       {/* --- UPDATED: BACKGROUND WATERMARK (BABA) WITH ANIMATED STROKE --- */}
//       <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
//         <svg className="w-full h-full opacity-[0.20]" viewBox="0 0 1000 400">
//           <text
//             x="50%"
//             y="50%"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             className="animated-text-outline font-black"
//             style={{
//               fontSize: '400px',
//               fill: 'transparent',
//               stroke: '#f7a221',
//               strokeWidth: '1.5',
//               letterSpacing: '-20px',
//               textTransform: 'uppercase'
//             }}
//           >
//             BABA
//           </text>
//         </svg>
//       </div>

//       {/* --- AMBIENT LIGHT EFFECTS --- */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-[1000px] h-[600px] bg-[#f7a221]/[0.05] rounded-full blur-[120px] animate-blob"></div>
//         <div className="absolute bottom-0 right-1/4 w-[800px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
//       </div>

//       <div className="container relative z-10 mx-auto px-6 lg:px-12">
        
//         {/* CENTERED LOGO SECTION */}
//         <div className="flex flex-col items-center text-center mb-24">
//             <div className="relative group inline-block">
//                 {/* GLOW EFFECT BEHIND LOGO */}
//                 <div className="absolute -inset-10 bg-[#f7a221]/20 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
                
//                 {/* TOP TAGLINE */}
//                 <div className="flex items-center justify-center gap-4 mb-8">
//                     <span className="h-[1.5px] w-12 bg-[#f7a221]"></span>
//                     <span className="text-[#f7a221] font-black text-[12px] tracking-[0.6em] uppercase">
//                       OfferwaleBaba Exclusive
//                     </span>
//                     <span className="h-[1.5px] w-12 bg-[#f7a221]"></span>
//                 </div>
                
//                 {/* MASSIVE CLIPPED TEXT LOGO */}
//                 <h1 
//                     className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.75] uppercase italic bg-cover bg-center bg-no-repeat"
//                     style={{ 
//                         backgroundImage: `url(${logo})`,
//                         backgroundSize: 'cover',
//                         WebkitBackgroundClip: 'text',
//                         WebkitTextFillColor: 'transparent',
//                         filter: 'drop-shadow(0px 10px 30px rgba(0,0,0,0.5))'
//                     }}
//                 >
//                     Offerwale <br /> 
//                     BABA
//                 </h1>
                
//                 <h2 className="mt-8 text-2xl md:text-3xl font-black text-white tracking-tighter max-w-2xl mx-auto uppercase italic">
//                     The New Standard of <span className="text-[#f7a221] not-italic">Indian Minimalism</span>
//                 </h2>
//             </div>

//             {/* SOCIAL CONNECT CENTERED */}
//             <div className="mt-12 flex flex-wrap justify-center gap-3">
//                 {[
//                   { icon: "fa-whatsapp", color: "hover:bg-[#25D366]" },
//                   { icon: "fa-telegram", color: "hover:bg-[#0088cc]" },
//                   { icon: "fa-instagram", color: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]" },
//                   { icon: "fa-facebook", color: "hover:bg-[#1877F2]" },
//                   { icon: "fa-youtube", color: "hover:bg-[#FF0000]" },
//                   { icon: "fa-threads", color: "hover:bg-black border-white/20" },
//                   { icon: "fa-google", color: "hover:bg-[#4285F4]", label: "Google" },
//                 ].map((social, i) => (
//                   <a
//                     key={i}
//                     href="#"
//                     className={`p-4 bg-white/5 border border-white/10 rounded-2xl text-gray-400
//                                 hover:text-white hover:-translate-y-2 hover:shadow-2xl
//                                 transition-all duration-500 ${social.color}`}
//                   >
//                     <i className={`fa-brands ${social.icon} text-2xl`} />
//                   </a>
//                 ))}
//             </div>
//         </div>

//         {/* MAIN FOOTER CONTENT GRID */}
//         <div className="grid lg:grid-cols-12 gap-16 mb-24 border-t border-white/5 pt-24">
            
//             {/* Map and Details */}
//             <div className="lg:col-span-5 space-y-8">
//                 <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 group">
//                   <iframe
//                     title="location"
//                     src="https://www.google.com/maps?q=19.2092622,73.1663272&z=16&output=embed"
//                     className="w-full h-full border-0 grayscale invert opacity-40 
//                                group-hover:opacity-100 group-hover:grayscale-0 
//                                transition-all duration-1000"
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   />
//                 </div>
//                 <div className="flex gap-8">
//                     <div>
//                         <p className="text-[#f7a221] font-black text-[10px] tracking-widest uppercase mb-2">Support</p>
//                         <p className="text-white font-bold text-lg">+91 99999 00000</p>
//                     </div>
//                     <div>
//                         <p className="text-[#f7a221] font-black text-[10px] tracking-widest uppercase mb-2">Location</p>
//                         <p className="text-white font-bold text-lg">Maharashtra, India</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Links Grid */}
//             <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
//                 {footerSections.map((section, idx) => (
//                     <div key={idx} className="space-y-6">
//                         <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
//                             <div className="h-px w-3 bg-[#f7a221]"></div>
//                             {section.title}
//                         </h4>
//                         <ul className="space-y-3">
//                             {section.items.map((item, i) => (
//                                 <li key={i} className="group flex items-center text-sm font-semibold hover:text-white cursor-pointer">
//                                     <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-[#f7a221]">
//                                         <ChevronRight size={14} />
//                                     </span>
//                                     {item}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//         </div>

//         {/* TRUST SECTION */}
//         <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 flex flex-wrap justify-between items-center gap-8 mb-12">
//             <div className="flex flex-wrap gap-12 items-center">
//                 <div className="flex items-center gap-4">
//                     <Award size={40} className="text-[#f7a221]" strokeWidth={1} />
//                     <div>
//                         <p className="text-white font-black text-xl italic uppercase">ISO 9001</p>
//                         <p className="text-[10px] uppercase font-bold text-gray-600">Certified Quality</p>
//                     </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                     <ShieldCheck size={40} className="text-blue-500" strokeWidth={1} />
//                     <div>
//                         <p className="text-white font-black text-xl italic uppercase">IndiaMart</p>
//                         <p className="text-[10px] uppercase font-bold text-gray-600">Gold Verified</p>
//                     </div>
//                 </div>
//             </div>
            
//             <div className="flex items-center gap-6 px-8 py-4 bg-black/40 rounded-3xl border border-white/5">
//                 <div className="flex -space-x-3">
//                     {[1,2,3,4].map(i => (
//                         <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-zinc-800 flex items-center justify-center">
//                            <Star size={12} fill="#f7a221" className="text-[#f7a221]" />
//                         </div>
//                     ))}
//                 </div>
//                 <div>
//                     <p className="text-white font-black text-xl leading-none">4.9/5</p>
//                     <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">User Rating</p>
//                 </div>
//             </div>
//         </div>

//         {/* COPYRIGHT BAR */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-12">
//             <p className="text-[10px] text-gray-700 font-bold uppercase tracking-[0.2em] text-center md:text-left">
//                 © {currentYear} Offer Wale Baba International • GSTIN: 24AAHCD5265C1ZX
//             </p>
//             <div className="flex items-center gap-4 bg-[#f7a221]/10 px-6 py-2 rounded-full border border-[#f7a221]/20">
//                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]"></div>
//                 <span className="text-[10px] font-black text-white uppercase tracking-widest">Global Operations Live</span>
//             </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           50% { transform: translate(20px, -30px) scale(1.05); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
        
//         /* Animated Stroke Effect */
//         @keyframes dash {
//           0% { stroke-dashoffset: 1000; }
//           100% { stroke-dashoffset: 0; }
//         }

//         .animated-text-outline {
//           stroke-dasharray: 500; /* Creates segments of lines */
//           animation: dash 20s linear infinite; /* Smooth, slow flow */
//         }

//         .animate-blob { animation: blob 12s infinite ease-in-out alternate; }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;


// import React from 'react';
// import { 
//   Facebook, Instagram, Youtube, ShieldCheck, Star, Award, 
//   Send, MessageCircle, Globe, Phone, MapPin, ExternalLink 
// } from 'lucide-react';
// import logo from "../assets/logo.jpg";

// // Custom SVG Icons
// const ThreadsIcon = () => (
//   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-2 18.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7zm6 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7zm-6-10a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1zm6 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1z"/>
//   </svg>
// );

// const GoogleIcon = () => (
//   <svg className="w-5 h-5" viewBox="0 0 24 24">
//     <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//     <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//     <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//     <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//   </svg>
// );

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerSections = [
//     {
//       title: "Quick Links",
//       items: ["What is Drop Shipping", "DropShipping", "Franchise", "Become Vendor", "Create a Ticket", "Wholesale Login", "Wholesale Signup", "VIP Customers"]
//     },
//     {
//       title: "Policies",
//       items: ["About Us", "Contact Us", "Terms & Conditions", "Shipping Policy", "Return & Refund Policy", "Payment & Security", "Privacy Policy", "Order Cancellation Policy", "Grievance Redressal Policy"]
//     },
//     {
//       title: "Other Links",
//       items: ["Influencer Form", "Blogs", "DMCA", "Affiliate", "FAQs", "Customer Testimonials", "Career", "Shipment Tracking", "Store Locator"]
//     },
//     {
//       title: "Drop Shipping With Baba",
//       items: ["Brand Drop Shipping", "All Website Plans", "Shopify Website", "Self Serve Plan", "B2B Drop Shipping", "Reseller Plan"]
//     }
//   ];

//   const socialIcons = [
//     { icon: MessageCircle, link: "#", color: "text-green-600", label: "WhatsApp" },
//     { icon: Send, link: "#", color: "text-sky-600", label: "Telegram" },
//     { icon: Instagram, link: "#", color: "text-pink-600", label: "Instagram" },
//     { icon: Facebook, link: "#", color: "text-blue-700", label: "Facebook" },
//     { icon: Youtube, link: "#", color: "text-red-600", label: "YouTube" },
//     { icon: ThreadsIcon, link: "#", color: "text-black", label: "Threads", isCustom: true },
//     { icon: GoogleIcon, link: "#", color: "text-gray-700", label: "Google", isCustom: true }
//   ];

//   return (
//     <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-200 overflow-hidden font-sans">
//       <div className="container mx-auto px-4">
        
//         {/* Main Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
//           {/* Column 1: Brand & Contact Info */}
//           <div className="lg:col-span-1 space-y-8">
//             <div className="flex flex-col items-start">
//               <img 
//                 src={logo} 
//                 alt="Offer Wale Baba Logo" 
//                 className="w-32 h-32  object-cover mb-4"
//               />
//               <p className="text-[10px] font-black text-blue-600 tracking-[0.15em] uppercase">Sell • Resell • Earn • Repeat</p>
//             </div>

//             <div className="space-y-4">
//               <h4 className="text-black font-bold text-xs uppercase tracking-widest">Contact us</h4>
//               <a href="tel:9320001717" className="inline-flex items-center gap-3 px-6 py-2.5 bg-gray-50 border border-red-200 rounded-full text-red-600 font-bold hover:bg-red-600 hover:text-white transition-all group">
//                 <Phone size={18} className="group-hover:rotate-12 transition-transform" />
//                 9320001717
//               </a>
//             </div>

//             <div className="space-y-2">
//               <h4 className="text-black font-bold text-xs uppercase tracking-widest flex items-center gap-2">
//                 <MapPin size={16} className="text-red-600" /> Visit Us
//               </h4>
//               <p className="text-sm leading-relaxed text-gray-600 font-medium uppercase">
//                 MEHTA MART MHM, ULHASNAGAR,<br />
//                 Maharashtra, 421004
//               </p>
//             </div>
//           </div>

//           {/* Columns 2-5: Dynamic Links */}
//           {footerSections.map((section, idx) => (
//             <div key={idx} className="space-y-6">
//               <h4 className="text-black font-bold uppercase text-[11px] tracking-widest border-l-4 border-red-600 pl-3">
//                 {section.title}
//               </h4>
//               <ul className="space-y-3">
//                 {section.items.map((item, i) => (
//                   <li key={i} className="text-[13px] text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer flex items-center group font-medium">
//                     <span className="w-0 group-hover:w-2 h-[2px] bg-blue-600 mr-0 group-hover:mr-2 transition-all"></span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* MAP & SOCIAL BAR SECTION */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
//             {/* Map Container */}
//             <div className="lg:col-span-2 group">
//                 <div className="flex items-center gap-2 mb-4">
//                     <div className="w-8 h-[2px] bg-red-600"></div>
//                     <h4 className="text-black font-bold uppercase text-xs tracking-widest">Locate Our Hub</h4>
//                 </div>
//                 <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
//                     <iframe 
//                         title="location"
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.123!2d73.15!3d19.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzEyLjAiTiA3M8KwMDknMDAuMCJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin" 
//                         className="w-full h-full border-0"
//                         allowFullScreen="" 
//                         loading="lazy" 
//                     ></iframe>
//                 </div>
//             </div>

//             {/* Social Icons Container */}
//             <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-center items-center lg:items-start shadow-sm">
//                 <div className="text-black font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
//                     <Globe size={18} className="text-blue-600" /> Follow us here
//                 </div>
//                 <div className="flex flex-wrap justify-center lg:justify-start gap-2">
//                     {socialIcons.map((social, idx) => (
//                         <a 
//                             key={idx} 
//                             href={social.link} 
//                             className={`p-3 bg-white rounded-xl hover:bg-gray-100 border border-gray-100 hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 ${social.color} shadow-sm`}
//                             title={social.label}
//                         >
//                             {social.isCustom ? <social.icon /> : <social.icon size={22} />}
//                         </a>
//                     ))}
//                 </div>
//                 <p className="mt-6 text-[11px] text-gray-500 font-bold italic text-center lg:text-left">
//                     Join 10,000+ happy customers on social!
//                 </p>
//             </div>
//         </div>

//         {/* Corporate Info & Trust Badges */}
//         <div className="border-t border-gray-100 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
//           <div className="text-center md:text-left">
//             <p className="text-sm font-black text-gray-900">Offer Wale Baba International Private Limited</p>
//             <div className="text-[10px] text-gray-500 flex flex-wrap justify-center md:justify-start gap-4 mt-2 font-mono font-bold uppercase">
//               <span className="bg-gray-100 px-2 py-0.5 rounded">GST: 24AAHCD5265C1ZX</span>
//               <span className="bg-gray-100 px-2 py-0.5 rounded">CIN: U51909GJ2019PTC110919</span>
//             </div>
//           </div>
          
//           <div className="flex flex-wrap gap-4 justify-center">
//             {[{ icon: ShieldCheck, text: "IndiaMart Trusted", color: "text-green-600" },
//               { icon: Star, text: "4.9/5 Rating", color: "text-yellow-600" },
//               { icon: Award, text: "ISO Certified", color: "text-blue-600" }].map((badge, i) => (
//                 <div key={i} className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 flex items-center gap-3">
//                     <badge.icon size={20} className={badge.color} />
//                     <span className="text-[10px] text-black font-black uppercase tracking-tighter">{badge.text}</span>
//                 </div>
//             ))}
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="text-center text-[11px] text-gray-400 border-t border-gray-50 pt-8">
//           <p className="font-bold">© {currentYear} OFFER WALE BABA. THE B2B REVOLUTION. ALL RIGHTS RESERVED.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;