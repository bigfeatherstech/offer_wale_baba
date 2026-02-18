import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Sparkles, ArrowRight, Star, Zap, TrendingUp, Flame, ShoppingBag } from 'lucide-react';

const HeroSection = () => {
    // KEPT: Your high-performance refs
    const mousePosRef = useRef({ x: 0, y: 0 });
    const smoothPosRef = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef(null);
    const lastUpdateTimeRef = useRef(0);
    
    // State for UI
    const [gradientIndex, setGradientIndex] = useState(0);
    const [parallaxTransform, setParallaxTransform] = useState({ x: 0, y: 0 });

    // KEPT: Your throttled mouse handler
    const handleMouseMove = useCallback((e) => {
        const now = Date.now();
        if (now - lastUpdateTimeRef.current < 33) return;
        
        lastUpdateTimeRef.current = now;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        mousePosRef.current = {
            x: (clientX / innerWidth) - 0.5,
            y: (clientY / innerHeight) - 0.5
        };
    }, []);

    // KEPT: Your optimized animation loop
    useEffect(() => {
        const updateParallax = () => {
            smoothPosRef.current = {
                x: smoothPosRef.current.x + (mousePosRef.current.x - smoothPosRef.current.x) * 0.08,
                y: smoothPosRef.current.y + (mousePosRef.current.y - smoothPosRef.current.y) * 0.08
            };

            const layer1X = smoothPosRef.current.x * 40;  
            const layer1Y = smoothPosRef.current.y * 40;  
            const layer2X = smoothPosRef.current.x * -20; 
            const layer2Y = smoothPosRef.current.y * -20; 

            setParallaxTransform({
                layer1X, layer1Y, layer2X, layer2Y
            });

            animationFrameRef.current = requestAnimationFrame(updateParallax);
        };

        animationFrameRef.current = requestAnimationFrame(updateParallax);
        return () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, []);

    // UPDATED: Brand Gradients (#f7a221 and Black)
    const gradients = [
        "radial-gradient(circle at 20% 50%, rgba(247,162,33,0.15) 0%, transparent 50%)",
        "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)",
        "radial-gradient(circle at 50% 80%, rgba(247,162,33,0.1) 0%, transparent 50%)",
        "radial-gradient(circle at 20% 50%, rgba(247,162,33,0.15) 0%, transparent 50%)"
    ];

    useEffect(() => {
        const gradientInterval = setInterval(() => {
            setGradientIndex(prev => (prev + 1) % 4);
        }, 5000);
        return () => clearInterval(gradientInterval);
    }, []);

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-[600px] md:min-h-[700px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden group bg-[#050505] selection:bg-[#f7a221] selection:text-black"
            style={{
                willChange: 'transform',
                transform: 'translateZ(0)'
            }}
        >
            {/* --- THEME MATCHED BACKGROUND --- */}
            <div className="absolute inset-0 overflow-hidden">
                <div 
                    style={{ 
                        background: gradients[gradientIndex],
                        transition: 'background 2s ease'
                    }}
                    className="absolute inset-0"
                />

                {/* Brand Orbs */}
                <div className="absolute -top-10 -left-10 w-[60%] h-[150%] bg-[#f7a221]/10 rounded-full blur-[100px] opacity-30" />
                <div className="absolute -bottom-10 -right-10 w-[70%] h-[150%] bg-white/5 rounded-full blur-[120px] opacity-20" />

                {/* Subtle Grid */}
                <div className="absolute inset-0 opacity-[0.03] bg-[size:60px_60px]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`
                    }}>
                </div>
            </div>

            <div className="relative z-10 grid md:grid-cols-[1.2fr_0.8fr] h-full min-h-[600px] md:min-h-[700px] items-center">
                
                {/* Content Side */}
                <div className="flex flex-col justify-center p-6 md:p-16 space-y-8">
                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-[#f7a221] text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.3em]">
                            <Zap size={12} fill="currentColor" /> Exclusive Drop
                        </div>

                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                            <div className="w-2 h-2 rounded-full bg-[#f7a221] animate-pulse"></div>
                            <span className="text-[9px] font-black text-white uppercase tracking-wider">Live Ecosystem</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter text-white uppercase">
                            SHOP SMART.<br />
                            <span className="text-transparent" style={{ WebkitTextStroke: '2px #f7a221' }}>
                                LIVE BIG.
                            </span>
                        </h1>
                        <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed font-semibold">
                            India's #1 destination for viral innovations. Premium quality tools and gadgets at 
                            <span className="text-white"> wholesale prices.</span>
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <button
                            className="bg-[#f7a221] hover:bg-white text-black font-black py-4 px-10 rounded-full text-sm transition-all duration-300 flex items-center gap-3 shadow-[0_10px_20px_-5px_rgba(247,162,33,0.3)] hover:shadow-white/10"
                        >
                            <ShoppingBag size={18} /> SHOP NOW
                        </button>
                        <button
                            className="bg-transparent border-2 border-white/10 text-white font-black px-8 py-4 rounded-full text-[10px] tracking-[0.2em] transition-all duration-300 flex items-center gap-2 hover:bg-white/5"
                        >
                            VIEW CATALOG <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Visual Side (KEPT: Parallax Logic) */}
                <div className="hidden md:flex items-center justify-end relative pr-12 h-full">
                    <div className="relative w-full max-w-[320px] h-full flex items-center justify-center">
                        
                        {/* Trending Card */}
                        <div
                            style={{ 
                                transform: `translate(${parallaxTransform.layer2X * 0.5}px, ${parallaxTransform.layer2Y * 0.5}px)`
                            }}
                            className="absolute top-10 right-0 bg-white/5 backdrop-blur-xl p-5 rounded-2xl z-30 border border-white/10 transition-transform duration-200"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-[#f7a221] p-3 rounded-xl shadow-lg shadow-[#f7a221]/20">
                                    <TrendingUp className="text-black" size={20} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Trending</p>
                                    <p className="text-xl font-black text-white">#1 STYLE</p>
                                </div>
                            </div>
                        </div>

                        {/* Flash Sale Card */}
                        <div
                            style={{ 
                                transform: `translate(${parallaxTransform.layer1X * 0.5}px, ${parallaxTransform.layer1Y * 0.5}px)`
                            }}
                            className="absolute bottom-10 left-0 bg-black/40 backdrop-blur-xl p-5 rounded-2xl z-20 border border-[#f7a221]/20 transition-transform duration-200"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-white p-3 rounded-xl">
                                    <Flame className="text-black" size={20} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-[#f7a221] uppercase tracking-wider">Flash Sale</p>
                                    <p className="text-xl font-black text-white">70% OFF</p>
                                </div>
                            </div>
                        </div>

                        {/* Rating Badge */}
                        <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex items-center gap-1 text-[#f7a221]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-5xl font-black text-white">4.9</p>
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Verified Trust</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;



// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { Sparkles, ArrowRight, Star, Zap, TrendingUp, Flame, ShoppingBag } from 'lucide-react';

// const HeroSection = () => {
//     // Use refs instead of state for performance-critical values
//     const mousePosRef = useRef({ x: 0, y: 0 });
//     const smoothPosRef = useRef({ x: 0, y: 0 });
//     const animationFrameRef = useRef(null);
//     const lastUpdateTimeRef = useRef(0);
    
//     // State for non-critical UI updates
//     const [gradientIndex, setGradientIndex] = useState(0);
//     const [parallaxTransform, setParallaxTransform] = useState({ x: 0, y: 0 });

//     // Throttled mouse movement handler (runs at 30fps max)
//     const handleMouseMove = useCallback((e) => {
//         const now = Date.now();
//         // Throttle to 30fps (33ms between updates)
//         if (now - lastUpdateTimeRef.current < 33) return;
        
//         lastUpdateTimeRef.current = now;
        
//         const { clientX, clientY } = e;
//         const { innerWidth, innerHeight } = window;
        
//         mousePosRef.current = {
//             x: (clientX / innerWidth) - 0.5,
//             y: (clientY / innerHeight) - 0.5
//         };
//     }, []);

//     // Single optimized animation loop
//     useEffect(() => {
//         const updateParallax = () => {
//             // Smooth interpolation with damping
//             smoothPosRef.current = {
//                 x: smoothPosRef.current.x + (mousePosRef.current.x - smoothPosRef.current.x) * 0.08,
//                 y: smoothPosRef.current.y + (mousePosRef.current.y - smoothPosRef.current.y) * 0.08
//             };

//             // Calculate transforms - reduced movement range for better performance
//             const layer1X = smoothPosRef.current.x * 40;  // Reduced from 120
//             const layer1Y = smoothPosRef.current.y * 40;  // Reduced from 120
//             const layer2X = smoothPosRef.current.x * -20; // Reduced from -60
//             const layer2Y = smoothPosRef.current.y * -20; // Reduced from -60

//             // Batch update with requestAnimationFrame
//             setParallaxTransform({
//                 layer1X, layer1Y, layer2X, layer2Y
//             });

//             animationFrameRef.current = requestAnimationFrame(updateParallax);
//         };

//         animationFrameRef.current = requestAnimationFrame(updateParallax);

//         return () => {
//             if (animationFrameRef.current) {
//                 cancelAnimationFrame(animationFrameRef.current);
//             }
//         };
//     }, []);

//     // Debounced gradient animation (every 5 seconds)
//     useEffect(() => {
//         const gradientInterval = setInterval(() => {
//             setGradientIndex(prev => (prev + 1) % 4);
//         }, 5000);

//         return () => clearInterval(gradientInterval);
//     }, []);

//     // Gradient configurations
//     const gradients = [
//         "radial-gradient(circle at 20% 50%, rgba(9,205,255,0.2) 0%, transparent 50%)",
//         "radial-gradient(circle at 80% 50%, rgba(227,30,36,0.15) 0%, transparent 50%)",
//         "radial-gradient(circle at 50% 80%, rgba(9,205,255,0.2) 0%, transparent 50%)",
//         "radial-gradient(circle at 20% 50%, rgba(9,205,255,0.2) 0%, transparent 50%)"
//     ];

//     return (
//         <section
//             onMouseMove={handleMouseMove}
//             className="relative min-h-[600px] md:min-h-[550px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden group bg-gradient-to-br from-primary via-[#1a2a4e] to-primary"
//             style={{
//                 willChange: 'transform', // Hint browser for optimization
//                 transform: 'translateZ(0)' // Force GPU acceleration
//             }}
//         >
//             {/* Static Background with reduced effects */}
//             <div className="absolute inset-0 overflow-hidden">
//                 {/* Simplified gradient - no transform */}
//                 <div 
//                     style={{ 
//                         background: gradients[gradientIndex],
//                         transition: 'background 1.5s ease'
//                     }}
//                     className="absolute inset-0"
//                 />

//                 {/* Static blurred orbs - no animation */}
//                 <div className="absolute -top-10 -left-10 w-[60%] h-[150%] bg-accent/20 rounded-full blur-[100px] opacity-30" />
//                 <div className="absolute -bottom-10 -right-10 w-[70%] h-[150%] bg-secondary/15 rounded-full blur-[120px] opacity-30" />

//                 {/* Very subtle grid pattern */}
//                 <div className="absolute inset-0 opacity-[0.02] bg-[size:80px_80px]"
//                     style={{
//                         backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
//                                         linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`
//                     }}>
//                 </div>
//             </div>

//             <div className="relative z-10 grid md:grid-cols-[1.2fr_0.8fr] h-full min-h-[600px] md:min-h-[550px] items-center">
//                 {/* Content Side */}
//                 <div className="flex flex-col justify-center p-6 md:p-12 md:pl-16 space-y-4 md:space-y-3">
//                     <div className="flex items-center gap-6 flex-wrap">
//                         <div className="flex items-center gap-2 bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-md border border-white/10 text-accent text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-[0.3em]">
//                             <Zap size={12} className="text-secondary" /> Viral Innovations
//                         </div>

//                         <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">
//                             <div className="w-2 h-2 rounded-full bg-red-500"></div>
//                             <span className="text-[9px] font-black text-white uppercase tracking-wider">2.4K Online</span>
//                         </div>
//                     </div>

//                     <div className="space-y-2">
//                         <h1 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-[-0.03em] text-white">
//                             SHOP SMART.{' '}
//                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-secondary">
//                                 LIVE BIG.
//                             </span>
//                         </h1>
//                         <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed font-semibold">
//                             India's #1 destination for viral gadgets & premium tools at wholesale prices.
//                         </p>
//                     </div>

//                     <div className="flex flex-wrap gap-3 pt-2">
//                         <button
//                             className="bg-secondary hover:bg-[#c2181d] text-white font-black py-3 px-8 rounded-full text-sm transition-colors duration-200 flex items-center gap-3"
//                         >
//                             <ShoppingBag size={18} /> SHOP NOW
//                         </button>
//                         <button
//                             className="bg-transparent border-2 border-white/10 text-white font-black px-6 py-3 rounded-full text-xs tracking-[0.15em] transition-colors duration-200 flex items-center gap-2 hover:bg-white/5"
//                         >
//                             VIEW CATALOG <ArrowRight size={14} />
//                         </button>
//                     </div>
//                 </div>

//                 {/* Visual Side - Optimized */}
//                 <div className="hidden md:flex items-center justify-end relative pr-12 h-full">
//                     <div className="relative w-full max-w-[300px] h-full flex items-center justify-center">
//                         {/* Static cards with minimal transforms */}
//                         <div
//                             style={{ 
//                                 transform: `translate(${parallaxTransform.layer2X * 0.5}px, ${parallaxTransform.layer2Y * 0.5}px)`
//                             }}
//                             className="absolute top-4 right-0 bg-white/10 backdrop-blur-sm p-4 rounded-2xl z-30 border border-white/20 cursor-pointer"
//                         >
//                             <div className="flex items-center gap-3">
//                                 <div className="bg-gradient-to-br from-accent to-blue-500 p-3 rounded-xl">
//                                     <TrendingUp className="text-white" size={20} />
//                                 </div>
//                                 <div>
//                                     <p className="text-[9px] font-black text-gray-300 uppercase tracking-wider">Trending</p>
//                                     <p className="text-xl font-black text-white">#1 Product</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div
//                             style={{ 
//                                 transform: `translate(${parallaxTransform.layer1X * 0.5}px, ${parallaxTransform.layer1Y * 0.5}px)`
//                             }}
//                             className="absolute bottom-4 left-0 bg-black/20 backdrop-blur-sm p-4 rounded-2xl z-20 border border-white/10 cursor-pointer"
//                         >
//                             <div className="flex items-center gap-3">
//                                 <div className="bg-gradient-to-br from-secondary to-red-600 p-3 rounded-xl">
//                                     <Flame className="text-white" size={20} />
//                                 </div>
//                                 <div>
//                                     <p className="text-[9px] font-black text-gray-300 uppercase tracking-wider">Flash Sale</p>
//                                     <p className="text-lg font-black text-white">70% OFF</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Center Rating Badge - Static */}
//                         <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20">
//                             <div className="flex flex-col items-center gap-2">
//                                 <div className="flex items-center gap-1 text-yellow-400">
//                                     {[...Array(5)].map((_, i) => (
//                                         <Star key={i} size={14} fill="currentColor" />
//                                     ))}
//                                 </div>
//                                 <p className="text-2xl font-black text-white">4.9</p>
//                                 <p className="text-[9px] font-black text-gray-300 uppercase tracking-wider">12.5K Reviews</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;

// import React from 'react';
// import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
// import { Sparkles, ArrowRight, Star, Zap, TrendingUp, Flame, ShoppingBag } from 'lucide-react';

// const HeroSection = () => {
//     // Mouse Parallax Logic
//     const mouseX = useMotionValue(0);
//     const mouseY = useMotionValue(0);

//     const handleMouseMove = (e) => {
//         const { clientX, clientY } = e;
//         const { innerWidth, innerHeight } = window;
//         mouseX.set((clientX / innerWidth) - 0.5);
//         mouseY.set((clientY / innerHeight) - 0.5);
//     };

//     const springConfig = { damping: 30, stiffness: 200 };
//     const smoothX = useSpring(mouseX, springConfig);
//     const smoothY = useSpring(mouseY, springConfig);

//     // Parallax Coefficients for different layers
//     const layer1X = useTransform(smoothX, [-0.5, 0.5], [-60, 60]);
//     const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-60, 60]);

//     const layer2X = useTransform(smoothX, [-0.5, 0.5], [30, -30]);
//     const layer2Y = useTransform(smoothY, [-0.5, 0.5], [30, -30]);

//     return (
//         <section
//             onMouseMove={handleMouseMove}
//             className="relative min-h-[600px] md:min-h-[550px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-gradient-to-br from-primary via-[#1a2a4e] to-primary"
//         >
//             {/* Animated Gradient Background */}
//             <div className="absolute inset-0 overflow-hidden">
//                 {/* Vibrant Animated Mesh Gradient */}
//                 <motion.div
//                     style={{ x: layer2X, y: layer2Y }}
//                     animate={{
//                         background: [
//                             "radial-gradient(circle at 20% 50%, rgba(9,205,255,0.3) 0%, transparent 50%)",
//                             "radial-gradient(circle at 80% 50%, rgba(227,30,36,0.25) 0%, transparent 50%)",
//                             "radial-gradient(circle at 50% 80%, rgba(9,205,255,0.3) 0%, transparent 50%)",
//                             "radial-gradient(circle at 20% 50%, rgba(9,205,255,0.3) 0%, transparent 50%)"
//                         ]
//                     }}
//                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0"
//                 />

//                 {/* Floating Orbs - More Visible */}
//                 <motion.div
//                     style={{ x: layer1X, y: layer1Y }}
//                     animate={{
//                         scale: [1, 1.3, 1],
//                         opacity: [0.3, 0.5, 0.3],
//                     }}
//                     transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//                     className="absolute -top-10 -left-10 w-[60%] h-[150%] bg-accent/30 rounded-full blur-[120px]"
//                 />
//                 <motion.div
//                     style={{ x: useTransform(smoothX, [-0.5, 0.5], [40, -40]), y: useTransform(smoothY, [-0.5, 0.5], [40, -40]) }}
//                     animate={{
//                         scale: [1, 1.2, 1],
//                         opacity: [0.2, 0.4, 0.2],
//                     }}
//                     transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//                     className="absolute -bottom-10 -right-10 w-[70%] h-[150%] bg-secondary/20 rounded-full blur-[140px]"
//                 />

//                 {/* Additional Accent Glow */}
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-r from-accent/10 via-transparent to-secondary/10 rounded-full blur-3xl"></div>

//                 {/* Grid Pattern Overlay */}
//                 <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
//             </div>

//             <div className="relative z-10 grid md:grid-cols-[1.2fr_0.8fr] h-full min-h-[600px] md:min-h-[550px] items-center">
//                 {/* Content Side - Compact & Punchy */}
//                 <div className="flex flex-col justify-center p-6 md:p-12 md:pl-16 space-y-4 md:space-y-3">
//                     <div className="flex items-center gap-6 flex-wrap">
//                         {/* Compact Badge */}
//                         <motion.div
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             className="flex items-center gap-2 bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-xl border border-white/10 text-accent text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-[0.3em] shadow-xl"
//                         >
//                             <Zap size={12} className="text-secondary animate-pulse" /> Viral Innovations
//                         </motion.div>

//                         {/* Live Stats Badge */}
//                         <motion.div
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: 0.2 }}
//                             className="flex items-center gap-2 glass-dark px-4 py-2 rounded-full"
//                         >
//                             <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
//                             <span className="text-[9px] font-black text-white uppercase tracking-wider">2.4K Online</span>
//                         </motion.div>
//                     </div>

//                     <div className="space-y-2">
//                         <motion.h1
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, ease: "circOut" }}
//                             className="text-4xl md:text-6xl font-black leading-[0.9] tracking-[-0.03em] text-white"
//                         >
//                             SHOP SMART.{' '}
//                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-secondary animate-mesh bg-[length:300%_auto] drop-shadow-[0_0_30px_rgba(9,205,255,0.3)]">
//                                 LIVE BIG.
//                             </span>
//                         </motion.h1>
//                         <motion.p
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.3, duration: 0.8 }}
//                             className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed font-semibold"
//                         >
//                             India's #1 destination for viral gadgets & premium tools at wholesale prices.
//                         </motion.p>
//                     </div>

