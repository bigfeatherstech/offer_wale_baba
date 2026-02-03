import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PromoSection = () => {
    return (
        <>
            {/* Secondary Promo Banner */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-30 relative h-80 md:h-[500px] rounded-[3rem] md:rounded-[5rem] overflow-hidden group shadow-2xl"
            >
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1.5 }}
                    src="https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SE9NRSUyMERFQ09SfGVufDB8fDB8fHww"
                    alt="Promotion"
                    className="w-full h-full object-cover transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent"></div>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="absolute inset-0 flex flex-col justify-center p-10 md:p-24 space-y-6 md:space-y-10"
                >
                    <div className="flex items-center gap-3 text-[#f7a221]  tracking-[0.3em] uppercase text-xs md:text-sm">
                        <span className="w-8 h-0.5 bg-[#f7a221]"></span> Flash Sale is Live
                    </div>
                    <h2 className="text-white text-4xl md:text-4xl   tracking-tighter">
                        UPGRADE YOUR LIVING - <br />
                        <span className="text-[#f7a221] md:text-6xl underline decoration-white/20 underline-offset-[12px]">WITH OFFERWALE BABA</span>
                    </h2>
                    <p className="text-gray-300 max-w-md text-sm md:text-xl font-medium leading-relaxed">
                        Limited time offer on all premium electronics and home decor. Make your home smart today.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#7f7f7f] hover:bg-white text-primary font-black px-12 py-5 rounded-full w-fit transition-all shadow-[0_20px_50px_rgba(9,205,255,0.3)] hover:shadow-accent/40 active:scale-95 flex items-center gap-3 text-sm tracking-widest"
                    >
                        EXPLORE DEALS <ArrowRight size={20} />
                    </motion.button>
                </motion.div>
            </motion.section>

            {/* Promo Grid Cards */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 pb-10 mt-25">
                {[
                    { title: "Smart Toys", subtitle: "Shop Collection", img: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=600&auto=format&fit=crop", overlay: "bg-blue-900/40" },
                    { title: "Tech Gadgets", subtitle: "Starting ₹99", img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SE9NRSUyMERFQ09SfGVufDB8fDB8fHww  " },
                    { title: "Home Decor", subtitle: "Flat 50% Off", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop", overlay: "bg-green-900/40" }
                ].map((promo, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 }}
                        whileHover={{ y: -15 }}
                        className="relative h-80 md:h-[400px] rounded-[3rem] md:rounded-[4rem] overflow-hidden group cursor-pointer shadow-xl"
                    >
                        <img src={promo.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={promo.title} />
                        <div className={`absolute inset-0 ${promo.overlay} group-hover:opacity-60 transition-opacity duration-500`}></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14 text-white space-y-3">
                            <h5 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">{promo.title}</h5>
                            <motion.p
                                whileHover={{ x: 10 }}
                                className="text-xs md:text-sm font-black tracking-widest uppercase border-b-2 border-white/40 w-fit pb-1 transition-colors group-hover:border-accent"
                            >
                                {promo.subtitle}
                            </motion.p>
                        </div>
                        <div className="absolute top-10 right-10 p-5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100 rotate-12 group-hover:rotate-0">
                            <ArrowRight className="text-white" size={24} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default PromoSection;
