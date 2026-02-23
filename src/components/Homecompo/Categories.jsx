import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Star, Clock } from 'lucide-react';
import { categories } from '../../data';

const Categories = () => {
    const [isInView, setIsInView] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [pathIndex, setPathIndex] = useState(0);
    const sectionRef = useRef(null);

    const paths = [
        "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z",
        "M0,60 C400,0 800,120 1200,60 L1200,120 L0,120 Z",
        "M0,60 C300,20 600,100 900,60 L1200,60 L1200,120 L0,120 Z",
        "M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
    ];

    // Intersection Observer for fade-in animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // SVG path animation with easing
    useEffect(() => {
        const interval = setInterval(() => {
            setPathIndex((prev) => (prev + 1) % paths.length);
        }, 4000); 

        return () => clearInterval(interval);
    }, [paths.length]);

    return (
        <div className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-8 md:py-16 overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#f7a221]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#f7a221]/5 rounded-full blur-3xl"></div>
            </div>

            <section
                ref={sectionRef}
                className={`container mx-auto px-4 transition-all duration-1000 ease-out relative z-10 ${
                    isInView 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-16'
                }`}
            >
                {/* Enhanced Header Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12 gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-8 md:w-3 md:h-12 bg-[#f7a221] rounded-full shadow-lg shadow-[#f7a221]/30 animate-pulse"></span>
                            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                                TOP <span className="text-[#f7a221]">CATEGORIES</span>
                            </h3>
                        </div>
                        <p className="text-gray-500 text-xs sm:text-sm md:text-base font-medium ml-4 sm:ml-6">
                            Explore our most popular collections
                        </p>
                    </div>
                    
                    <button className="group relative bg-gradient-to-r from-[#f7a221] to-[#f7a221]/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-[#f7a221]/30 hover:-translate-y-1 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                            Explore All <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </button>
                </div>

                {/* Featured Badge */}
                <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8 overflow-x-auto pb-2 hide-scrollbar">
                    {['HOT DEALS', 'NEW ARRIVALS', 'BESTSELLERS', 'TRENDING'].map((badge, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-sm whitespace-nowrap">
                            {idx === 0 && <TrendingUp size={14} className="text-[#f7a221]" />}
                            {idx === 1 && <Clock size={14} className="text-[#f7a221]" />}
                            {idx === 2 && <Star size={14} className="text-[#f7a221]" />}
                            <span className="text-[8px] sm:text-[10px] font-black text-gray-700">{badge}</span>
                        </div>
                    ))}
                </div>

                {/* Enhanced Categories Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-7xl mx-auto">
                    {categories.map((cat, idx) => (
                        <div
                            key={idx}
                            className="group relative cursor-pointer transition-all duration-500 hover:-translate-y-2"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                animationDelay: `${idx * 0.1}s`,
                                animation: isInView ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                            }}
                        >
                            {/* Card Container */}
                            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                {/* Image Container */}
                                <div className={`relative aspect-square ${cat.color} overflow-hidden`}>
                                    <img 
                                        src={cat.img} 
                                        alt={cat.name} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Hover Content */}
                                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center justify-between text-white">
                                            <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider opacity-90">
                                                {cat.itemCount || '24'} items
                                            </span>
                                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200" />
                                        </div>
                                    </div>
                                </div>

                                {/* Category Info */}
                                <div className="p-2 sm:p-3 bg-white">
                                    <span className="text-[9px] sm:text-xs md:text-sm font-black text-gray-900 line-clamp-2 text-center block leading-tight">
                                        {cat.name}
                                    </span>
                                    
                                    {/* Hover Indicator */}
                                    <div className="w-0 h-0.5 bg-[#f7a221] mx-auto mt-1 group-hover:w-8 transition-all duration-300"></div>
                                </div>
                            </div>

                            {/* Floating Badge for First Item */}
                            {idx === 0 && (
                                <div className="absolute -top-2 -right-2 bg-[#f7a221] text-white px-2 py-1 rounded-full text-[6px] sm:text-[8px] font-black uppercase tracking-wider shadow-xl animate-bounce z-10">
                                    HOT 🔥
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* View More Link */}
                <div className="text-center mt-8 sm:mt-10 md:mt-12">
                    <a href="#" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#f7a221] transition-colors group">
                        <span className="text-xs sm:text-sm font-medium">View All Categories</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </section>

            {/* Enhanced Visual Divider with Wave Animation */}
            <div className="relative h-16 sm:h-20 md:h-24 overflow-hidden mt-8 sm:mt-10 md:mt-12">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
                
                {/* Animated Waves */}
                <svg 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none" 
                    className="absolute bottom-0 w-full h-full"
                >
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f7a221" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#f7a221" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#f7a221" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                    
                    {/* Main Wave */}
                    <path
                        d={paths[pathIndex]}
                        fill="url(#waveGradient)"
                        style={{ 
                            transition: 'd 4000ms cubic-bezier(0.4, 0, 0.2, 1)',
                            filter: 'drop-shadow(0 -4px 6px rgba(247,162,33,0.1))'
                        }}
                    />
                    
                    {/* Secondary Wave (layered for depth) */}
                    <path
                        d={paths[(pathIndex + 1) % paths.length]}
                        fill="none"
                        stroke="#f7a221"
                        strokeWidth="2"
                        strokeOpacity="0.1"
                        style={{ 
                            transition: 'd 4000ms cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    />
                </svg>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default Categories;



// import React, { useState, useEffect, useRef } from 'react';
// import { ArrowRight } from 'lucide-react';
// import { categories } from '../../data';

// const Categories = () => {
//     const [isInView, setIsInView] = useState(false);
//     const sectionRef = useRef(null);
//     const [pathIndex, setPathIndex] = useState(0);

//     const paths = [
//         "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z",
//         "M0,60 C400,0 800,120 1200,60 L1200,120 L0,120 Z",
//         "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z"
//     ];

//     // Intersection Observer for fade-in animation
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsInView(true);
//                     observer.disconnect();
//                 }
//             },
//             { threshold: 0.1 }
//         );

//         if (sectionRef.current) {
//             observer.observe(sectionRef.current);
//         }

//         return () => observer.disconnect();
//     }, []);

//     // SVG path animation
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setPathIndex((prev) => (prev + 1) % paths.length);
//         }, 3333); 

//         return () => clearInterval(interval);
//     }, [paths.length]);

//     return (
//         <div className="w-full bg-white py-8 md:py-16 overflow-hidden">
//             <section
//                 ref={sectionRef}
//                 className={`container mx-auto px-4 transition-all duration-700 ease-out ${
//                     isInView 
//                         ? 'opacity-100 translate-y-0' 
//                         : 'opacity-0 translate-y-10'
//                 }`}
//             >
//                 {/* Header Section - Responsive Flex */}
//                 <div className="flex flex-row items-center justify-between mb-8 md:mb-12 gap-2">
//                     <h3 className="text-xl sm:text-2xl md:text-4xl font-lato flex items-center gap-2 md:gap-4 text-gray-900">
//                         <span className="w-2 h-8 md:w-3 md:h-12 bg-[#f7a221] rounded-full shadow-[0_0_15px_rgba(247,162,33,0.3)]"></span>
//                         Top Categories
//                     </h3>
//                     <button className="text-[#f7a221] font-black flex items-center gap-1 md:gap-2 group text-[10px] md:text-sm uppercase tracking-wider transition-all whitespace-nowrap">
//                         Explore All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//                     </button>
//                 </div>

//                 {/* Categories Grid - Responsive with consistent item sizes */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
//                     {categories.map((cat, idx) => (
//                         <div
//                             key={idx}
//                             className="flex flex-col items-center group cursor-pointer transition-all duration-300 w-full max-w-[180px] mx-auto"
//                         >
//                             <div className={`w-full aspect-square ${cat.color} rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] flex items-center justify-center transition-all shadow-sm group-hover:shadow-md group-hover:-translate-y-1 overflow-hidden relative border border-gray-100`}>
//                                 <img 
//                                     src={cat.img} 
//                                     alt={cat.name} 
//                                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//                                 />
//                                 <div className="absolute inset-0 bg-[#f7a221]/0 group-hover:bg-[#f7a221]/5 transition-colors duration-300"></div>
//                             </div>
                            
//                             <span className="text-[9px] md:text-[11px] font-bold mt-3 group-hover:text-[#f7a221] text-gray-600 text-center uppercase tracking-tight md:tracking-wider transition-colors duration-300 leading-tight line-clamp-2 px-1">
//                                 {cat.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Visual Divider */}
//             <div className="relative h-12 md:h-20 overflow-hidden mt-10">
//                 <svg 
//                     viewBox="0 0 1200 120" 
//                     preserveAspectRatio="none" 
//                     className="absolute bottom-0 w-full h-full text-gray-50"
//                 >
//                     <path
//                         d={paths[pathIndex]}
//                         fill="currentColor"
//                         style={{ transition: 'd 3333ms ease-in-out' }}
//                     />
//                 </svg>
//             </div>
//         </div>
//     );
// };

// export default Categories;




