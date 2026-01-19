import React from 'react';
import { motion } from 'framer-motion';
import { Truck, RefreshCw, ShieldCheck, Star } from 'lucide-react';

const TrustIndicators = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-16 rounded-[3rem] md:rounded-[5rem] border border-gray-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 relative overflow-hidden"
        >
            {/* Subtle Background Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            {[
                { icon: <Truck className="text-secondary" />, title: "Free Shipping", subtitle: "On orders over ₹999" },
                { icon: <RefreshCw className="text-secondary" />, title: "7 Days Return", subtitle: "Easy refund policy" },
                { icon: <ShieldCheck className="text-secondary" />, title: "Secure Payment", subtitle: "100% safe transactions" },
                { icon: <Star className="text-secondary" />, title: "Premium Quality", subtitle: "Best products in India" },
            ].map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center text-center space-y-4 group relative z-10"
                >
                    <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="p-5 md:p-8 bg-gray-50 rounded-[2rem] group-hover:bg-secondary group-hover:text-white transition-colors duration-500 shadow-sm group-hover:shadow-secondary/30"
                    >
                        {item.icon}
                    </motion.div>
                    <div>
                        <h4 className="font-black text-sm md:text-xl tracking-tight transition-colors group-hover:text-secondary">{item.title}</h4>
                        <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">{item.subtitle}</p>
                    </div>
                </motion.div>
            ))}
        </motion.section>
    );
};

export default TrustIndicators;
