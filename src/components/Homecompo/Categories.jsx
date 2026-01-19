import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data';

const Categories = () => {
    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-3xl md:text-4xl font-black flex items-center gap-4">
                        <span className="w-3 h-12 bg-secondary rounded-full shadow-[0_0_20px_rgba(227,30,36,0.3)]"></span>
                        Top Categories
                    </h3>
                    <button className="text-secondary font-black hover:text-secondary-hover transition-colors flex items-center gap-2 group text-sm uppercase tracking-widest">
                        Explore All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-6 md:gap-10">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            <div className={`w-20 h-20 md:w-32 md:h-32 ${cat.color} rounded-[2.5rem] md:rounded-[3.5rem] flex items-center justify-center transition-all shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group-hover:bg-white overflow-hidden relative`}>
                                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/5 transition-colors"></div>
                            </div>
                            <span className="text-[10px] md:text-xs font-black mt-5 group-hover:text-secondary text-center uppercase tracking-[0.15em] transition-colors leading-tight">
                                {cat.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Visual Divider */}
            <div className="relative h-24 overflow-hidden -mx-4">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full text-gray-50/50">
                    <motion.path
                        initial={{ d: "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z" }}
                        animate={{
                            d: [
                                "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z",
                                "M0,60 C400,0 800,120 1200,60 L1200,120 L0,120 Z",
                                "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z"
                            ]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        fill="currentColor"
                    />
                </svg>
            </div>
        </>
    );
};

export default Categories;
