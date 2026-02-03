import React, { useState, useEffect } from 'react';

const BestSellers = () => {
  const products = [
    { 
      category: "Apparel", 
      name: "Classic Linen Shirt", 
      price: 2499, 
      img1: "https://images.pexels.com/photos/17791448/pexels-photo-17791448.jpeg?q=80&w=800"
    },
    { 
      category: "Home", 
      name: "Iconic Studio Lamp", 
      price: 4200, 
      img1: "https://images.pexels.com/photos/17791449/pexels-photo-17791449.jpeg?q=80&w=800"
    },
    { 
      category: "Fashion", 
      name: "Essential Silk Dress", 
      price: 6500, 
      img1: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=800"
    },
    { 
      category: "Lifestyle", 
      name: "Artisan Ceramic Set", 
      price: 1850, 
      img1: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800"
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState(Array(products.length).fill(false));

  useEffect(() => {
    // Trigger main section animation
    const timer = setTimeout(() => setIsVisible(true), 100);

    // Stagger card animations
    const cardTimers = products.map((_, index) => 
      setTimeout(() => {
        setCardVisibility(prev => {
          const newVis = [...prev];
          newVis[index] = true;
          return newVis;
        });
      }, 300 + (index * 200)) // Each card appears 200ms after the previous one
    );

    return () => {
      clearTimeout(timer);
      cardTimers.forEach(t => clearTimeout(t));
    };
  }, [products.length]);

  return (
    <section className="max-w-[1500px] mx-auto px-4 md:px-12 lg:px-20 py-12 md:py-20 font-sans">
      
      {/* HEADER SECTION */}
      <div className={`flex items-end justify-between mb-10 border-b border-zinc-100 pb-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="space-y-1">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
            Just <span className="text-yellow-600">Arrived</span>
          </h2>
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1px] bg-yellow-600"></span>
            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-yellow-600 underline underline-offset-4">Community Favorites</p>
          </div>
        </div>
        <button className="hidden sm:block text-[9px] font-black uppercase tracking-widest bg-zinc-900 text-white px-6 py-3 hover:bg-yellow-600 transition-all">
          Explore All
        </button>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8">
        {products.map((product, index) => (
          <div 
            key={index} 
            className={`group flex flex-col cursor-pointer transition-all duration-1000 ease-out ${cardVisibility[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            
            {/* IMAGE AREA - SIMPLE SINGLE IMAGE */}
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-50 rounded-sm mb-4">
              
              {/* Single Static Image */}
              <img 
                src={product.img1} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* INTERACTIVE FLOATING BUTTONS */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <button className="w-9 h-9 bg-white/90 backdrop-blur-sm shadow-sm rounded-full flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="w-9 h-9 bg-white/90 backdrop-blur-sm shadow-sm rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>

              {/* QUICK ADD ACTION */}
              <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
                 <button className="w-full py-3 bg-zinc-900 text-white text-[9px] font-black uppercase tracking-[0.2em] hover:bg-yellow-600 transition-colors shadow-2xl">
                    Add To Bag
                 </button>
              </div>
            </div>

            {/* TEXT INFO: COMPACT & CLEAN */}
            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  {product.category}
                </span>
                <span className="text-[8px] font-bold text-yellow-600 uppercase">New Arrival</span>
              </div>
              <h3 className="text-[11px] md:text-xs font-black uppercase tracking-wider text-zinc-900 group-hover:text-yellow-600 transition-colors truncate">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 pt-0.5">
                <span className="text-sm md:text-base font-bold text-zinc-900">₹{product.price}</span>
                <span className="text-[8px] text-zinc-300 line-through font-bold">₹{product.price * 2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE ONLY VIEW ALL */}
      <div className={`mt-10 sm:hidden transition-all duration-1000 ease-out delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <button className="w-full py-4 border-2 border-zinc-900 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all">
          View All Best Sellers
        </button>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slideUpFade 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default BestSellers;

// import React, { useState } from 'react';

// const BestSellers = () => {
//   const products = [
//     { 
//       category: "Apparel", 
//       name: "Classic Linen Shirt", 
//       price: 2499, 
//       img1: "https://images.pexels.com/photos/17791448/pexels-photo-17791448.jpeg?q=80&w=800"
//     },
//     { 
//       category: "Home", 
//       name: "Iconic Studio Lamp", 
//       price: 4200, 
//       img1: "https://images.pexels.com/photos/17791449/pexels-photo-17791449.jpeg?q=80&w=800"
//     },
//     { 
//       category: "Fashion", 
//       name: "Essential Silk Dress", 
//       price: 6500, 
//       img1: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=800"
//     },
//     { 
//       category: "Lifestyle", 
//       name: "Artisan Ceramic Set", 
//       price: 1850, 
//       img1: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800"
//     }
//   ];

//   return (
//     <section className="max-w-[1500px] mx-auto px-4 md:px-12 lg:px-20 py-12 md:py-20 font-sans">
      
//       {/* HEADER SECTION */}
//       <div className="flex items-end justify-between mb-10 border-b border-zinc-100 pb-6">
//         <div className="space-y-1">
//           <h2 className="text-3xl md:text-5xl font- tracking-tighter uppercase">
//             Just  <span className="text ">Arrived</span>
//           </h2>
//           <div className="flex items-center gap-2">
//             <span className="w-4 h-[1px] bg-yellow-600"></span>
//             <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-yellow-600 underline underline-offset-4">Community Favorites</p>
//           </div>
//         </div>
//         <button className="hidden sm:block text-[9px] font-black uppercase tracking-widest bg-zinc-900 text-white px-6 py-3 hover:bg-yellow-600 transition-all">
//           Explore All
//         </button>
//       </div>

//       {/* PRODUCT GRID */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8">
//         {products.map((product, index) => (
//           <div key={index} className="group flex flex-col cursor-pointer">
            
//             {/* IMAGE AREA - SIMPLE SINGLE IMAGE */}
//             <div className="relative aspect-[3/4] overflow-hidden bg-zinc-50 rounded-sm mb-4">
              
//               {/* Single Static Image */}
//               <img 
//                 src={product.img1} 
//                 alt={product.name}
//                 className="w-full h-full object-cover"
//               />
              
//               {/* INTERACTIVE FLOATING BUTTONS */}
//               <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
//                 <button className="w-9 h-9 bg-white/90 backdrop-blur-sm shadow-sm rounded-full flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                   </svg>
//                 </button>
//                 <button className="w-9 h-9 bg-white/90 backdrop-blur-sm shadow-sm rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                   </svg>
//                 </button>
//               </div>

//               {/* QUICK ADD ACTION */}
//               <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
//                  <button className="w-full py-3 bg-zinc-900 text-white text-[9px] font-black uppercase tracking-[0.2em] hover:bg-yellow-600 transition-colors shadow-2xl">
//                     Add To Bag
//                  </button>
//               </div>
//             </div>

//             {/* TEXT INFO: COMPACT & CLEAN */}
//             <div className="space-y-1">
//               <div className="flex justify-between items-start">
//                 <span className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-400">
//                   {product.category}
//                 </span>
//                 <span className="text-[8px] font-bold text-yellow-600 uppercase italic">New Arrival</span>
//               </div>
//               <h3 className="text-[11px] md:text-xs font-black uppercase tracking-wider text-zinc-900 group-hover:text-yellow-600 transition-colors truncate">
//                 {product.name}
//               </h3>
//               <div className="flex items-center gap-2 pt-0.5">
//                 <span className="text-sm md:text-base font-bold text-zinc-900 italic">₹{product.price}</span>
//                 <span className="text-[8px] text-zinc-300 line-through font-bold">₹{product.price * 2}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* MOBILE ONLY VIEW ALL */}
//       <div className="mt-10 sm:hidden">
//         <button className="w-full py-4 border-2 border-zinc-900 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all">
//           View All Best Sellers
//         </button>
//       </div>
//     </section>
//   );
// };

// export default BestSellers;

// import React, { useState, useEffect, useRef } from 'react';
// import { Star, Heart, Zap, ShoppingCart } from 'lucide-react';
// import { products } from '../../data';

// const BestSellers = () => {
//     const [isInView, setIsInView] = useState(false);
//     const sectionRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsInView(true);
//                 }
//             },
//             { threshold: 0.1 }
//         );

//         if (sectionRef.current) {
//             observer.observe(sectionRef.current);
//         }

//         return () => observer.disconnect();
//     }, []);

//     return (
//         <section
//             ref={sectionRef}
//             className={`space-y-8 transition-all duration-500 ${
//                 isInView 
//                     ? 'opacity-100' 
//                     : 'opacity-0'
//             }`}
//         >
//             <div className="flex items-center justify-between">
//                 <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
//                     <span className="w-2 h-8 bg-secondary"></span>
//                     Best Sellers
//                 </h3>
//                 <div className="bg-gray-100 p-1 rounded-xl flex gap-1">
//                     <button className="bg-white text-gray-900 text-xs font-bold px-4 py-2 rounded-lg">KITCHEN</button>
//                     <button className="text-gray-400 text-xs font-bold px-4 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">HOME</button>
//                 </div>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//                 {products.map((product, idx) => (
//                     <div
//                         key={product.id}
//                         className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
//                             isInView 
//                                 ? 'opacity-100 translate-y-0' 
//                                 : 'opacity-0 translate-y-4'
//                         }`}
//                         style={{ transitionDelay: `${idx * 50}ms` }}
//                     >
//                         <div className="relative aspect-square overflow-hidden bg-gray-50">
//                             <img
//                                 src={product.image}
//                                 alt={product.name}
//                                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                                 loading="lazy"
//                             />
//                             <div className="absolute top-2 left-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
//                                 {product.discount}
//                             </div>

//                             {/* Action Buttons - Visible on hover */}
//                             <div className="absolute top-2 right-2 flex flex-col gap-1">
//                                 <button className="p-2 bg-white/90 hover:bg-secondary hover:text-white rounded-lg text-gray-400 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
//                                     <Heart size={16} />
//                                 </button>
//                                 <button className="p-2 bg-white/90 hover:bg-accent hover:text-primary rounded-lg text-gray-400 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
//                                     <Zap size={16} />
//                                 </button>
//                             </div>
//                         </div>
                        
//                         <div className="p-4 space-y-2">
//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center gap-0.5">
//                                     {[...Array(5)].map((_, i) => (
//                                         <Star key={i} size={12} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} />
//                                     ))}
//                                 </div>
//                                 <span className="text-xs text-gray-500 font-medium">{product.rating} Rating</span>
//                             </div>
                            
//                             <h4 className="font-bold text-gray-800 text-sm line-clamp-2 min-h-[40px]">
//                                 {product.name}
//                             </h4>
                            
//                             <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
//                                 <span className="text-xl font-bold text-primary">₹{product.price}</span>
//                                 <span className="text-sm text-gray-400 line-through font-medium">₹{product.originalPrice}</span>
//                             </div>
                            
//                             <button className="w-full bg-accent text-primary font-bold py-2 rounded-lg flex items-center justify-center gap-2 text-xs hover:bg-accent/90 transition-colors">
//                                 <ShoppingCart size={16} /> ADD TO CART
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default BestSellers;