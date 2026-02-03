import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data';

const Categories = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);
    const pathRef = useRef(null);
    const [pathIndex, setPathIndex] = useState(0);

    // Intersection Observer for fade-in animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // SVG path animation
    useEffect(() => {
        const paths = [
            "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z",
            "M0,60 C400,0 800,120 1200,60 L1200,120 L0,120 Z",
            "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z"
        ];

        const interval = setInterval(() => {
            setPathIndex((prev) => (prev + 1) % paths.length);
        }, 3333); 

        return () => clearInterval(interval);
    }, []);

    const paths = [
        "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z",
        "M0,60 C400,0 800,120 1200,60 L1200,120 L0,120 Z",
        "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z"
    ];

    return (
        <>
            <section
                ref={sectionRef}
                className={`transition-all duration-800 ease-out ${
                    isInView 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                }`}
            >
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-3xl md:text-4xl  flex items-center gap-4 text-dark">
                        {/* CHANGED: Shadow and color to Brand Orange #f7a221 */}
                        <span className="w-3 h-12 bg-[#f7a221] rounded-full texct shadow-[0_0_20px_rgba(247,162,33,0.4)]"></span>
                        Top Categories
                    </h3>
                    {/* CHANGED: Text color and hover to Brand Orange #f7a221 */}
                    <button className="text-[#f7a221] font-black hover:transition-colors flex items-center gap-2 group text-sm uppercase tracking-widest">
                        Explore All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-4 md:grid-cols-8 gap-6 md:gap-10">
                    {categories.map((cat, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center group cursor-pointer hover:-translate-y-2.5 transition-transform duration-300"
                        >
                            <div className={`w-20 h-20 md:w-32 md:h-32 ${cat.color} rounded-[2.5rem] md:rounded-[3.5rem] flex items-center justify-center transition-all shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_40px_-10px_rgba(247,162,33,0.2)] group-hover:bg-white overflow-hidden relative border border-white/5`}>
                                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                {/* CHANGED: Hover overlay color to Brand Orange #f7a221 */}
                                <div className="absolute inset-0 bg-[#f7a221]/0 group-hover:bg-[#f7a221]/5 transition-colors duration-300"></div>
                            </div>
                            {/* CHANGED: group-hover text color to Brand Orange #f7a221 */}
                            <span className="text-[10px] md:text-xs font-black mt-5 group-hover:text-[#f7a221] text-gray-400 text-center uppercase tracking-[0.15em] transition-colors duration-300 leading-tight">
                                {cat.name}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Visual Divider */}
            <div className="relative h-24 overflow-hidden -mx-4">
                <svg 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none" 
                    className="absolute bottom-0 w-full h-full text-white/5"
                >
                    <path
                        ref={pathRef}
                        d={paths[pathIndex]}
                        fill="currentColor"
                        className="transition-all duration-3333 ease-in-out"
                    />
                </svg>
            </div>
        </>
    );
};

export default Categories;

// import React, { useState, useEffect, useRef } from 'react';
// import { ArrowRight } from 'lucide-react';
// import { categories } from '../../data';

// const Categories = () => {
//     const [isInView, setIsInView] = useState(false);
//     const sectionRef = useRef(null);
//     const pathRef = useRef(null);
//     const [pathIndex, setPathIndex] = useState(0);

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
//         const paths = [
//             "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z",
//             "M0,60 C400,0 800,120 1200,60 L1200,120 L0,120 Z",
//             "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z"
//         ];

//         const interval = setInterval(() => {
//             setPathIndex((prev) => (prev + 1) % paths.length);
//         }, 3333); // Change path every 3.33 seconds for 10-second cycle

//         return () => clearInterval(interval);
//     }, []);

//     const paths = [
//         "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z",
//         "M0,60 C400,0 800,120 1200,60 L1200,120 L0,120 Z",
//         "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z"
//     ];

//     return (
//         <>
//             <section
//                 ref={sectionRef}
//                 className={`transition-all duration-800 ease-out ${
//                     isInView 
//                         ? 'opacity-100 translate-y-0' 
//                         : 'opacity-0 translate-y-10'
//                 }`}
//             >
//                 <div className="flex items-center justify-between mb-8">
//                     <h3 className="text-3xl md:text-4xl font-black flex items-center gap-4">
//                         <span className="w-3 h-12 bg-secondary rounded-full shadow-[0_0_20px_rgba(227,30,36,0.3)]"></span>
//                         Top Categories
//                     </h3>
//                     <button className="text-secondary font-black hover:text-secondary-hover transition-colors flex items-center gap-2 group text-sm uppercase tracking-widest">
//                         Explore All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//                     </button>
//                 </div>
//                 <div className="grid grid-cols-4 md:grid-cols-8 gap-6 md:gap-10">
//                     {categories.map((cat, idx) => (
//                         <div
//                             key={idx}
//                             className="flex flex-col items-center group cursor-pointer hover:-translate-y-2.5 transition-transform duration-300"
//                         >
//                             <div className={`w-20 h-20 md:w-32 md:h-32 ${cat.color} rounded-[2.5rem] md:rounded-[3.5rem] flex items-center justify-center transition-all shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group-hover:bg-white overflow-hidden relative`}>
//                                 <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//                                 <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/5 transition-colors duration-300"></div>
//                             </div>
//                             <span className="text-[10px] md:text-xs font-black mt-5 group-hover:text-secondary text-center uppercase tracking-[0.15em] transition-colors duration-300 leading-tight">
//                                 {cat.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Visual Divider */}
//             <div className="relative h-24 overflow-hidden -mx-4">
//                 <svg 
//                     viewBox="0 0 1200 120" 
//                     preserveAspectRatio="none" 
//                     className="absolute bottom-0 w-full h-full text-gray-50/50"
//                 >
//                     <path
//                         ref={pathRef}
//                         d={paths[pathIndex]}
//                         fill="currentColor"
//                         className="transition-all duration-3333 ease-in-out"
//                     />
//                 </svg>
//             </div>

//             <style jsx>{`
//                 .transition-all {
//                     transition-property: all;
//                 }
//                 .duration-800 {
//                     transition-duration: 800ms;
//                 }
//                 .duration-3333 {
//                     transition-duration: 3333ms;
//                 }
//                 .ease-out {
//                     transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
//                 }
//                 .ease-in-out {
//                     transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
//                 }
//                 .hover\:-translate-y-2\.5:hover {
//                     transform: translateY(-10px);
//                 }
//                 .group-hover\:translate-x-1:hover {
//                     transform: translateX(4px);
//                 }
//                 .group-hover\:scale-110:hover {
//                     transform: scale(1.1);
//                 }
//                 .opacity-0 {
//                     opacity: 0;
//                 }
//                 .opacity-100 {
//                     opacity: 1;
//                 }
//                 .translate-y-0 {
//                     transform: translateY(0);
//                 }
//                 .translate-y-10 {
//                     transform: translateY(40px);
//                 }
//             `}</style>
//         </>
//     );
// };

// export default Categories;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import { categories } from '../../data';

// const Categories = () => {
//     return (
//         <>
//             <motion.section
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <div className="flex items-center justify-between mb-8">
//                     <h3 className="text-3xl md:text-4xl font-black flex items-center gap-4">
//                         <span className="w-3 h-12 bg-secondary rounded-full shadow-[0_0_20px_rgba(227,30,36,0.3)]"></span>
//                         Top Categories
//                     </h3>
//                     <button className="text-secondary font-black hover:text-secondary-hover transition-colors flex items-center gap-2 group text-sm uppercase tracking-widest">
//                         Explore All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//                     </button>
//                 </div>
//                 <div className="grid grid-cols-4 md:grid-cols-8 gap-6 md:gap-10">
//                     {categories.map((cat, idx) => (
//                         <motion.div
//                             key={idx}
//                             whileHover={{ y: -10 }}
//                             className="flex flex-col items-center group cursor-pointer"
//                         >
//                             <div className={`w-20 h-20 md:w-32 md:h-32 ${cat.color} rounded-[2.5rem] md:rounded-[3.5rem] flex items-center justify-center transition-all shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group-hover:bg-white overflow-hidden relative`}>
//                                 <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//                                 <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/5 transition-colors"></div>
//                             </div>
//                             <span className="text-[10px] md:text-xs font-black mt-5 group-hover:text-secondary text-center uppercase tracking-[0.15em] transition-colors leading-tight">
//                                 {cat.name}
//                             </span>
//                         </motion.div>
//                     ))}
//                 </div>
//             </motion.section>

//             {/* Visual Divider */}
//             <div className="relative h-24 overflow-hidden -mx-4">
//                 <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full text-gray-50/50">
//                     <motion.path
//                         initial={{ d: "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z" }}
//                         animate={{
//                             d: [
//                                 "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z",
//                                 "M0,60 C400,0 800,120 1200,60 L1200,120 L0,120 Z",
//                                 "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z"
//                             ]
//                         }}
//                         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//                         fill="currentColor"
//                     />
//                 </svg>
//             </div>
//         </>
//     );
// };

// export default Categories;
