import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    User,
    Heart,
    ShoppingCart,
    Menu,
    X,
    Phone,
    Mail,
    Clock,
    ChevronRight,
    Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo1 from "../assets/logo1.jpg"
import logo from "../assets/logo.jpg"

const Navbar = ({ searchQuery, setSearchQuery, isMenuOpen, setIsMenuOpen }) => {
    return (
        <>
            {/* Top Info Bar (Simplified) */}
            <div className="bg-white border-b border-gray-100 py-1.5 px-4 hidden md:block">
                <div className="container mx-auto flex justify-between text-[11px] text-gray-500 font-medium">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1.5 hover:text-secondary cursor-pointer transition-colors">
                            <Phone size={12} className="text-secondary" /> +91 91730 00000
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-secondary cursor-pointer transition-colors">
                            <Mail size={12} className="text-secondary" /> support@offerwale.com
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 uppercase tracking-tight">
                            <Clock size={12} className="text-secondary" /> Pan India Delivery • 7 Days Support
                        </span>
                    </div>
                </div>
            </div>

            {/* Primary Header */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="bg-primary/95 backdrop-blur-xl sticky top-0 z-50 text-white shadow-2xl border-b border-white/5"
            >
                <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-8">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            {/* <div className="bg-secondary p-1.5 rounded-lg shadow-inner">
                                <Zap size={24} fill="currentColor" />
                            </div>
                            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">
                                OFFERWALE <span className="text-accent underline decoration-secondary underline-offset-4">BABA</span>
                            </h1> */}
                            <img style={{borderRadius:"50%"}} width="50px" src={logo} alt="" />

                        </motion.div>

                        {/* Search Bar */}
                        <div className="flex-1 max-w-2xl relative hidden md:block">
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Search for kitchen, household, toys and more..."
                                    className="w-full py-3 px-6 rounded-l-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent transition-all pl-12 bg-white/90 backdrop-blur-md shadow-inner font-medium"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <motion.button
                                    whileHover={{ backgroundColor: '#c2181d', scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-secondary px-8 rounded-r-2xl transition-all flex items-center justify-center shadow-lg"
                                >
                                    <Search size={20} />
                                </motion.button>
                            </div>
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        </div>

                        {/* Action Icons */}
                        <div className="flex items-center gap-5">
                            {[
                                { icon: <User size={24} />, label: "Login" },
                                { icon: <Heart size={24} />, label: "Wishlist", count: 0, badge: "bg-secondary" },
                                { icon: <ShoppingCart size={24} />, label: "My Cart", count: 0, badge: "bg-accent", badgeText: "text-primary" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -3, color: '#09cdff' }}
                                    className="flex flex-col items-center cursor-pointer relative group transition-colors"
                                >
                                    {item.icon}
                                    {item.count !== undefined && (
                                        <span className={`absolute -top-1 -right-1 ${item.badge} ${item.badgeText || 'text-white'} text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-primary font-bold`}>
                                            {item.count}
                                        </span>
                                    )}
                                    <span className="text-[10px] mt-0.5 font-semibold uppercase">{item.label}</span>
                                </motion.div>
                            ))}
                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden cursor-pointer p-2 bg-white/10 rounded-xl"
                            >
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Menu Drawer */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="md:hidden bg-primary-light rounded-2xl overflow-hidden mt-2 border border-white/5"
                            >
                                <div className="flex flex-col p-6 space-y-6">
                                    {/* Reinstated Mobile Search in Drawer */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search for smart gadgets..."
                                            className="w-full py-4 px-12 rounded-2xl text-gray-800 text-sm focus:outline-none bg-white shadow-xl font-bold"
                                        />
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    </div>

                                    <div className="flex flex-col space-y-4">
                                        {["Just Arrived", "Best Seller", "Kitchen", "Household", "Toys", "Fitness", "Bulk Inquiry"].map((item, i) => (
                                            <motion.a
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: i * 0.1 }}
                                                key={item}
                                                href="#"
                                                className="text-lg font-black text-white hover:text-accent transition-colors flex items-center justify-between"
                                            >
                                                {item} <ChevronRight size={16} className="text-secondary" />
                                            </motion.a>
                                        ))}
                                    </div>
                                    <button className="bg-secondary text-white font-black py-4 rounded-2xl mt-4 shadow-xl active:scale-95 transition-all">LOGIN / SIGNUP</button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Bottom Nav Bar */}
                <nav className="bg-primary-light/50 hidden md:block border-t border-white/5">
                    <div className="container mx-auto px-4 overflow-x-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-8 py-3 whitespace-nowrap"
                        >
                            {[
              { label: "All Products", path: "/" },
              { label: "Todays' Deal", path: "/" },
              { label: "Just Arrived", path: "/", color: "text-accent border-b-2 border-accent" },
              { label: "Sale", path: "/" },
              { label: "Coupons", path: "/" },
              { label: "Customer Care", path: "/customer-care" },
            ].map((link, idx) => (
              <Link 
                key={idx} 
                to={link.path} 
                className={`nav-link ${link.color || ''}`}
              >
                {link.label}
              </Link>
                            ))}
                        </motion.div>
                    </div>
                </nav>
            </motion.header>
        </>
    );
};

export default Navbar;
