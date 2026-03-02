import React, { useCallback, memo, useState, useRef, useEffect, useContext } from 'react';
import {
    Search, User, Heart, ShoppingCart, Menu, X, Phone, Mail, Clock,
    ChevronRight, Home, Flame, Package, Tag, Ticket, HeadphonesIcon,
    Smartphone, ChefHat, Shirt, Dumbbell, Plane, Book, Baby, Car, Box, Gift,
    MapPin
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { WishlistContext } from '../contexts/WishlistContext';
import { CartContext } from '../contexts/CartContext';
import CartDrawer from './CartDrawer';
import { NotificationContext } from '../contexts/NotificationContext';
import logo from "../assets/logo2.png";
import homeIcon from "../assets/home (2).png";
import justarrivedIcon from "../assets/just-arrived (1).png";
import dealIcon from "../assets/deal.png";
import saleIcon from "../assets/sale.png";
import coupanIcon from "../assets/coupon.png";
import customercareIcon from "../assets/service.png";
import discountBannerIcon from "../assets/discount-voucher.png"
// --- Sub-Components ---

const ActionIcon = memo(({ item }) => (
    <div
        onClick={() => {
            if (typeof item.onClick === 'function') item.onClick();
        }}
        className="flex flex-col items-center cursor-pointer relative group text-black hover:text-[#F7A221] transition-colors min-w-[50px]"
    >
        <div className="p-1 md:p-2 rounded-xl group-hover:bg-gray-50 group-hover:scale-110 transition-all duration-300">
            {item.icon}
        </div>
        {item.count !== undefined && (
            <span className={`absolute top-0 right-1 md:top-1 md:right-2 ${item.badge} text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white font-bold shadow-sm group-hover:animate-bounce`}>
                {item.count}
            </span>
        )}
        <span className="text-[9px] md:text-[10px] mt-0.5 font-bold uppercase tracking-tighter whitespace-nowrap">
            {item.label}
        </span>
    </div>
));

const MegaDropdown = ({ isOpen }) => {
    if (!isOpen) return null;

    const categories = [
        { label: "Smart Life Gadgets", icon: <Smartphone size={18} className="text-blue-600" /> },
        { label: "Home & Kitchen", icon: <ChefHat size={18} className="text-red-600" /> },
        { label: "Fashion World", icon: <Shirt size={18} className="text-[#F7A221]" /> },
        { label: "Sports & Fitness", icon: <Dumbbell size={18} className="text-blue-600" /> },
        { label: "Tours & Travels", icon: <Plane size={18} className="text-[#F7A221]" /> },
        { label: "Stationary", icon: <Book size={18} className="text-red-600" /> },
        { label: "Baby Items", icon: <Baby size={18} className="text-blue-600" /> },
        { label: "Car Accessories", icon: <Car size={18} className="text-[#F7A221]" /> },
        { label: "Mix Items Daily use", icon: <Box size={18} className="text-red-600" /> },
        { label: "Gifts", icon: <Gift size={18} className="text-blue-600" /> }
    ];

    return (
        <div className="absolute top-[100%] left-0 w-full bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-t-2 border-[#F7A221] animate-slideDown z-50 hidden lg:block">
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((category, index) => (
                        <a
                            key={index}
                            href="#"
                            style={{ alignItems: "center" }}
                            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-orange-50 transition-all group border border-transparent hover:border-orange-100 shadow-sm min-w-0"
                        >
                            <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 group-hover:shadow-md group-hover:rotate-3 transition-all duration-300">
                                {category.icon}
                            </div>
                            <span style={{ fontSize: "14px" }} className="font-bold text-black group-hover:text-[#F7A221] transition-colors text-[10px] md:text-[12px] tracking-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px]">
                                {category.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

const NavItemWithDropdown = ({ link }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="static"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="nav-link flex items-center gap-2 group cursor-pointer">
                <div className={`transition-all duration-300 ${isOpen ? 'scale-110 rotate-12' : ''}`}>
                    {link.icon}
                </div>
                <span className="font-bold text-black group-hover:text-black transition-colors">{link.label}</span>
                <ChevronRight size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-90 text-black' : 'text-white/70'}`} />
            </div>
            <MegaDropdown isOpen={isOpen} />
        </div>
    );
};

// Custom Image Icon Component with animations
const ImageIcon = ({ src, alt, className = "", animation = "animate-bounce-soft" }) => (
    <img 
        src={src} 
        alt={alt} 
        className={`w-[30px] h-[30px] object-contain ${animation} ${className}`}
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
    />
);

const Navbar = ({ searchQuery, setSearchQuery, isMenuOpen, setIsMenuOpen }) => {

    const handleSearchChange = useCallback((e) => {
        setSearchQuery(e.target.value);
    }, [setSearchQuery]);
    
    const navigate = useNavigate();
    const { items: wishlistItems } = useContext(WishlistContext);
    const { items: cartItems } = useContext(CartContext);
    const { notify } = useContext(NotificationContext);

    const [isLogoHovered, setIsLogoHovered] = useState(false);
    const [burstIcons, setBurstIcons] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    
    useEffect(() => {
        let interval;
        if (isLogoHovered) {
            interval = setInterval(() => {
                const newIcon = {
                    id: Date.now(),
                    ...iconPool[Math.floor(Math.random() * iconPool.length)],
                    x: (Math.random() - 0.5) * 200 + "px",
                    y: (Math.random() - 0.5) * 200 + "px",
                    rotation: Math.random() * 360 + "deg"
                };
                setBurstIcons((prev) => [...prev.slice(-15), newIcon]);
            }, 150);
        } else {
            setBurstIcons([]);
        }
        return () => clearInterval(interval);
    }, [isLogoHovered]);
    
    const iconPool = [
        { icon: <Smartphone size={18} />, color: "text-blue-500" },
        { icon: <Shirt size={18} />, color: "text-orange-500" },
        { icon: <Dumbbell size={18} />, color: "text-green-500" },
        { icon: <Package size={18} />, color: "text-purple-500" },
        { icon: <Baby size={18} />, color: "text-pink-500" },
        { icon: <ChefHat size={18} />, color: "text-red-500" },
        { icon: <Car size={18} />, color: "text-gray-600" },
        { icon: <HeadphonesIcon size={18} />, color: "text-yellow-500" }
    ];
    
    // calculate total quantity for cart badge
    const cartCount = cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0);

    const actionIcons = [
        { icon: <User size={22} />, label: "Account", onClick: () => console.log('Account clicked') },
        { icon: <Heart size={22} />, label: "Wishlist", count: wishlistItems.length, badge: "bg-red-600", onClick: () => navigate('/wishlist') },
        { icon: <ShoppingCart size={22} />, label: "Cart", count: cartCount, badge: "bg-black", onClick: () => setCartOpen(true) }
    ];

    // Updated bottomNavLinks with PNG images and individual animations
    const handleCloseCartDrawer = () => setCartOpen(false);
    const bottomNavLinks = [
        {
            label: "Todays' Deal",
            path: "/",
            icon: <ImageIcon src={dealIcon} alt="Deal" animation="animate-swing" />
        },
        {
            label: "Just Arrived",
            path: "/",
            icon: <ImageIcon src={justarrivedIcon} alt="Just Arrived" animation="animate-float" />
        },
        {
            label: "Sale",
            path: "/",
            icon: <ImageIcon src={saleIcon} alt="Sale" animation="animate-flicker" />
        },
        {
            label: "Coupons",
            path: "/",
            icon: <ImageIcon src={coupanIcon} alt="Coupons" animation="animate-bounce-soft" />
        },
        {
            label: "Customer Care",
            path: "/customer-care",
            icon: <ImageIcon src={customercareIcon} alt="Customer Care" animation="animate-tilt" />
        }
    ];

    const mobileCategories = [
        "Smart Life", "Home & Kitchen", "Fashion", "Sports", "Travel", "Stationary", "Baby Items", "Car Accessories"
    ];

    return (
        <>
            {/* Top Info Bar */}
            <div className="bg-black text-white py-3 px-4 hidden lg:block border-b border-white/10">
                <div className="container mx-auto flex justify-between text-[11px] font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-8">
                        <span className="flex items-center gap-2 hover:text-[#F7A221] cursor-pointer transition-colors group">
                            <Phone size={12} className="text-[#F7A221] group-hover:animate-shake" /> +91 93200 01717
                        </span>
                        <span className="flex items-center gap-2 hover:text-[#F7A221] cursor-pointer transition-colors group">
                            <Mail size={12} className="text-[#F7A221] group-hover:scale-110" /> support@offerwale.com
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Clock size={12} className="text-[#F7A221] animate-pulse" /> <span className="text-white/90">Pan India Delivery • 24/7 Support</span>
                    </div>
                </div>
            </div>

            <header className="bg-white sticky top-0 z-50 text-black shadow-md">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between gap-2 md:gap-8 h-30 md:h-24">

                        {/* Logo & Mobile Menu Toggle */}
                        <div className="flex items-center gap-2">
                            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 text-black bg-gray-50 rounded-lg">
                                <Menu size={24} />
                            </button>

                            {/* Enhanced Logo Section */}
                            <Link
                                to="/"
                                className="relative flex-shrink-0 flex items-center justify-center p-1 group"
                                onMouseEnter={() => setIsLogoHovered(true)}
                                onMouseLeave={() => setIsLogoHovered(false)}
                            >
                                {burstIcons.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`absolute z-[-1] ${item.color} animate-flush-continuous`}
                                        style={{
                                            '--target-x': item.x,
                                            '--target-y': item.y,
                                            '--target-rot': item.rotation
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                ))}

                                <img
                                    className="relative z-10 object-contain transition-transform duration-500 w-[100px] md:w-[110px]"
                                    src={logo}
                                    alt="Logo"
                                />
                            </Link>
                        </div>

                        {/* Location - Desktop Only */}
                        <div className="hidden xl:flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-all border border-transparent hover:border-gray-100 group">
                            <MapPin size={22} className="text-red-600 animate-bounce" />
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 font-bold uppercase leading-none">Deliver to</span>
                                <span className="text-sm text-gray-900 leading-tight">Mumbai 421004</span>
                            </div>
                        </div>

                        {/* Search Bar - Hidden on Mobile */}
                        <div className="flex-1 max-w-xl relative hidden lg:block">
                            <input
                                type="text"
                                placeholder="Search products, brands and more..."
                                className="w-full py-3.5 px-14 rounded-2xl text-black focus:outline-none bg-gray-100 border-2 border-transparent focus:border-[#F7A221] focus:bg-white transition-all font-bold text-sm"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white py-2 px-5 rounded-xl hover:bg-[#F7A221] transition-all shadow-md font-bold text-xs uppercase hover:tracking-widest duration-300">
                                Search
                            </button>
                        </div>

                        {/* Action Icons */}
                        <div className="flex items-center gap-2 md:gap-4 lg:gap-8">
                            {actionIcons.map((item, idx) => <ActionIcon key={idx} item={item} />)}
                        </div>
                    </div>

                    {/* Mobile Search Bar */}
                    <div className="pb-4 lg:hidden">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full py-3 px-12 rounded-xl text-black focus:outline-none bg-gray-100 border border-gray-200 font-bold text-xs"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        </div>
                    </div>
                </div>

                {/* Bottom Desktop Nav */}
                <nav className="bg-[linear-gradient(90deg,rgba(247,162,33,0.9),rgba(242,140,0,0.6))] shadow-inner hidden lg:block relative">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-center gap-2 py-2">
                            <NavItemWithDropdown
                                // link={{ label: "All Categories", path: "/products", icon: <Home size={30} className="font-light" /> }}
                                link={{ label: "All Categories", path: "/products", icon: <ImageIcon src={homeIcon} alt="Home" animation="animate-bounce-soft" /> }}

                            />
                            <div className="h-6 w-[1px] bg-white/20 mx-2"></div>
                            {bottomNavLinks.map((link, idx) => (
                                <Link
                                    key={idx}
                                    to={link.path}
                                    className="nav-link flex items-center gap-2 hover:bg-white/10 group overflow-hidden"
                                >
                                    <div className="transition-transform duration-300 group-hover:scale-125">
                                        {link.icon}
                                    </div>
                                    <span className="font-bold text-black relative z-10">{link.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>

            {/* cart drawer overlay */}
            {cartOpen && <CartDrawer isOpen={cartOpen} onClose={handleCloseCartDrawer} />}

            {/* cart drawer overlay */}
            {cartOpen && <CartDrawer isOpen={cartOpen} onClose={handleCloseCartDrawer} />}

            {/* Mobile Sidebar Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/60 z-[60] lg:hidden backdrop-blur-sm transition-opacity" onClick={() => setIsMenuOpen(false)}>
                    <div className="w-[85%] max-w-[320px] h-full bg-white shadow-2xl animate-slideRight" onClick={(e) => e.stopPropagation()}>
                        <div className="p-6 border-b flex justify-between items-center bg-gray-50">
                            <span className="text-lg font-black uppercase tracking-tighter text-[#F7A221]">Menu</span>
                            <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-white rounded-full shadow-sm text-black hover:rotate-90 transition-transform">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="overflow-y-auto h-[calc(100%-80px)]">
                            <div className="p-4 space-y-4">
                                <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] mb-2">Shopping</p>
                                {bottomNavLinks.map((link, idx) => (
                                    <Link key={idx} to={link.path} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 p-3 hover:bg-orange-50 rounded-xl transition-colors font-bold text-sm">
                                        <span className="p-2 bg-gray-50 rounded-lg">{link.icon}</span>
                                        {link.label}
                                    </Link>
                                ))}

                                <div className="pt-4 border-t">
                                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] mb-4">Top Categories</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {mobileCategories.map((cat, i) => (
                                            <div key={i} className="p-3 bg-gray-50 rounded-lg text-[11px] font-bold text-center border border-gray-100 text-gray-800">
                                                {cat}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <div className="bg-black rounded-2xl p-4 text-white">
                                        <p className="text-[10px] font-bold opacity-60 uppercase mb-2">Need Help?</p>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-black">+91 93200 01717</p>
                                            <p className="text-[11px] opacity-80">support@offerwale.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .nav-link {
                    padding: 10px 18px;
                    font-size: 12px;
                    font-weight: 800;
                    text-transform: uppercase;
                    border-radius: 12px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    letter-spacing: 0.03em;
                    color: #ffffff !important;
                }
                .nav-link:hover {
                    background: rgba(255, 255, 255, 0.15);
                    transform: translateY(-2px);
                }

                @keyframes slideRight {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0); }
                }
                .animate-slideRight { animation: slideRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

                @keyframes swing {
                    0% { transform: rotate(0deg); }
                    20% { transform: rotate(15deg); }
                    40% { transform: rotate(-10deg); }
                    60% { transform: rotate(5deg); }
                    80% { transform: rotate(-5deg); }
                    100% { transform: rotate(0deg); }
                }
                .animate-swing { animation: swing 2.5s ease-in-out infinite; transform-origin: top center; }

                @keyframes flicker {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.15); opacity: 0.9; }
                    70% { transform: scale(1.05); opacity: 1; }
                }
                .animate-flicker { animation: flicker 1s ease-in-out infinite; }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }
                .animate-float { animation: float 3s ease-in-out infinite; }

                @keyframes bounce-soft {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                .animate-bounce-soft { animation: bounce-soft 2s ease-in-out infinite; }

                @keyframes tilt {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(10deg); }
                }
                .animate-tilt { animation: tilt 3s ease-in-out infinite; }

                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-2px); }
                    75% { transform: translateX(2px); }
                }
                .animate-shake { animation: shake 0.5s ease-in-out infinite; }

                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-15px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slideDown { animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

                @keyframes flush-continuous {
                    0% {
                        transform: translate(0, 0) scale(0.5) rotate(0deg);
                        opacity: 0;
                    }
                    20% {
                        opacity: 1;
                    }
                    100% {
                        transform: translate(var(--target-x), var(--target-y)) scale(1.2) rotate(var(--target-rot));
                        opacity: 0;
                    }
                }
                .animate-flush-continuous {
                    pointer-events: none;
                    animation: flush-continuous 1s ease-out forwards;
                }
            `}</style>
        </>
    );
};

export default memo(Navbar);