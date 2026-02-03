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
import logo from "../assets/logo.jpg"
import logo1 from "../assets/logo.jpg"
import offerlogo from "../assets/offerlogo.png"

const Navbar = ({ searchQuery, setSearchQuery, isMenuOpen, setIsMenuOpen }) => {
    // Enhanced Navigation items with unique backgrounds and animations
    const navItems = [
        { 
            label: "All Products", 
            path: "/", 
            icon: "📦",
            color: "text-blue-400",
            bg: "bg-[#f7a221]",
bg: "bg-[linear-gradient(135deg,_#f7a221_0%,_#f39a12_45%,_#eaeaea_120%)]",

            border: "border border-blue-400/20"
        },

        
        { 
            label: "Todays' Deal", 
            path: "/", 
            icon: "🔥",
            color: "text-orange-400",

                            bg: "bg-[#f7a221]",
bg: "bg-[linear-gradient(135deg,_#f7a221_0%,_#f39a12_45%,_#eaeaea_120%)]",

            border: "border border-orange-400/20"
        },
        { 
            label: "Just Arrived", 
            path: "/", 
            icon: "🚚",
            color: "text-green-400",
                            bg: "bg-[#f7a221]",
bg: "bg-[linear-gradient(135deg,_#f7a221_0%,_#f39a12_45%,_#eaeaea_120%)]",

            border: "border border-green-400/20",
            animation: "animate-truck-move"
        },
        { 
            label: "Sale", 
            path: "/", 
            icon: "🏷️",
            color: "text-red-400",
                            bg: "bg-[#f7a221]",
bg: "bg-[linear-gradient(135deg,_#f7a221_0%,_#f39a12_45%,_#eaeaea_120%)]",

            border: "border border-red-400/20",
            animation: "animate-pulse-fire"
        },
        { 
            label: "Coupons", 
            path: "/", 
            icon: "🎫",
            color: "text-purple-400",
                            bg: "bg-[#f7a221]",
bg: "bg-[linear-gradient(135deg,_#f7a221_0%,_#f39a12_45%,_#eaeaea_120%)]",

            border: "border border-purple-400/20",
            animation: "animate-dance-slow"
        },
        { 
            label: "Customer Care", 
            path: "/customer-care", 
            icon: "📞",
            color: "text-cyan-400",
                            bg: "bg-[#f7a221]",
bg: "bg-[linear-gradient(135deg,_#f7a221_0%,_#f39a12_45%,_#eaeaea_120%)]",

            border: "border border-cyan-400/20"
        }
    ];

    // Mobile menu items with real icons
    const mobileNavItems = [
        { label: "Just Arrived", icon: "🚚" },
        { label: "Best Seller", icon: "⭐" },
        { label: "Kitchen", icon: "🍳" },
        { label: "Household", icon: "🏠" },
        { label: "Toys", icon: "🧸" },
        { label: "Fitness", icon: "💪" },
        { label: "Bulk Inquiry", icon: "📦" }
    ];

    return (
        <>
            {/* Top Info Bar (Simplified) */}
            <div className="bg-[#7f7f7f] border-b border-gray-100 py-1.5 px-4 hidden md:block">

                <div className="container mx-auto flex justify-between text-[11px] text-gray-500 font-medium">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1.5 hover:text-secondary cursor-pointer transition-colors text-white">
                            <Phone size={12} className="text-secondary" /> +91 9320001717
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-secondary cursor-pointer transition-colors text-white">
                            <Mail size={12} className="text-secondary" /> support@offerwale.com
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 uppercase tracking-tight text-white">
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
                // className="bg-primary/95 backdrop-blur-xl sticky top-0 z-50 text-white shadow-2xl border-b border-white/5"
                className="bg-white backdrop-blur-xl sticky top-0 z-50 text-white shadow-2xl border-b border-white/5"
            >
                <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                    
                    <div className=" flex items-center justify-between gap-8">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <img style={{borderRadius:"20%"}} width="90px" height="auto" src={logo} alt="" />
                           
                        </motion.div>

        <div className="flex-1 max-w-2xl relative hidden md:block">
  <div className="flex items-stretch">
    
    {/* INPUT */}
    <input
      type="text"
      placeholder="Search for kitchen, household, toys and more..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="
        w-full
        py-3
        pl-12
        pr-4
        text-gray-800
        bg-white
        border
        border-[#f7a221]
        border-r-0
        rounded-l-2xl
        focus:outline-none
        focus:ring-2
        focus:ring-accent
        font-medium
      "
    />

    {/* BUTTON */}
    <motion.button
      whileHover={{ backgroundColor: '#f7a221' }}
      whileTap={{ scale: 0.96 }}
      className="
        px-8
        bg-[#f7a221]
        text-white
        rounded-r-2xl
        border
        border-[#f7a221]
        border-l-0
        flex
        items-center
        justify-center
        transition-all
      "
    >
      <Search size={20} />
    </motion.button>
  </div>

  {/* SEARCH ICON INSIDE INPUT */}
  <Search
    size={20}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
  />
</div>

                        {/* Action Icons */}
                        {/* <div className="flex items-center gap-5">
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
                        </div> */}

                        <div className="flex items-center gap-5">
     {[
        { icon: <User size={24} />, label: "Login", bg: "bg-white backdrop-blur-sm", textColor: "text-[#f7a221]" },
        { icon: <Heart size={24} />, label: "Wishlist", count: 0, badge: "bg-secondary", bg: "bg-white  backdrop-blur-sm", textColor: "text-[#f7a221]" },
        { icon: <ShoppingCart size={24} />, label: "My Cart", count: 0, badge: "bg-secondary", badgeText: "text-primary", bg: "bg-white backdrop-blur-sm", textColor: "text-[#f7a221] " }
    ].map((item, idx) => (
        <motion.div
            key={idx}
            whileHover={{ y: -3, scale: 1.1 }}
            className="flex flex-col items-center cursor-pointer relative group transition-all"
        >
            <div className={`relative p-2.5 rounded-xl ${item.bg} border border-white/20 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <div className={`${item.textColor} group-hover:scale-110 transition-transform group-hover:text-secondary`}>
                    {item.icon}
                </div>
                {item.count !== undefined && (
                    <span className={`absolute -top-1 -right-1 bg-secondary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white font-bold shadow-md`}>
                        {item.count}
                    </span>
                )}
            </div>
            <span className="text-[10px] mt-1.5 font-semibold uppercase text-primary group-hover:text-secondary transition-colors">
                {item.label}
            </span>
        </motion.div>
    ))}
    <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden cursor-pointer p-2 bg-black/10 rounded-xl"
    >
        {isMenuOpen ? <X size={28} className="text-black" /> : <Menu size={28} className="text-black" />}
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
                                        {mobileNavItems.map((item, i) => (
                                            <motion.a
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: i * 0.1 }}
                                                key={item.label}
                                                href="#"
                                                className="text-lg font-black text-white flex items-center justify-between"
                                            >
                                                <div className="flex items-center">
                                                    <span className="mr-3 text-xl">{item.icon}</span>
                                                    {item.label}
                                                </div>
                                                <ChevronRight size={16} className="text-secondary" />
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
                {/* <nav className="bg-primary-light border-t border-white/5"> */}
                                <nav className="bg-[#7f7f7f] border-t border-white/5">

                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col md:flex-row md:items-center md:justify-between py-2 md:py-3"
                        >
                            {/* Navigation Links with Enhanced Backgrounds and Animations */}
                            <div className="flex items-center gap-2 md:gap-4 overflow-x-auto py-2 md:py-0">
                                {navItems.map((link, idx) => (
                                    <Link 
                                        key={idx} 
                                        to={link.path} 
                                        className={`
                                            ${link.bg} ${link.border}
                                            text-white 
                                            font-semibold text-sm py-2 px-3 whitespace-nowrap
                                            flex items-center rounded-xl transition-all duration-300
                                            hover:scale-105 hover:shadow-lg
                                        `}
                                    >
                                        <span className={`${link.color} mr-2 text-lg ${link.animation || ''} relative`}>
                                            {link.icon}
                                            {/* Special effects for specific items */}
                                            {link.label === "Coupons" && (
                                                <>
                                                    <motion.span
                                                        animate={{ rotate: [0, 5, 0, -5, 0] }}
                                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                                        className="absolute -top-1 -right-1 text-xs"
                                                    >
                                                        ✨
                                                    </motion.span>
                                                    <motion.span
                                                        animate={{ rotate: [0, -5, 0, 5, 0] }}
                                                        transition={{ duration: 3, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                                                        className="absolute -bottom-1 -left-1 text-xs"
                                                    >
                                                        💫
                                                    </motion.span>
                                                </>
                                            )}
                                            {link.label === "Just Arrived" && (
                                                <motion.div
                                                    animate={{ x: [0, 3, 0, -3, 0] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                    className="absolute -right-2 -top-2 text-xs"
                                                >
                                                    ⭐
                                                </motion.div>
                                            )}
                                            {link.label === "Sale" && (
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                                    className="absolute -top-1 -right-1 text-xs"
                                                >
                                                    🔥
                                                </motion.div>
                                            )}
                                        </span>
                                        <span className="font-bold">{link.label}</span>
                                        
                                        {/* Special badges for specific items */}
                                        {link.label === "Coupons" && (
                                            <motion.span
                                                animate={{ 
                                                    backgroundColor: ['#8B5CF6', '#7C3AED', '#6D28D9', '#7C3AED', '#8B5CF6']
                                                }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full text-white font-bold"
                                            >
                                                FREE
                                            </motion.span>
                                        )}
                                        {link.label === "Sale" && (
                                            <motion.span
                                                animate={{ 
                                                    backgroundColor: ['#EF4444', '#DC2626', '#B91C1C', '#DC2626', '#EF4444']
                                                }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full text-white font-bold"
                                            >
                                                70% OFF
                                            </motion.span>
                                        )}
                                        {link.label === "Just Arrived" && (
                                            <motion.span
                                                animate={{ 
                                                    backgroundColor: ['#10B981', '#059669', '#047857', '#059669', '#10B981']
                                                }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full text-white font-bold"
                                            >
                                                NEW
                                            </motion.span>
                                        )}
                                    </Link>
                                ))}
                            </div>

                            {/* GREAT REPUBLIC SALE Banner */}
                            <div className="mt-2 md:mt-0 flex justify-center md:block md:ml-4">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7, type: "spring" }}
                                    className="relative"
                                >
                                    {/* Blinking animation container */}
                                    <motion.div
                                        animate={{
                                            opacity: [1, 0.7, 1],
                                            scale: [1, 1.05, 1],
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }}
                                        className="relative overflow-hidden rounded-lg px-4 py-2 shadow-lg border-2 border-transparent"
                                    >
                                        {/* Flag stripes background */}
                                        <div className="absolute inset-0 flex">
                                            <div 
                                                className="w-1/3 h-full"
                                                style={{ background: '#FF9933' }} // Saffron
                                            />
                                            <div 
                                                className="w-1/3 h-full"
                                                style={{ background: '#FFFFFF' }} // White
                                            />
                                            <div 
                                                className="w-1/3 h-full"
                                                style={{ background: '#138808' }} // Green
                                            />
                                        </div>
                                        
                                        {/* Text with strong flag colors and emoji icons */}
                                        <div className="relative z-10 flex items-center justify-center gap-2">
                                           
                                            <span className="font-black text-base md:text-lg tracking-wider uppercase">
                                                <span style={{ color: '#FF9933' }}>CELEBRATE </span>
                                                <span style={{ color: '#FFFFFF', textShadow: '0 0 2px #000' }}>REPUBLIC </span>
                                                <span style={{ color: '#138808' }}>SALE</span>
                                            </span>
                                            <motion.span
                                                animate={{ y: [0, -5, 0, 5, 0] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                                className="text-xl"
                                            >
                                                🇮🇳
                                            </motion.span>
                                        </div>
                                        
                                        {/* Blinking border */}
                                        <motion.div 
                                            className="absolute inset-0 rounded-lg"
                                            style={{ 
                                                border: '2px solid transparent',
                                                background: 'linear-gradient(90deg, #FF9933, #FFFFFF, #138808) border-box',
                                            }}
                                            animate={{
                                                borderWidth: ['1px', '3px', '1px'],
                                                opacity: [0.7, 1, 0.7],
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                repeat: Infinity,
                                                repeatType: "reverse"
                                            }}
                                        />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </nav>
            </motion.header>
        </>
    );
};

export default Navbar;






























// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     Search,
//     User,
//     Heart,
//     ShoppingCart,
//     Menu,
//     X,
//     Phone,
//     Mail,
//     Clock,
//     ChevronRight,
//     Zap
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import logo from "../assets/logo.jpg"
// import logo1 from "../assets/logo.jpg"
// import offerlogo from "../assets/offerlogo.png"

// const Navbar = ({ searchQuery, setSearchQuery, isMenuOpen, setIsMenuOpen }) => {
//     // Enhanced Navigation items with unique backgrounds and animations
//     const navItems = [
//         { 
//             label: "All Products", 
//             path: "/", 
//             icon: "📦",
//             color: "text-blue-400",
//             bg: "bg-gradient-to-r from-blue-500/10 to-blue-600/10",
//             border: "border border-blue-400/20"
//         },
//         { 
//             label: "Todays' Deal", 
//             path: "/", 
//             icon: "🔥",
//             color: "text-orange-400",
//             bg: "bg-gradient-to-r from-orange-500/10 to-red-500/10",
//             border: "border border-orange-400/20"
//         },
//         { 
//             label: "Just Arrived", 
//             path: "/", 
//             icon: "🚚",
//             color: "text-green-400",
//             bg: "bg-gradient-to-r from-green-500/10 to-emerald-500/10",
//             border: "border border-green-400/20",
//             animation: "animate-truck-move"
//         },
//         { 
//             label: "Sale", 
//             path: "/", 
//             icon: "🏷️",
//             color: "text-red-400",
//             bg: "bg-gradient-to-r from-red-500/10 to-pink-500/10",
//             border: "border border-red-400/20",
//             animation: "animate-pulse-fire"
//         },
//         { 
//             label: "Coupons", 
//             path: "/", 
//             icon: "🎫",
//             color: "text-purple-400",
//             bg: "bg-gradient-to-r from-purple-500/10 to-indigo-500/10",
//             border: "border border-purple-400/20",
//             animation: "animate-dance-slow"
//         },
//         { 
//             label: "Customer Care", 
//             path: "/customer-care", 
//             icon: "📞",
//             color: "text-cyan-400",
//             bg: "bg-gradient-to-r from-cyan-500/10 to-blue-500/10",
//             border: "border border-cyan-400/20"
//         }
//     ];

//     // Mobile menu items with real icons
//     const mobileNavItems = [
//         { label: "Just Arrived", icon: "🚚" },
//         { label: "Best Seller", icon: "⭐" },
//         { label: "Kitchen", icon: "🍳" },
//         { label: "Household", icon: "🏠" },
//         { label: "Toys", icon: "🧸" },
//         { label: "Fitness", icon: "💪" },
//         { label: "Bulk Inquiry", icon: "📦" }
//     ];

//     return (
//         <>
//             {/* Top Info Bar (Simplified) */}
//             <div className="bg-white border-b border-gray-100 py-1.5 px-4 hidden md:block">
//                 <div className="container mx-auto flex justify-between text-[11px] text-gray-500 font-medium">
//                     <div className="flex items-center gap-6">
//                         <span className="flex items-center gap-1.5 hover:text-secondary cursor-pointer transition-colors">
//                             <Phone size={12} className="text-secondary" /> +91 91730 00000
//                         </span>
//                         <span className="flex items-center gap-1.5 hover:text-secondary cursor-pointer transition-colors">
//                             <Mail size={12} className="text-secondary" /> support@offerwale.com
//                         </span>
//                     </div>
//                     <div className="flex items-center gap-4">
//                         <span className="flex items-center gap-1.5 uppercase tracking-tight">
//                             <Clock size={12} className="text-secondary" /> Pan India Delivery • 7 Days Support
//                         </span>
//                     </div>
//                 </div>
//             </div>

//             {/* Primary Header */}
//             <motion.header
//                 initial={{ y: -100, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: "circOut" }}
//                 className="bg-primary/95 backdrop-blur-xl sticky top-0 z-50 text-white shadow-2xl border-b border-white/5"
//             >
//                 <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                    
//                     <div className=" flex items-center justify-between gap-8">
//                         {/* Logo */}
//                         <motion.div
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="flex items-center gap-2 cursor-pointer"
//                         >
//                             <img style={{borderRadius:"20%"}} width="90px" height="auto" src={logo} alt="" />
                           
//                         </motion.div>

//                         {/* Search Bar */}
//                       <div className="flex-1 max-w-2xl relative hidden md:block">
//     <div className="flex border-2  rounded-2xl overflow-hidden">
//         {/* or use border-red-500 for red color */}
//         <input
//             type="text"
//             placeholder="Search for kitchen, household, toys and more..."
//             className="w-full py-3 px-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent transition-all pl-12 bg-white/90 backdrop-blur-md font-medium"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <motion.button
//             whileHover={{ backgroundColor: '#c2181d', scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="bg-secondary px-8 transition-all flex items-center justify-center"
//         >
//             <Search size={20} />
//         </motion.button>
//     </div>
//     <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
// </div>

//                         {/* Action Icons */}
//                         <div className="flex items-center gap-5">
//                             {[
//                                 { icon: <User size={24} />, label: "Login" },
//                                 { icon: <Heart size={24} />, label: "Wishlist", count: 0, badge: "bg-secondary" },
//                                 { icon: <ShoppingCart size={24} />, label: "My Cart", count: 0, badge: "bg-accent", badgeText: "text-primary" }
//                             ].map((item, idx) => (
//                                 <motion.div
//                                     key={idx}
//                                     whileHover={{ y: -3, color: '#09cdff' }}
//                                     className="flex flex-col items-center cursor-pointer relative group transition-colors"
//                                 >
//                                     {item.icon}
//                                     {item.count !== undefined && (
//                                         <span className={`absolute -top-1 -right-1 ${item.badge} ${item.badgeText || 'text-white'} text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-primary font-bold`}>
//                                             {item.count}
//                                         </span>
//                                     )}
//                                     <span className="text-[10px] mt-0.5 font-semibold uppercase">{item.label}</span>
//                                 </motion.div>
//                             ))}
//                             <motion.div
//                                 whileTap={{ scale: 0.9 }}
//                                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                                 className="md:hidden cursor-pointer p-2 bg-white/10 rounded-xl"
//                             >
//                                 {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//                             </motion.div>
//                         </div>

//                     </div>

//                     {/* Mobile Menu Drawer */}
//                     <AnimatePresence>
//                         {isMenuOpen && (
//                             <motion.div
//                                 initial={{ opacity: 0, height: 0 }}
//                                 animate={{ opacity: 1, height: 'auto' }}
//                                 exit={{ opacity: 0, height: 0 }}
//                                 className="md:hidden bg-primary-light rounded-2xl overflow-hidden mt-2 border border-white/5"
//                             >
//                                 <div className="flex flex-col p-6 space-y-6">
//                                     {/* Reinstated Mobile Search in Drawer */}
//                                     <div className="relative">
//                                         <input
//                                             type="text"
//                                             placeholder="Search for smart gadgets..."
//                                             className="w-full py-4 px-12 rounded-2xl text-gray-800 text-sm focus:outline-none bg-white shadow-xl font-bold"
//                                         />
//                                         <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                                     </div>

//                                     <div className="flex flex-col space-y-4">
//                                         {mobileNavItems.map((item, i) => (
//                                             <motion.a
//                                                 initial={{ x: -20, opacity: 0 }}
//                                                 animate={{ x: 0, opacity: 1 }}
//                                                 transition={{ delay: i * 0.1 }}
//                                                 key={item.label}
//                                                 href="#"
//                                                 className="text-lg font-black text-white flex items-center justify-between"
//                                             >
//                                                 <div className="flex items-center">
//                                                     <span className="mr-3 text-xl">{item.icon}</span>
//                                                     {item.label}
//                                                 </div>
//                                                 <ChevronRight size={16} className="text-secondary" />
//                                             </motion.a>
//                                         ))}
//                                     </div>
//                                     <button className="bg-secondary text-white font-black py-4 rounded-2xl mt-4 shadow-xl active:scale-95 transition-all">LOGIN / SIGNUP</button>
//                                 </div>
//                             </motion.div>
//                         )}
//                     </AnimatePresence>
//                 </div>

//                 {/* Bottom Nav Bar */}
//                 <nav className="bg-primary-light/50 border-t border-white/5">
//                     <div className="container mx-auto px-4">
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.5 }}
//                             className="flex flex-col md:flex-row md:items-center md:justify-between py-2 md:py-3"
//                         >
//                             {/* Navigation Links with Enhanced Backgrounds and Animations */}
//                             <div className="flex items-center gap-2 md:gap-4 overflow-x-auto py-2 md:py-0">
//                                 {navItems.map((link, idx) => (
//                                     <Link 
//                                         key={idx} 
//                                         to={link.path} 
//                                         className={`
//                                             ${link.bg} ${link.border}
//                                             text-white 
//                                             font-semibold text-sm py-2 px-3 whitespace-nowrap
//                                             flex items-center rounded-xl transition-all duration-300
//                                             hover:scale-105 hover:shadow-lg
//                                         `}
//                                     >
//                                         <span className={`${link.color} mr-2 text-lg ${link.animation || ''} relative`}>
//                                             {link.icon}
//                                             {/* Special effects for specific items */}
//                                             {link.label === "Coupons" && (
//                                                 <>
//                                                     <motion.span
//                                                         animate={{ rotate: [0, 5, 0, -5, 0] }}
//                                                         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                                                         className="absolute -top-1 -right-1 text-xs"
//                                                     >
//                                                         ✨
//                                                     </motion.span>
//                                                     <motion.span
//                                                         animate={{ rotate: [0, -5, 0, 5, 0] }}
//                                                         transition={{ duration: 3, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
//                                                         className="absolute -bottom-1 -left-1 text-xs"
//                                                     >
//                                                         💫
//                                                     </motion.span>
//                                                 </>
//                                             )}
//                                             {link.label === "Just Arrived" && (
//                                                 <motion.div
//                                                     animate={{ x: [0, 3, 0, -3, 0] }}
//                                                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                                                     className="absolute -right-2 -top-2 text-xs"
//                                                 >
//                                                     ⭐
//                                                 </motion.div>
//                                             )}
//                                             {link.label === "Sale" && (
//                                                 <motion.div
//                                                     animate={{ scale: [1, 1.2, 1] }}
//                                                     transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                                                     className="absolute -top-1 -right-1 text-xs"
//                                                 >
//                                                     🔥
//                                                 </motion.div>
//                                             )}
//                                         </span>
//                                         <span className="font-bold">{link.label}</span>
                                        
//                                         {/* Special badges for specific items */}
//                                         {link.label === "Coupons" && (
//                                             <motion.span
//                                                 animate={{ 
//                                                     backgroundColor: ['#8B5CF6', '#7C3AED', '#6D28D9', '#7C3AED', '#8B5CF6']
//                                                 }}
//                                                 transition={{ duration: 2, repeat: Infinity }}
//                                                 className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full text-white font-bold"
//                                             >
//                                                 FREE
//                                             </motion.span>
//                                         )}
//                                         {link.label === "Sale" && (
//                                             <motion.span
//                                                 animate={{ 
//                                                     backgroundColor: ['#EF4444', '#DC2626', '#B91C1C', '#DC2626', '#EF4444']
//                                                 }}
//                                                 transition={{ duration: 1.5, repeat: Infinity }}
//                                                 className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full text-white font-bold"
//                                             >
//                                                 70% OFF
//                                             </motion.span>
//                                         )}
//                                         {link.label === "Just Arrived" && (
//                                             <motion.span
//                                                 animate={{ 
//                                                     backgroundColor: ['#10B981', '#059669', '#047857', '#059669', '#10B981']
//                                                 }}
//                                                 transition={{ duration: 2, repeat: Infinity }}
//                                                 className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full text-white font-bold"
//                                             >
//                                                 NEW
//                                             </motion.span>
//                                         )}
//                                     </Link>
//                                 ))}
//                             </div>

//                             {/* GREAT REPUBLIC SALE Banner */}
//                             <div className="mt-2 md:mt-0 flex justify-center md:block md:ml-4">
//                                 <motion.div
//                                     initial={{ opacity: 0, scale: 0.8 }}
//                                     animate={{ opacity: 1, scale: 1 }}
//                                     transition={{ delay: 0.7, type: "spring" }}
//                                     className="relative"
//                                 >
//                                     {/* Blinking animation container */}
//                                     <motion.div
//                                         animate={{
//                                             opacity: [1, 0.7, 1],
//                                             scale: [1, 1.05, 1],
//                                         }}
//                                         transition={{
//                                             duration: 1,
//                                             repeat: Infinity,
//                                             repeatType: "reverse",
//                                             ease: "easeInOut"
//                                         }}
//                                         className="relative overflow-hidden rounded-lg px-4 py-2 shadow-lg border-2 border-transparent"
//                                     >
//                                         {/* Flag stripes background */}
//                                         <div className="absolute inset-0 flex">
//                                             <div 
//                                                 className="w-1/3 h-full"
//                                                 style={{ background: '#FF9933' }} // Saffron
//                                             />
//                                             <div 
//                                                 className="w-1/3 h-full"
//                                                 style={{ background: '#FFFFFF' }} // White
//                                             />
//                                             <div 
//                                                 className="w-1/3 h-full"
//                                                 style={{ background: '#138808' }} // Green
//                                             />
//                                         </div>
                                        
//                                         {/* Text with strong flag colors and emoji icons */}
//                                         <div className="relative z-10 flex items-center justify-center gap-2">
                                           
//                                             <span className="font-black text-base md:text-lg tracking-wider uppercase">
//                                                 <span style={{ color: '#FF9933' }}>CELEBRATE </span>
//                                                 <span style={{ color: '#FFFFFF', textShadow: '0 0 2px #000' }}>REPUBLIC </span>
//                                                 <span style={{ color: '#138808' }}>SALE</span>
//                                             </span>
//                                             <motion.span
//                                                 animate={{ y: [0, -5, 0, 5, 0] }}
//                                                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                                                 className="text-xl"
//                                             >
//                                                 🇮🇳
//                                             </motion.span>
//                                         </div>
                                        
//                                         {/* Blinking border */}
//                                         <motion.div 
//                                             className="absolute inset-0 rounded-lg"
//                                             style={{ 
//                                                 border: '2px solid transparent',
//                                                 background: 'linear-gradient(90deg, #FF9933, #FFFFFF, #138808) border-box',
//                                             }}
//                                             animate={{
//                                                 borderWidth: ['1px', '3px', '1px'],
//                                                 opacity: [0.7, 1, 0.7],
//                                             }}
//                                             transition={{
//                                                 duration: 0.8,
//                                                 repeat: Infinity,
//                                                 repeatType: "reverse"
//                                             }}
//                                         />
//                                     </motion.div>
//                                 </motion.div>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </nav>
//             </motion.header>
//         </>
//     );
// };

// export default Navbar;