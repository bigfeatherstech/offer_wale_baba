import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Zap, ShoppingCart } from 'lucide-react';
import { products } from '../../data';

const BestSellers = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
        >
            <div className="flex items-center justify-between">
                <h3 className="text-3xl md:text-4xl font-black flex items-center gap-4">
                    <span className="w-3 h-12 bg-secondary rounded-full shadow-[0_0_20px_rgba(227,30,36,0.2)]"></span>
                    Best Sellers
                </h3>
                <div className="bg-gray-100 p-1.5 rounded-[2rem] flex gap-1.5 shadow-inner">
                    <button className="bg-white text-gray-900 text-[10px] font-black px-8 py-3 rounded-full shadow-sm">KITCHEN</button>
                    <button className="text-gray-400 text-[10px] font-black px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all">HOME</button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                {products.map((product, idx) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="product-card group relative"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-xl z-20">
                                {product.discount}
                            </div>

                            {/* Action Buttons */}
                            <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                                <button className="p-3 bg-white/90 backdrop-blur-md hover:bg-secondary hover:text-white rounded-2xl text-gray-400 shadow-xl transition-all translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                                    <Heart size={20} />
                                </button>
                                <button className="p-3 bg-white/90 backdrop-blur-md hover:bg-accent hover:text-primary rounded-2xl text-gray-400 shadow-xl transition-all translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 delay-75">
                                    <Zap size={20} fill="currentColor" />
                                </button>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-primary via-primary/80 to-transparent">
                                <button className="w-full bg-accent text-primary font-black py-4 rounded-2xl flex items-center justify-center gap-3 text-[10px] shadow-2xl active:scale-95 transition-all uppercase tracking-widest">
                                    <ShoppingCart size={18} /> ADD TO CART
                                </button>
                            </div>
                        </div>
                        <div className="p-6 space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={12} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} />
                                    ))}
                                </div>
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{product.rating} Rating</span>
                            </div>
                            <h4 className="font-black text-gray-800 text-sm md:text-lg line-clamp-2 group-hover:text-secondary transition-colors leading-tight h-10 md:h-12">
                                {product.name}
                            </h4>
                            <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                                <span className="text-2xl font-black text-primary tracking-tighter">₹{product.price}</span>
                                <span className="text-xs text-gray-400 line-through font-bold">₹{product.originalPrice}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default BestSellers;
