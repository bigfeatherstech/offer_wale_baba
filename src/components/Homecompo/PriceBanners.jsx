import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const PriceBanners = () => {
    const darkBanners = [
        {
            label: "Under ₹9",
            tag: "CRAZY DEAL",
            icon: <Sparkles size={24} />,
            gradient: "from-gray-900 via-gray-800 to-gray-900",
            accentColor: "from-accent/20 to-accent/5"
        },
        {
            label: "Under ₹29",
            tag: "BEST VALUE",
            icon: <Zap size={24} />,
            gradient: "from-primary via-primary-light to-primary",
            accentColor: "from-secondary/20 to-secondary/5"
        },
        {
            label: "Under ₹49",
            tag: "MUST BUY",
            icon: <Sparkles size={24} />,
            gradient: "from-gray-900 via-primary to-gray-900",
            accentColor: "from-accent/20 to-accent/5"
        },
        {
            label: "Under ₹99",
            tag: "SUPER SAVER",
            icon: <Zap size={24} />,
            gradient: "from-primary-light via-primary to-primary-light",
            accentColor: "from-secondary/20 to-secondary/5"
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl md:text-4xl font-black flex items-center gap-4">
                    <span className="w-3 h-12 bg-accent rounded-full shadow-[0_0_20px_rgba(9,205,255,0.3)]"></span>
                    Shop By Price
                </h3>
                <button className="text-accent font-black hover:text-white transition-colors flex items-center gap-2 group text-sm uppercase tracking-widest">
                    View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {darkBanners.map((banner, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className={`relative h-44 md:h-56 bg-gradient-to-br ${banner.gradient} rounded-[2rem] md:rounded-[3rem] overflow-hidden group cursor-pointer border border-white/5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]`}
                    >
                        {/* Animated Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${banner.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Grid Pattern */}
                        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

                        {/* Content */}
                        <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                            {/* Top Badge */}
                            <div className="flex items-center justify-between">
                                <span className="glass-dark text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-[0.25em] border border-white/10">
                                    {banner.tag}
                                </span>
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-accent/50 group-hover:text-accent transition-colors"
                                >
                                    {banner.icon}
                                </motion.div>
                            </div>

                            {/* Price Label */}
                            <div className="space-y-3">
                                <h4 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                                    {banner.label}
                                </h4>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 + 0.3, duration: 0.6 }}
                                    className="h-1 bg-gradient-to-r from-accent to-transparent rounded-full"
                                />
                                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                                    Explore Deals <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Orb */}
                        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:scale-150 group-hover:bg-accent/20 transition-all duration-700"></div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default PriceBanners;
