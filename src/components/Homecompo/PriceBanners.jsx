import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const PriceBanners = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    const darkBanners = [
        {
            label: "Under ₹9",
            tag: "CRAZY DEAL",
            icon: <Sparkles size={20} />,
            // SHINY BLACK GRADIENTS
            gradient: "from-[#111111] to-[#000000]",
            accentColor: "from-[#f7a221]/20 to-transparent"
        },
        {
            label: "Under ₹29",
            tag: "BEST VALUE",
            icon: <Zap size={20} />,
            gradient: "from-[#1a1a1a] to-[#080808]",
            accentColor: "from-[#f7a221]/20 to-transparent"
        },
        {
            label: "Under ₹49",
            tag: "MUST BUY",
            icon: <Sparkles size={20} />,
            gradient: "from-[#0d0d0d] to-[#000000]",
            accentColor: "from-[#f7a221]/20 to-transparent"
        },
        {
            label: "Under ₹99",
            tag: "SUPER SAVER",
            icon: <Zap size={20} />,
            gradient: "from-[#1a1a1a] to-[#111111]",
            accentColor: "from-[#f7a221]/20 to-transparent"
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`transition-all duration-700 ease-out ${
                isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
            }`}
        >
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl md:text-4xl font- flex items-center gap-4 text-dark uppercase  track">
                    {/* BRAND ORANGE ACCENT */}
                    <span className="w-2 h-10 bg-[#f7a221] rounded-full shadow-[0_0_15px_rgba(247,162,33,0.4)]"></span>
                    Shop By Price
                </h3>
                <button className="text-[#f7a221] font-black flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
                    View All <ArrowRight size={16} />
                </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {darkBanners.map((banner, idx) => (
                    <div
                        key={idx}
                        className={`group relative h-40 md:h-52 bg-gradient-to-br ${banner.gradient} rounded-[2rem] overflow-hidden cursor-pointer border border-white/5 hover:border-[#f7a221]/30 transition-all duration-500 ${
                            isInView 
                                ? 'opacity-100 scale-100' 
                                : 'opacity-0 scale-95'
                        }`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                        {/* SHINE EFFECT ON HOVER */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                        <div className="h-full flex flex-col justify-between p-6 md:p-8 relative z-10">
                            <div className="flex items-center justify-between">
                                <span className="bg-[#f7a221] text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                    {banner.tag}
                                </span>
                                <div className="text-[#f7a221]/40 group-hover:text-[#f7a221] transition-colors duration-500">
                                    {banner.icon}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-3xl md:text-5xl font text-white  tracking-tighter">
                                    {banner.label}
                                </h4>
                                {/* ANIMATED ORANGE UNDERLINE */}
                                <div className={`h-[2px] bg-gradient-to-r from-[#f7a221] to-transparent rounded-full transition-all duration-1000 delay-300 ${
                                    isInView ? 'w-full' : 'w-0'
                                }`} />
                                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-gray-500 group-hover:text-white transition-colors duration-300">
                                    Explore Deals <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PriceBanners;

// import React, { useState, useEffect, useRef } from 'react';
// import { ArrowRight, Sparkles, Zap } from 'lucide-react';

// const PriceBanners = () => {
//     const [isInView, setIsInView] = useState(false);
//     const sectionRef = useRef(null);

//     const darkBanners = [
//         {
//             label: "Under ₹9",
//             tag: "CRAZY DEAL",
//             icon: <Sparkles size={20} />,
//             gradient: "from-gray-900 to-gray-800",
//             accentColor: "from-accent/10 to-accent/5"
//         },
//         {
//             label: "Under ₹29",
//             tag: "BEST VALUE",
//             icon: <Zap size={20} />,
//             gradient: "from-primary to-primary-light",
//             accentColor: "from-secondary/10 to-secondary/5"
//         },
//         {
//             label: "Under ₹49",
//             tag: "MUST BUY",
//             icon: <Sparkles size={20} />,
//             gradient: "from-gray-900 to-primary",
//             accentColor: "from-accent/10 to-accent/5"
//         },
//         {
//             label: "Under ₹99",
//             tag: "SUPER SAVER",
//             icon: <Zap size={20} />,
//             gradient: "from-primary-light to-primary",
//             accentColor: "from-secondary/10 to-secondary/5"
//         },
//     ];

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsInView(true);
//                 }
//             },
//             { threshold: 0.1 }
//         );

//         if (sectionRef.current) {
//             observer.observe(sectionRef.current);
//         }

//         return () => observer.disconnect();
//     }, []);

//     return (
//         <section
//             ref={sectionRef}
//             className={`transition-all duration-500 ${
//                 isInView 
//                     ? 'opacity-100 translate-y-0' 
//                     : 'opacity-0 translate-y-4'
//             }`}
//         >
//             <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
//                     <span className="w-2 h-8 bg-accent"></span>
//                     Shop By Price
//                 </h3>
//                 <button className="text-accent font-bold flex items-center gap-2 text-sm">
//                     View All <ArrowRight size={16} />
//                 </button>
//             </div>
            
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
//                 {darkBanners.map((banner, idx) => (
//                     <div
//                         key={idx}
//                         className={`h-36 md:h-44 bg-gradient-to-br ${banner.gradient} rounded-xl md:rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:-translate-y-1 transition-all duration-300 ${
//                             isInView 
//                                 ? 'opacity-100 scale-100' 
//                                 : 'opacity-0 scale-95'
//                         }`}
//                         style={{ transitionDelay: `${idx * 100}ms` }}
//                     >
//                         <div className="h-full flex flex-col justify-between p-4 md:p-6">
//                             <div className="flex items-center justify-between">
//                                 <span className="bg-black/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
//                                     {banner.tag}
//                                 </span>
//                                 <div className="text-accent/50">
//                                     {banner.icon}
//                                 </div>
//                             </div>

//                             <div className="space-y-2">
//                                 <h4 className="text-2xl md:text-4xl font-bold text-white">
//                                     {banner.label}
//                                 </h4>
//                                 <div className={`h-1 bg-gradient-to-r from-accent to-transparent rounded-full transition-all duration-600 ${
//                                     isInView ? 'w-full' : 'w-0'
//                                 }`} />
//                                 <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400">
//                                     Explore Deals <ArrowRight size={12} />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default PriceBanners;