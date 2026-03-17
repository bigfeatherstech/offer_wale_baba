import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowRight } from 'lucide-react';
import {
  fetchProductsByCategory,
  selectAllProducts,
  selectProductsLoading,
  selectProductsError,
  selectProductPagination,
} from "../REDUX_FEATURES/REDUX_SLICES/userProductsSlice";
import ProductCard from '../../pages/Product_segment/ProductCard'; // Import your ProductCard component

const HomeCategories = () => {
    const [isInView, setIsInView] = useState(true);
    const sectionRef = useRef(null);
    const [pathIndex, setPathIndex] = useState(0);

    const dispatch = useDispatch();
    
    // Get products from Redux state
    const products = useSelector(selectAllProducts);
    const loading = useSelector(selectProductsLoading);
    const error = useSelector(selectProductsError);
    const pagination = useSelector(selectProductPagination);

    // Fetch products from "home-and-kitchen" category
    useEffect(() => {
        console.log('Fetching home-and-kitchen products...');
        dispatch(fetchProductsByCategory({ 
            slug: 'home-and-kitchen', // Using the correct slug
            page: 1, 
            limit: 10 
        }))
        .unwrap()
        .then((result) => {
            console.log('Home products fetched:', result);
        })
        .catch((err) => {
            console.error('Error fetching home products:', err);
        });
    }, [dispatch]);

    const paths = [
        "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z",
        "M0,60 C400,0 800,120 1200,60 L1200,120 L0,120 Z",
        "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z"
    ];

    // Intersection Observer for fade-in animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // SVG path animation
    useEffect(() => {
        const interval = setInterval(() => {
            setPathIndex((prev) => (prev + 1) % paths.length);
        }, 3333); 

        return () => clearInterval(interval);
    }, [paths.length]);

    // Debug: Log products
    console.log('Home products in state:', products);

    // Loading state
    if (loading?.categoryProducts) {
        return (
            <div className="w-full bg-white py-8 md:py-16 text-center">
                <div className="flex justify-center items-center space-x-2">
                    <div className="w-4 h-4 bg-[#f7a221] rounded-full animate-bounce"></div>
                    <div className="w-4 h-4 bg-[#f7a221] rounded-full animate-bounce delay-100"></div>
                    <div className="w-4 h-4 bg-[#f7a221] rounded-full animate-bounce delay-200"></div>
                </div>
                <p className="mt-4 text-gray-600">Loading home & kitchen products...</p>
            </div>
        );
    }

    // Error state
    if (error?.categoryProducts) {
        return (
            <div className="w-full bg-white py-8 md:py-16 text-center">
                <p className="text-red-500 mb-4">Error loading products</p>
                <button 
                    onClick={() => dispatch(fetchProductsByCategory({ slug: 'home-and-kitchen', page: 1, limit: 10 }))}
                    className="px-6 py-2 bg-[#f7a221] text-white rounded-lg hover:bg-[#e09110] transition-colors"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="w-full bg-white py-8 md:py-16 overflow-hidden">
            <section
                ref={sectionRef}
                className={`container mx-auto px-4 transition-all duration-700 ease-out ${
                    isInView 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                }`}
            >
                {/* Header Section */}
                <div className="flex flex-row items-center justify-between mb-8 md:mb-12">
                    <h3 className="text-xl sm:text-2xl md:text-4xl font-lato flex items-center gap-2 md:gap-4 text-gray-900">
                        <span className="w-2 h-8 md:w-3 md:h-12 bg-[#f7a221] rounded-full shadow-[0_0_15px_rgba(247,162,33,0.3)]"></span>
                        Home & Kitchen Essentials
                    </h3>
                    <button className="text-[#f7a221] font-black flex items-center gap-1 md:gap-2 group text-[10px] md:text-sm uppercase tracking-wider transition-all whitespace-nowrap">
                        Explore All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Products Grid - Using ProductCard component */}
                {products && products.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
                        {products.map((product, index) => (
                            <ProductCard 
                                key={product._id} 
                                product={product} 
                                index={index}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-gray-50 rounded-2xl">
                        <p className="text-gray-500">No products found in this category</p>
                    </div>
                )}

                {/* Pagination (if needed) */}
                {pagination?.totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-4 mt-10">
                        <button
                            onClick={() => dispatch(fetchProductsByCategory({ 
                                slug: 'home-and-kitchen', 
                                page: pagination.page - 1, 
                                limit: 10 
                            }))}
                            disabled={!pagination.hasPrevPage}
                            className={`px-4 py-2 rounded-lg ${
                                pagination.hasPrevPage 
                                    ? 'bg-[#f7a221] text-white hover:bg-[#e09110]' 
                                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            Previous
                        </button>
                        <span className="text-gray-600">
                            Page {pagination.page} of {pagination.totalPages}
                        </span>
                        <button
                            onClick={() => dispatch(fetchProductsByCategory({ 
                                slug: 'home-and-kitchen', 
                                page: pagination.page + 1, 
                                limit: 10 
                            }))}
                            disabled={!pagination.hasNextPage}
                            className={`px-4 py-2 rounded-lg ${
                                pagination.hasNextPage 
                                    ? 'bg-[#f7a221] text-white hover:bg-[#e09110]' 
                                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            Next
                        </button>
                    </div>
                )}
            </section>

            {/* Visual Divider */}
            <div className="relative h-12 md:h-20 overflow-hidden mt-10">
                <svg 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none" 
                    className="absolute bottom-0 w-full h-full text-gray-50"
                >
                    <path
                        d={paths[pathIndex]}
                        fill="currentColor"
                        style={{ transition: 'd 3333ms ease-in-out' }}
                    />
                </svg>
            </div>
        </div>
    );
};

export default HomeCategories;

// import React, { useState, useEffect, useRef } from 'react';
// import { ArrowRight } from 'lucide-react';
// import { categories } from '../../data';
// import { Homecategories } from '../../data';

// const HomeCategories = () => {
//     const [isInView, setIsInView] = useState(false);
//     const sectionRef = useRef(null);
//     const [pathIndex, setPathIndex] = useState(0);

//     const paths = [
//         "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z",
//         "M0,60 C400,0 800,120 1200,60 L1200,120 L0,120 Z",
//         "M0,60 C300,120 600,0 900,60 L1200,60 L1200,120 L0,120 Z"
//     ];

//     // Intersection Observer for fade-in animation
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsInView(true);
//                     observer.disconnect();
//                 }
//             },
//             { threshold: 0.1 }
//         );

//         if (sectionRef.current) {
//             observer.observe(sectionRef.current);
//         }

//         return () => observer.disconnect();
//     }, []);

//     // SVG path animation
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setPathIndex((prev) => (prev + 1) % paths.length);
//         }, 3333); 

//         return () => clearInterval(interval);
//     }, [paths.length]);

//     return (
//         <div className="w-full bg-white py-8 md:py-16 overflow-hidden">
//             <section
//                 ref={sectionRef}
//                 className={`container mx-auto px-4 transition-all duration-700 ease-out ${
//                     isInView 
//                         ? 'opacity-100 translate-y-0' 
//                         : 'opacity-0 translate-y-10'
//                 }`}
//             >
//                 {/* Header Section - Responsive Flex */}
//                 <div className="flex flex-row items-center justify-center mb-8 md:mb-12 gap-2">
//                     <h3 className="text-xl sm:text-2xl md:text-4xl font-lato flex items-center gap-2 md:gap-4 text-gray-900">
//                         <span className="w-2 h-8 md:w-3 md:h-12 bg-[#f7a221] rounded-full shadow-[0_0_15px_rgba(247,162,33,0.3)]"></span>
//                         Home & Kitchen Essentials
//                     </h3>
//                     {/* <button className="text-[#f7a221] font-black flex items-center gap-1 md:gap-2 group text-[10px] md:text-sm uppercase tracking-wider transition-all whitespace-nowrap">
//                         Explore All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//                     </button> */}
//                 </div>

//                 {/* Categories Grid - Responsive with consistent item sizes */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
//                     {Homecategories.map((cat, idx) => (
//                         <div
//                             key={idx}
//                             className="flex flex-col items-center group cursor-pointer transition-all duration-300 w-full max-w-[180px] mx-auto"
//                         >
//                             <div className={`w-full aspect-square ${cat.color} rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] flex items-center justify-center transition-all shadow-sm group-hover:shadow-md group-hover:-translate-y-1 overflow-hidden relative border border-gray-100`}>
//                                 <img 
//                                     src={cat.img} 
//                                     alt={cat.name} 
//                                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//                                 />
//                                 <div className="absolute inset-0 bg-[#f7a221]/0 group-hover:bg-[#f7a221]/5 transition-colors duration-300"></div>
//                             </div>
                            
//                             <span className="text-[9px] md:text-[11px] font-bold mt-3 group-hover:text-[#f7a221] text-gray-600 text-center uppercase tracking-tight md:tracking-wider transition-colors duration-300 leading-tight line-clamp-2 px-1">
//                                 {cat.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Visual Divider */}
//             <div className="relative h-12 md:h-20 overflow-hidden mt-10">
//                 <svg 
//                     viewBox="0 0 1200 120" 
//                     preserveAspectRatio="none" 
//                     className="absolute bottom-0 w-full h-full text-gray-50"
//                 >
//                     <path
//                         d={paths[pathIndex]}
//                         fill="currentColor"
//                         style={{ transition: 'd 3333ms ease-in-out' }}
//                     />
//                 </svg>
//             </div>
//         </div>
//     );
// };

// export default HomeCategories;