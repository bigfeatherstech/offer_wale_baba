import React, { useState, useEffect, useRef } from 'react';
import { Truck, RefreshCw, ShieldCheck, Star } from 'lucide-react';

const TrustIndicators = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    const indicators = [
        { 
            icon: <Truck className="group-hover:animate-drive" size={24} />, 
            title: "Free Shipping", 
            subtitle: "On orders over ₹999" 
        },
        { 
            icon: <RefreshCw className="group-hover:animate-spin-slow" size={24} />, 
            title: "7 Days Return", 
            subtitle: "Easy refund policy" 
        },
        { 
            icon: <ShieldCheck className="group-hover:animate-pulse-glow" size={24} />, 
            title: "Secure Payment", 
            subtitle: "100% safe transactions" 
        },
        { 
            icon: <Star className="group-hover:animate-sparkle" size={24} />, 
            title: "Premium Quality", 
            subtitle: "Best products in India" 
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
            className={`bg-[#0a0a0a] p-8 md:p-12 rounded-[2.5rem] border border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ease-out ${
                isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
            }`}
        >
            {indicators.map((item, idx) => (
                <div
                    key={idx}
                    className={`group flex flex-col items-center text-center space-y-4 transition-all duration-500 ${
                        isInView 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-90'
                    }`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                >
                    {/* ICON CONTAINER WITH SHINE */}
                    <div className="relative p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:border-[#f7a221]/50 group-hover:bg-[#f7a221] group-hover:text-black text-[#f7a221] transition-all duration-500 shadow-2xl">
                        <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                            {item.icon}
                        </div>
                        {/* Inner glow effect */}
                        <div className="absolute inset-0 bg-[#f7a221]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <h4 className="font-black text-white text-sm md:text-base uppercase tracking-tighter">
                            {item.title}
                        </h4>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                            {item.subtitle}
                        </p>
                    </div>
                </div>
            ))}

            <style jsx>{`
                @keyframes drive {
                    0% { transform: translateX(0); }
                    25% { transform: translateX(3px); }
                    75% { transform: translateX(-3px); }
                    100% { transform: translateX(0); }
                }
                @keyframes sparkle {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.7; transform: scale(1.2); }
                }
                @keyframes pulse-glow {
                    0% { box-shadow: 0 0 0 0 rgba(247, 162, 33, 0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(247, 162, 33, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(247, 162, 33, 0); }
                }
                .group:hover .animate-drive {
                    animation: drive 0.4s ease-in-out infinite;
                }
                .group:hover .animate-spin-slow {
                    animation: spin 1.5s linear infinite;
                }
                .group:hover .animate-pulse-glow {
                    animation: pulse-glow 1.5s infinite;
                    border-radius: 50%;
                }
                .group:hover .animate-sparkle {
                    animation: sparkle 0.6s ease-in-out infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default TrustIndicators;

// import React, { useState, useEffect, useRef } from 'react';
// import { Truck, RefreshCw, ShieldCheck, Star } from 'lucide-react';

// const TrustIndicators = () => {
//     const [isInView, setIsInView] = useState(false);
//     const sectionRef = useRef(null);

//     const indicators = [
//         { icon: <Truck className="text-secondary" size={20} />, title: "Free Shipping", subtitle: "On orders over ₹999" },
//         { icon: <RefreshCw className="text-secondary" size={20} />, title: "7 Days Return", subtitle: "Easy refund policy" },
//         { icon: <ShieldCheck className="text-secondary" size={20} />, title: "Secure Payment", subtitle: "100% safe transactions" },
//         { icon: <Star className="text-secondary" size={20} />, title: "Premium Quality", subtitle: "Best products in India" },
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
//             className={`bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-500 ${
//                 isInView 
//                     ? 'opacity-100 translate-y-0' 
//                     : 'opacity-0 translate-y-4'
//             }`}
//         >
//             {indicators.map((item, idx) => (
//                 <div
//                     key={idx}
//                     className={`flex flex-col items-center text-center space-y-3 transition-all duration-300 ${
//                         isInView 
//                             ? 'opacity-100 scale-100' 
//                             : 'opacity-0 scale-95'
//                     }`}
//                     style={{ transitionDelay: `${idx * 100}ms` }}
//                 >
//                     <div className="p-4 bg-gray-50 rounded-xl hover:bg-secondary hover:text-white transition-colors duration-300">
//                         {item.icon}
//                     </div>
//                     <div>
//                         <h4 className="font-bold text-sm md:text-base">{item.title}</h4>
//                         <p className="text-xs text-gray-500 font-medium">{item.subtitle}</p>
//                     </div>
//                 </div>
//             ))}
//         </section>
//     );
// };

// export default TrustIndicators;