//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.5 }}
//                         className="flex flex-wrap gap-3 pt-2"
//                     >
//                         <motion.button
//                             whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(227,30,36,0.5)" }}
//                             whileTap={{ scale: 0.95 }}
//                             className="btn-premium flex items-center gap-3 py-3 px-8 text-sm shadow-[0_15px_30px_-5px_rgba(227,30,36,0.4)]"
//                         >
//                             <ShoppingBag size={18} /> SHOP NOW
//                         </motion.button>
//                         <motion.button
//                             whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(9,205,255,0.5)" }}
//                             className="bg-transparent border-2 border-white/10 text-white font-black px-6 py-3 rounded-full text-xs tracking-[0.15em] transition-all flex items-center gap-2"
//                         >
//                             VIEW CATALOG <ArrowRight size={14} />
//                         </motion.button>
//                     </motion.div>
//                 </div>

//                 {/* Visual Side - Compact Interactive Elements */}
//                 <div className="hidden md:flex items-center justify-end relative pr-12 h-full">
//                     {/* Floating Interactive Cards */}
//                     <div className="relative w-full max-w-[300px] h-full flex items-center justify-center">
//                         {/* Card 1 - Trending */}
//                         <motion.div
//                             style={{ x: layer1X, y: layer1Y }}
//                             whileHover={{ scale: 1.05, rotate: 2 }}
//                             className="absolute top-4 right-0 glass-card p-4 rounded-2xl z-30 shadow-2xl border-white/20 cursor-pointer"
//                         >
//                             <div className="flex items-center gap-3">
//                                 <div className="bg-gradient-to-br from-accent to-blue-500 p-3 rounded-xl">
//                                     <TrendingUp className="text-white" size={20} />
//                                 </div>
//                                 <div>
//                                     <p className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Trending</p>
//                                     <p className="text-xl font-black text-white">#1 Product</p>
//                                 </div>
//                             </div>
//                         </motion.div>

