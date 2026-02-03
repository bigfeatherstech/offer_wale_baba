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

