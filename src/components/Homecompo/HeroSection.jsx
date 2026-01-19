import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Star, Zap, TrendingUp, Flame, ShoppingBag } from 'lucide-react';

const HeroSection = () => {
    // Mouse Parallax Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set((clientX / innerWidth) - 0.5);
        mouseY.set((clientY / innerHeight) - 0.5);
    };

    const springConfig = { damping: 30, stiffness: 200 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Parallax Coefficients for different layers
    const layer1X = useTransform(smoothX, [-0.5, 0.5], [-60, 60]);
    const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-60, 60]);

    const layer2X = useTransform(smoothX, [-0.5, 0.5], [30, -30]);
    const layer2Y = useTransform(smoothY, [-0.5, 0.5], [30, -30]);

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-[600px] md:min-h-[550px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-gradient-to-br from-primary via-[#1a2a4e] to-primary"
        >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Vibrant Animated Mesh Gradient */}
                <motion.div
                    style={{ x: layer2X, y: layer2Y }}
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 50%, rgba(9,205,255,0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 50%, rgba(227,30,36,0.25) 0%, transparent 50%)",
                            "radial-gradient(circle at 50% 80%, rgba(9,205,255,0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 50%, rgba(9,205,255,0.3) 0%, transparent 50%)"
                        ]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                />

                {/* Floating Orbs - More Visible */}
                <motion.div
                    style={{ x: layer1X, y: layer1Y }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-10 -left-10 w-[60%] h-[150%] bg-accent/30 rounded-full blur-[120px]"
                />
                <motion.div
                    style={{ x: useTransform(smoothX, [-0.5, 0.5], [40, -40]), y: useTransform(smoothY, [-0.5, 0.5], [40, -40]) }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-10 -right-10 w-[70%] h-[150%] bg-secondary/20 rounded-full blur-[140px]"
                />

                {/* Additional Accent Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-r from-accent/10 via-transparent to-secondary/10 rounded-full blur-3xl"></div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            <div className="relative z-10 grid md:grid-cols-[1.2fr_0.8fr] h-full min-h-[600px] md:min-h-[550px] items-center">
                {/* Content Side - Compact & Punchy */}
                <div className="flex flex-col justify-center p-6 md:p-12 md:pl-16 space-y-4 md:space-y-3">
                    <div className="flex items-center gap-6 flex-wrap">
                        {/* Compact Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex items-center gap-2 bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-xl border border-white/10 text-accent text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-[0.3em] shadow-xl"
                        >
                            <Zap size={12} className="text-secondary animate-pulse" /> Viral Innovations
                        </motion.div>

                        {/* Live Stats Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-2 glass-dark px-4 py-2 rounded-full"
                        >
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                            <span className="text-[9px] font-black text-white uppercase tracking-wider">2.4K Online</span>
                        </motion.div>
                    </div>

                    <div className="space-y-2">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "circOut" }}
                            className="text-4xl md:text-6xl font-black leading-[0.9] tracking-[-0.03em] text-white"
                        >
                            SHOP SMART.{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-secondary animate-mesh bg-[length:300%_auto] drop-shadow-[0_0_30px_rgba(9,205,255,0.3)]">
                                LIVE BIG.
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed font-semibold"
                        >
                            India's #1 destination for viral gadgets & premium tools at wholesale prices.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-3 pt-2"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(227,30,36,0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-premium flex items-center gap-3 py-3 px-8 text-sm shadow-[0_15px_30px_-5px_rgba(227,30,36,0.4)]"
                        >
                            <ShoppingBag size={18} /> SHOP NOW
                        </motion.button>
                        <motion.button
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(9,205,255,0.5)" }}
                            className="bg-transparent border-2 border-white/10 text-white font-black px-6 py-3 rounded-full text-xs tracking-[0.15em] transition-all flex items-center gap-2"
                        >
                            VIEW CATALOG <ArrowRight size={14} />
                        </motion.button>
                    </motion.div>
                </div>

                {/* Visual Side - Compact Interactive Elements */}
                <div className="hidden md:flex items-center justify-end relative pr-12 h-full">
                    {/* Floating Interactive Cards */}
                    <div className="relative w-full max-w-[300px] h-full flex items-center justify-center">
                        {/* Card 1 - Trending */}
                        <motion.div
                            style={{ x: layer1X, y: layer1Y }}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="absolute top-4 right-0 glass-card p-4 rounded-2xl z-30 shadow-2xl border-white/20 cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-accent to-blue-500 p-3 rounded-xl">
                                    <TrendingUp className="text-white" size={20} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Trending</p>
                                    <p className="text-xl font-black text-white">#1 Product</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2 - Flash Sale */}
                        <motion.div
                            style={{ x: layer2X, y: layer2Y }}
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            className="absolute bottom-4 left-0 glass-dark p-4 rounded-2xl z-20 shadow-2xl border-white/10 cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-secondary to-red-600 p-3 rounded-xl">
                                    <Flame className="text-white" size={20} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Flash Sale</p>
                                    <p className="text-lg font-black text-white">70% OFF</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Center Rating Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                            className="glass-card p-5 rounded-2xl shadow-2xl border-white/20"
                        >
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-1 text-yellow-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-2xl font-black text-white">4.9</p>
                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-wider">12.5K Reviews</p>
                            </div>
                        </motion.div>

                        {/* Floating Particles */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 3 + i,
                                    repeat: Infinity,
                                    delay: i * 0.5,
                                }}
                                className="absolute w-2 h-2 bg-accent/50 rounded-full blur-sm"
                                style={{
                                    left: `${30 + i * 25}%`,
                                    top: `${20 + i * 20}%`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