//                         {/* Card 2 - Flash Sale */}
//                         <motion.div
//                             style={{ x: layer2X, y: layer2Y }}
//                             whileHover={{ scale: 1.05, rotate: -2 }}
//                             className="absolute bottom-4 left-0 glass-dark p-4 rounded-2xl z-20 shadow-2xl border-white/10 cursor-pointer"
//                         >
//                             <div className="flex items-center gap-3">
//                                 <div className="bg-gradient-to-br from-secondary to-red-600 p-3 rounded-xl">
//                                     <Flame className="text-white" size={20} />
//                                 </div>
//                                 <div>
//                                     <p className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Flash Sale</p>
//                                     <p className="text-lg font-black text-white">70% OFF</p>
//                                 </div>
//                             </div>
//                         </motion.div>

//                         {/* Center Rating Badge */}
//                         <motion.div
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
//                             className="glass-card p-5 rounded-2xl shadow-2xl border-white/20"
//                         >
//                             <div className="flex flex-col items-center gap-2">
//                                 <div className="flex items-center gap-1 text-yellow-400">
//                                     {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
//                                 </div>
//                                 <p className="text-2xl font-black text-white">4.9</p>
//                                 <p className="text-[9px] font-black text-gray-400 uppercase tracking-wider">12.5K Reviews</p>
//                             </div>
//                         </motion.div>

//                         {/* Floating Particles */}
//                         {[...Array(3)].map((_, i) => (
//                             <motion.div
//                                 key={i}
//                                 animate={{
//                                     y: [0, -20, 0],
//                                     opacity: [0.3, 0.6, 0.3],
//                                 }}
//                                 transition={{
//                                     duration: 3 + i,
//                                     repeat: Infinity,
//                                     delay: i * 0.5,
//                                 }}
//                                 className="absolute w-2 h-2 bg-accent/50 rounded-full blur-sm"
//                                 style={{
//                                     left: `${30 + i * 25}%`,
//                                     top: `${20 + i * 20}%`,
//                                 }}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;
