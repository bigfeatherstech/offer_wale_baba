import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Flame } from 'lucide-react';

const PromoSection = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

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
        <section className="space-y-8">
            {/* Main Promo Banner */}
            <div
                ref={sectionRef}
                className={`relative h-[450px] md:h-[600px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden transition-all duration-1000 ease-out border border-white/5 bg-black ${
                    isInView 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 translate-y-10'
                }`}
            >
                <img
                    src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop"
                    alt="Promotion"
                    className="w-full h-full object-cover opacity-40 grayscale"
                    loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                
                <div className={`absolute inset-0 flex flex-col justify-center p-8 md:p-20 space-y-2 transition-all duration-1000 delay-300 ${
                    isInView 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-10'
                }`}>
                    {/* Secondary Sub-headline */}
                    <div className="flex items-center gap-3 text-[#f7a221] font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-2">
                        <Flame size={16} fill="currentColor" /> UPGRADE YOUR LIVING WITH
                    </div>
                    
                    {/* MAIN TEXT: OFFERWALE BABA WITH FLICKER GLITCH */}
                    <h2 className="text-white text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter uppercase ">
                        OFFERWALE <br />
                        <span 
                            className="text-transparent flicker-text" 
                            style={{ WebkitTextStroke: '2px #f7a221' }}
                        >
                           BABA
                        </span>
                    </h2>

                    <div className="pt-6 space-y-6">
                        <p className="text-gray-400 max-w-md text-sm md:text-xl font-medium leading-relaxed">
                            India's most trusted electronics hub. <br />
                            <span className="text-white font-bold">Unbeatable deals. Curated quality.</span>
                        </p>

                        <button className="bg-[#f7a221] hover:bg-white text-black font-black px-10 py-5 rounded-full w-fit transition-all duration-500 flex items-center gap-4 text-xs md:text-sm tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(247,162,33,0.5)] group">
                            EXPLORE THE DROP 
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Promo Grid Cards */}
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: "Smart Toys", subtitle: "Trending Now", img: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=600&auto=format&fit=crop" },
                    { title: "Tech Gadgets", subtitle: "Starting ₹99", img: "https://images.unsplash.com/photo-1593642702749-b7d2a5482bb3?q=80&w=600&auto=format&fit=crop" },
                    { title: "Home Decor", subtitle: "Flat 50% Off", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop" },
                    { title: "Home Decor2", subtitle: "Flat 50% Off", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop" }
                ].map((promo, idx) => (
                    <div
                        key={idx}
                        className={`group relative h-72 md:h-80 rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-700 ${
                            isInView 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: `${(idx + 1) * 200}ms` }}
                    >
                        <img 
                            src={promo.img} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0" 
                            alt={promo.title}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                            <h5 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:text-[#f7a221] transition-colors mb-2">
                                {promo.title}
                            </h5>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f7a221] opacity-80 group-hover:opacity-100">
                                {promo.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .flicker-text {
                    animation: flicker 3s linear infinite;
                }

                @keyframes flicker {
                    0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
                        opacity: 1;
                        filter: drop-shadow(0 0 10px rgba(247, 162, 33, 0.8));
                    }
                    20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
                        opacity: 0.4;
                        filter: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default PromoSection;


// import React, { useState, useEffect, useRef } from 'react';
// import { ArrowRight } from 'lucide-react';

// const PromoSection = () => {
//     const [isInView, setIsInView] = useState(false);
//     const sectionRef = useRef(null);

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
//         <>
//             {/* Main Promo Banner */}
//             <div
//                 ref={sectionRef}
//                 className={`relative h-64 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden mb-8 transition-all duration-500 ${
//                     isInView 
//                         ? 'opacity-100 scale-100' 
//                         : 'opacity-0 scale-95'
//                 }`}
//             >
//                 <img
//                     src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop"
//                     alt="Promotion"
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
                
//                 <div className={`absolute inset-0 flex flex-col justify-center p-6 md:p-12 space-y-4 transition-all duration-700 ${
//                     isInView 
//                         ? 'opacity-100 translate-x-0' 
//                         : 'opacity-0 -translate-x-4'
//                 }`}>
//                     <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase">
//                         <span className="w-6 h-0.5 bg-accent"></span> Flash Sale is Live
//                     </div>
//                     <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
//                         UPGRADE <br />
//                         <span className="text-secondary">YOUR LIVING.</span>
//                     </h2>
//                     <p className="text-gray-300 max-w-md text-sm md:text-base">
//                         Limited time offer on all premium electronics and home decor.
//                     </p>
//                     <button className="bg-accent hover:bg-white text-primary font-bold px-6 py-3 rounded-full w-fit transition-colors flex items-center gap-2 text-sm">
//                         EXPLORE DEALS <ArrowRight size={18} />
//                     </button>
//                 </div>
//             </div>

//             {/* Promo Grid Cards */}
//             <div className="grid md:grid-cols-3 gap-6">
//                 {[
//                     { title: "Smart Toys", subtitle: "Shop Collection", img: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=600&auto=format&fit=crop" },
//                     { title: "Tech Gadgets", subtitle: "Starting ₹99", img: "https://images.unsplash.com/photo-1593642702749-b7d2a5482bb3?q=80&w=600&auto=format&fit=crop" },
//                     { title: "Home Decor", subtitle: "Flat 50% Off", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop" }
//                 ].map((promo, idx) => (
//                     <div
//                         key={idx}
//                         className={`relative h-60 md:h-72 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
//                             isInView 
//                                 ? 'opacity-100 scale-100' 
//                                 : 'opacity-0 scale-95'
//                         }`}
//                         style={{ transitionDelay: `${idx * 150}ms` }}
//                     >
//                         <img 
//                             src={promo.img} 
//                             className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
//                             alt={promo.title}
//                             loading="lazy"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//                         <div className="absolute inset-0 flex flex-col justify-end p-6 text-white space-y-2">
//                             <h5 className="text-2xl md:text-3xl font-bold">{promo.title}</h5>
//                             <p className="text-sm font-bold uppercase border-b-2 border-white/40 w-fit pb-1">
//                                 {promo.subtitle}
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default PromoSection;