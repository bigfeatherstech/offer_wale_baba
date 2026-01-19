import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-primary text-gray-300 pt-24 pb-12 border-t-[12px] border-secondary"
        >
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
                <div className="space-y-10">
                    <motion.h1
                        whileHover={{ scale: 1.05 }}
                        className="text-4xl font-black text-white tracking-tighter w-fit cursor-pointer"
                    >
                        OFFERWALE <span className="text-accent underline decoration-secondary underline-offset-8">BABA</span>
                    </motion.h1>
                    <p className="text-sm md:text-lg leading-relaxed font-medium opacity-60">
                        India's leading e-commerce platform for unique and innovative household items. Redefining quality at wholesale prices.
                    </p>
                    <div className="flex gap-5">
                        {['FB', 'IG', 'TW', 'YT'].map(social => (
                            <motion.div
                                key={social}
                                whileHover={{ y: -5, backgroundColor: '#e31e24', borderColor: '#e31e24' }}
                                className="w-14 h-14 bg-white/5 border border-white/10 rounded-[1.2rem] flex items-center justify-center transition-all cursor-pointer text-sm font-black text-white shadow-xl"
                            >
                                {social}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="space-y-10">
                    <h6 className="text-white font-black uppercase tracking-[0.2em] text-xs md:text-sm">Explore Links</h6>
                    <ul className="space-y-5 text-sm md:text-base font-bold">
                        {[
                            "Track Order", "Become a Seller", "Dropshipping", "Bulk Order Enquiry"
                        ].map((link, idx) => (
                            <motion.li
                                key={idx}
                                whileHover={{ x: 10, color: '#09cdff' }}
                                className="cursor-pointer transition-colors flex items-center gap-3 group"
                            >
                                <div className="w-1.5 h-1.5 bg-secondary rounded-full group-hover:w-4 transition-all"></div> {link}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-10">
                    <h6 className="text-white font-black uppercase tracking-[0.2em] text-xs md:text-sm">Policy Info</h6>
                    <ul className="space-y-5 text-sm md:text-base font-bold">
                        {[
                            "Privacy Policy", "Shipping Policy", "Refund & Return", "Terms of Service"
                        ].map((link, idx) => (
                            <motion.li
                                key={idx}
                                whileHover={{ x: 10, color: '#09cdff' }}
                                className="cursor-pointer transition-colors flex items-center gap-3 group"
                            >
                                <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover:w-4 transition-all"></div> {link}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-10">
                    <h6 className="text-white font-black uppercase tracking-[0.2em] text-xs md:text-sm">Join the baba squad</h6>
                    <p className="text-sm md:text-base font-medium opacity-70">Subscribe for early access to flash sales and new dropshipping assets.</p>
                    <div className="flex bg-white/5 p-2 rounded-[1.5rem] border border-white/10 focus-within:border-accent group transition-all">
                        <input type="email" placeholder="Email address" className="bg-transparent border-none py-3 px-5 w-full focus:outline-none text-sm font-bold placeholder:text-gray-600" />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-secondary px-10 rounded-[1.2rem] hover:bg-secondary-hover transition-all font-black text-xs text-white shadow-2xl"
                        >
                            JOIN
                        </motion.button>
                    </div>
                    <div className="flex items-center gap-5 p-5 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-lg">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                            <Flame className="text-secondary" size={32} />
                        </motion.div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-white leading-none">10k+ Happy Customers</p>
                            <p className="text-[10px] font-bold text-gray-500 mt-1 uppercase tracking-tighter">Weekly Community Updates</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black opacity-30 uppercase tracking-[0.2em]">
                <p>© 2026 Offerwale Baba. All Rights Reserved. The Ultimate Deal Hub.</p>
                <div className="flex gap-10">
                    <span>Verified by Google</span>
                    <span>Secure Checkout</span>
                    <span>India's #1 Wholesaler</span>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
