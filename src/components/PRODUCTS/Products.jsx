import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Heart, ShoppingCart, Zap, Eye } from 'lucide-react'
import { 
  addToWishlist, 
  removeFromWishlist,
  selectWishlistItems,  // Add this selector
  selectWishlistLoading,
  showNotification,
  hideNotification 
} from '../../REDUX_SEGMENT/wishlistSlice'
import { addToCart } from '../../REDUX_SEGMENT/wishlistSlice'

// load static products data until backend is hooked
import productsData from '../../data/products.json'

const Products = () => {
    const [products, setProducts] = useState([])
    const [hoveredCard, setHoveredCard] = useState(null)
    const [imageIndices, setImageIndices] = useState({})
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    // Add this at the top of your component, after the useState hooks
useEffect(() => {
  // Check if token exists, if not, add the one from Postman
  const token = localStorage.getItem('accessToken');
  console.log('🔑 Current token:', token ? 'Present' : 'Not found');
  
  if (!token) {
    console.log('📝 Adding token from Postman to localStorage');
    localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YTY3NjBlZjg5Mzg2NWI5ZDA5NGMzNiIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NzI1MTg5ODYsImV4cCI6MTc3MjUxOTg4Nn0.NQ_5VvLzL9y3jAATkFhL_G_YJwMhL01-3WWl2YvjgM4');
    console.log('✅ Token added successfully');
  }
}, []);
    // Get wishlist items and loading state at top level
    const wishlistItems = useSelector(selectWishlistItems)
    const wishlistLoading = useSelector(selectWishlistLoading)

    console.log('🛍️ Products page rendered with wishlist items:', wishlistItems.length)

    useEffect(() => {
        console.log('📦 Products Page Mounted')
        console.log('📊 Initial products data:', productsData)
        setProducts(productsData);
        
        // initialize image indices for carousel
        const indices = {};
        productsData.forEach(p => {
            indices[p.slug] = 0;
        });
        setImageIndices(indices);
    }, [])
               
    // handle image carousel on hover
    useEffect(() => {
        if (!hoveredCard) return;
        
        console.log('🖼️ Hovering card:', hoveredCard)
        
        const interval = setInterval(() => {
            setImageIndices(prev => {
                const product = productsData.find(p => p.slug === hoveredCard);
                const totalImages = product?.images?.length || 1;
                const newIndex = (prev[hoveredCard] + 1) % totalImages
                console.log(`🔄 Changing image for ${hoveredCard}: ${newIndex}`)
                return {
                    ...prev,
                    [hoveredCard]: newIndex
                };
            });
        }, 1000); // change image every 1 second
        
        return () => clearInterval(interval);
    }, [hoveredCard])

    const formatPrice = (amount) => {
        if (amount == null) return '-';
        // data stored in paise
        const value = amount / 100;
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
    }

    const handleWishlistClick = async (product, e) => {
        e.stopPropagation(); // Prevent event bubbling
        e.preventDefault();
        
        console.log('❤️ Wishlist button clicked for product:', product.slug, product.title)
        console.log('📤 Dispatching addToWishlist with payload:', product)
        
        try {
            const resultAction = await dispatch(addToWishlist(product))
            
            if (addToWishlist.fulfilled.match(resultAction)) {
                console.log('✅ Wishlist API response:', resultAction.payload)
                
                dispatch(showNotification({ 
                    message: `${product.title} added to wishlist`, 
                    type: 'success' 
                }))
                
                // Auto hide after 3 seconds
                setTimeout(() => {
                    dispatch(hideNotification())
                }, 3000)
            } else if (addToWishlist.rejected.match(resultAction)) {
                console.error('❌ Wishlist API error:', resultAction.error)
                dispatch(showNotification({ 
                    message: resultAction.error?.message || 'Failed to add to wishlist', 
                    type: 'error' 
                }))
            }
        } catch (error) {
            console.error('❌ Unexpected error:', error)
            dispatch(showNotification({ 
                message: 'Failed to add to wishlist', 
                type: 'error' 
            }))
        }
    }

    const handleAddToCart = (product, e) => {
        e.stopPropagation();
        e.preventDefault();
        
        console.log('🛒 Add to cart clicked for product:', product.slug, product.title)
        console.log('📤 Dispatching addToCart with payload:', product)
        
        try {
            dispatch(addToCart(product))
            console.log('✅ Product added to cart successfully')
            
            dispatch(showNotification({ 
                message: '1 item added to your cart', 
                type: 'success' 
            }))
            
            setTimeout(() => {
                dispatch(hideNotification())
            }, 3000)
        } catch (error) {
            console.error('❌ Add to cart error:', error)
        }
    }

    // Helper function to check if product is in wishlist (now using the top-level wishlistItems)
    const isInWishlist = (slug) => {
        return wishlistItems.some(item => item.slug === slug)
    }

    // Fix the Navbar warning - remove any jsx attribute from style tag
    return (
        <div className="products-list min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Remove any jsx attribute from style tag */}
                <style>{`
                    @keyframes slideUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    @keyframes shimmer {
                        0% {
                            background-position: -1000px 0;
                        }
                        100% {
                            background-position: 1000px 0;
                        }
                    }
                `}</style>
                <h2 className="text-3xl text-gray-800 mb-8 text-center">All Products</h2>
                
                {Array.isArray(products) && products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((p) => {
                            const title = p.title || p.name || 'Untitled product';
                            const price = p.price?.sale ?? p.price?.base;
                            const oldPrice = p.price?.base;
                            const imgUrl = p.images && p.images.length > 0 ? (p.images[0].url || p.images[0]) : null;
                            
                            const ratingValue = p.rating?.value ?? 4.5;
                            const ratingCount = p.rating?.count ?? 2;

                            // Check if product is in wishlist
                            const inWishlist = isInWishlist(p.slug)

                            return (
                                <div 
                                    key={p.slug} 
                                    className="product-card group bg-white rounded-xl shadow-md transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col transform hover:shadow-2xl hover:scale-105 hover:-translate-y-1 relative"
                                    style={{
                                        animation: `slideUp 0.6s ease-out ${products.indexOf(p) * 0.1}s both`
                                    }}
                                    onMouseEnter={() => setHoveredCard(p.slug)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    {/* Wishlist Heart Button */}
                                    <div 
                                        className="absolute top-3 right-3 z-10 bg-black text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg cursor-pointer hover:bg-opacity-80 transition-all duration-300 flex items-center gap-1"
                                        onClick={(e) => handleWishlistClick(p, e)}
                                        title={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                                    >
                                        <Heart 
                                            size={14} 
                                            className={`transition-all duration-300 ${
                                                inWishlist ? 'text-red-500 fill-red-500' : 'text-white'
                                            }`} 
                                        />
                                        {wishlistLoading && (
                                            <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin ml-1"></span>
                                        )}
                                    </div>
                                    
                                    {/* Image Carousel Container */}
                                    <Link to={`/products/${p.slug}`} className="product-link relative block overflow-hidden bg-gray-50 h-64">
                                        <div className="product-image relative w-full h-full">
                                            {p.images && p.images.length > 0 ? (
                                                <>
                                                    <img 
                                                        src={p.images[imageIndices[p.slug] || 0]?.url || p.images[imageIndices[p.slug] || 0]} 
                                                        alt={title} 
                                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                                        onError={(e) => {
                                                            console.error(`❌ Image failed to load for ${title}:`, e)
                                                            e.target.src = 'https://via.placeholder.com/300x300?text=No+Image'
                                                        }}
                                                    />
                                                    {/* Image dots indicator */}
                                                    {p.images.length > 1 && (
                                                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                            {p.images.slice(0, 4).map((_, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                                        idx === (imageIndices[p.slug] || 0) ? 'bg-white w-6' : 'bg-white/50'
                                                                    }`}
                                                                />
                                                            ))}
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                                    <span className="text-gray-400 text-sm">No image</span>
                                                </div>
                                            )}
                                        </div>
                                        {/* Overlay with shine effect */}
                                        <div className="overlay absolute inset-0 bg-gradient-to-t from-black/40 to-transparent via-white/0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="backdrop-blur-sm bg-black/50 px-6 py-2 rounded-full">View Details</span>
                                        </div>
                                    </Link>
                                    
                                    <div className="product-body p-4 flex flex-col flex-grow">
                                        <Link to={`/products/${p.slug}`} className="hover:underline">
                                            <h3 className="product-title text-base font-semibold text-gray-800 mb-2 line-clamp-2 h-12 transition-colors duration-300 group-hover:text-[#f7a221]">
                                                {title}
                                            </h3>
                                        </Link>
                                        
                                        <div className="mt-auto flex flex-col">
                                            <div className="product-price text-lg font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300 origin-left">
                                                {formatPrice(price)}
                                                {oldPrice && oldPrice > price && (
                                                    <span className="ml-2 text-sm text-gray-500 line-through">
                                                        {formatPrice(oldPrice)}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="rating text-sm text-yellow-500 mb-2 flex items-center gap-1 group-hover:scale-110 transition-transform duration-300 origin-left">
                                                <span>★</span>
                                                <span>{ratingValue}</span>
                                                <span className="text-gray-500">({ratingCount})</span>
                                            </div>

                                            {p.attributes && p.attributes.length > 0 && (
                                                <div className="attributes flex flex-wrap gap-1 mb-3">
                                                    {p.attributes.slice(0, 2).map((attr, idx) => (
                                                        <span 
                                                            key={attr._id ?? attr.key}
                                                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full transition-all duration-300 hover:bg-[#f7a221] hover:text-white hover:scale-105"
                                                            style={{
                                                                animation: `fadeInUp 0.5s ease-out ${0.1 + idx * 0.1}s both`
                                                            }}
                                                        >
                                                            {attr.key}: {attr.value}
                                                        </span>
                                                    ))}
                                                    {p.attributes.length > 2 && (
                                                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full transition-all duration-300 hover:bg-[#f7a221] hover:text-white hover:scale-105">
                                                            +{p.attributes.length - 2}
                                                        </span>
                                                    )}
                                                </div>
                                            )}

                                            {/* FOMO Display */}
                                            <div className="rounded-md p-3 mb-4 flex items-start gap-3">
                                                <ShoppingCart size={18} className="text-[#f7a221] fill-[#f7a221] mt-0.5" />
                                                <div>
                                                    <p className="text-sm font-semibold text-orange-900">{p.fomo?.bought ?? 5} bought this recently</p>
                                                    <div className="flex items-center gap-1 mr-12">
                                                        <Eye size={18} className="text-orange-700 mt-0.5" /> 
                                                        <p className="text-xs text-orange-700">{p.fomo?.viewingPercent ?? 50} viewing this product</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                onClick={(e) => handleAddToCart(p, e)}
                                                className="add-cart w-full text-center bg-black hover:bg-[#e6941e] text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:shadow-lg hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group/btn"
                                            >
                                                <ShoppingCart size={16} className="group-hover/btn:animate-bounce" />
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-lg">No Products Found</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// import React, { useEffect, useState, useContext } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { Heart, ShoppingCart , Zap ,Eye } from 'lucide-react'
// import { WishlistContext } from '../../contexts/WishlistContext'
// import { CartContext } from '../../contexts/CartContext';
// import { NotificationContext } from '../../contexts/NotificationContext';

// // load static products data until backend is hooked
// import productsData from '../../data/products.json'

// const Products = () => {
//     const [products, setproducts] = useState([])
//     const [hoveredCard, setHoveredCard] = useState(null)
//     const [imageIndices, setImageIndices] = useState({})
    
//     const navigate = useNavigate()
//     const { toggle, contains } = useContext(WishlistContext)
//     const { add: addToCart } = useContext(CartContext);
//     const { notify } = useContext(NotificationContext);

//     useEffect(() => {
//         setproducts(productsData);
//         // initialize image indices for carousel
//         const indices = {};
//         productsData.forEach(p => {
//             indices[p.slug] = 0;
//         });
//         setImageIndices(indices);
//     }, [])
               
//     // handle image carousel on hover
//     useEffect(() => {
//         if (!hoveredCard) return;
        
//         const interval = setInterval(() => {
//             setImageIndices(prev => {
//                 const product = productsData.find(p => p.slug === hoveredCard);
//                 const totalImages = product?.images?.length || 1;
//                 return {
//                     ...prev,
//                     [hoveredCard]: (prev[hoveredCard] + 1) % totalImages
//                 };
//             });
//         }, 1000); // change image every 1 second
        
//         return () => clearInterval(interval);
//     }, [hoveredCard])

//     const formatPrice = (amount) => {
//         if (amount == null) return '-';
//         // data stored in paise
//         const value = amount / 100;
//         return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
//     }

//     return (
//         <div className="products-list min-h-screen bg-gray-50 py-8">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <style>{`
//                     @keyframes slideUp {
//                         from {
//                             opacity: 0;
//                             transform: translateY(30px);
//                         }
//                         to {
//                             opacity: 1;
//                             transform: translateY(0);
//                         }
//                     }
//                     @keyframes fadeInUp {
//                         from {
//                             opacity: 0;
//                             transform: translateY(10px);
//                         }
//                         to {
//                             opacity: 1;
//                             transform: translateY(0);
//                         }
//                     }
//                     @keyframes shimmer {
//                         0% {
//                             background-position: -1000px 0;
//                         }
//                         100% {
//                             background-position: 1000px 0;
//                         }
//                     }
//                 `}</style>
//                 <h2 className="text-3xl  text-gray-800 mb-8 text-center">All Products</h2>
                
//                 {Array.isArray(products) && products.length > 0 ? (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                         {products.map((p) => {
//                             const title = p.title || p.name || 'Untitled product';
//                             const price = p.price?.sale ?? p.price?.base;
//                             const oldPrice = p.price?.base;
//                             const imgUrl = p.images && p.images.length > 0 ? (p.images[0].url || p.images[0]) : null;
//                             const qty = p.inventory?.quantity ?? null;
                            
//                             const ratingValue = p.rating?.value ?? 4.5;
//                             const ratingCount = p.rating?.count ?? 2;

//                             return (
//                                 <div 
//                                     key={p.slug} 
//                         className="product-card group bg-white rounded-xl shadow-md transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col transform hover:shadow-2xl hover:scale-105 hover:-translate-y-1 relative"
//                         style={{
//                             animation: `slideUp 0.6s ease-out ${products.indexOf(p) * 0.1}s both`
//                         }}
//                         onMouseEnter={() => setHoveredCard(p.slug)}
//                         onMouseLeave={() => setHoveredCard(null)}

                        
//                     >
//                         {/* When user click on heart icon then the heaart color change  to red adn again click and white (toggle0) */}
//                         <div className="absolute top-3 right-3 z-10 bg-black text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg cursor-pointer"
//                             onClick={() => {
//                                 toggle(p);
//                                 // navigate('/wishlist');
//                             }}
//                         >
//                            <Heart size={14} className={`inline-block mr-1 ${contains(p.slug) ? 'text-red-500 fill-red-500' : 'text-white'}`} />
//                         </div>
                        
                            
                        
//                         {/* Image Carousel Container */}
//                         <Link to={`/products/${p.slug}`} className="product-link relative block overflow-hidden bg-gray-50 h-64">
//                             <div className="product-image relative w-full h-full">
//                                 {p.images && p.images.length > 0 ? (
//                                     <>
//                                         <img 
//                                             src={p.images[imageIndices[p.slug] || 0]?.url || p.images[imageIndices[p.slug] || 0]} 
//                                             alt={title} 
//                                             className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
//                                         />
//                                         {/* Image dots indicator */}
//                                         {p.images.length > 1 && (
//                                             <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                                 {p.images.slice(0, 4).map((_, idx) => (
//                                                     <div
//                                                         key={idx}
//                                                         className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                                                             idx === (imageIndices[p.slug] || 0) ? 'bg-white w-6' : 'bg-white/50'
//                                                         }`}
//                                                     />
//                                                 ))}

//                                             </div>
//                                         )}
//                                     </>
//                                 ) : (
//                                     <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
//                                         <span className="text-gray-400 text-sm">No image</span>
//                                     </div>
//                                 )}
//                             </div>
//                             {/* Overlay with shine effect */}
//                             <div className="overlay absolute inset-0 bg-gradient-to-t from-black/40 to-transparent via-white/0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                 <span className="backdrop-blur-sm bg-black/50 px-6 py-2 rounded-full">View Details</span>
//                             </div>
//                         </Link>
                        
//                         <div className="product-body p-4 flex flex-col flex-grow">
//                                         <Link to={`/products/${p.slug}`} className="hover:underline">
//                                             <h3 className="product-title text-base font-semibold text-gray-800 mb-2 line-clamp-2 h-12 transition-colors duration-300 group-hover:text-[#f7a221]">
//                                                 {title}
//                                             </h3>
//                                         </Link>
                                        
//                                         <div className="mt-auto flex flex-col">
//                                             <div className="product-price text-lg font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300 origin-left">
//                                                 {formatPrice(price)}
//                                                 {oldPrice && oldPrice > price && (
//                                                     <span className="ml-2 text-sm text-gray-500 line-through">
//                                                         {formatPrice(oldPrice)}
//                                                     </span>
//                                                 )}
//                                             </div>

//                                             <div className="rating text-sm text-yellow-500 mb-2 flex items-center gap-1 group-hover:scale-110 transition-transform duration-300 origin-left">
//                                                 <span>★</span>
//                                                 <span>{ratingValue}</span>
//                                                 <span className="text-gray-500">({ratingCount})</span>

                                                
//                                                   {/* FOMO Display */}
//                {/* <div className="bg-orange-50 rounded-md p-3 mb-4 flex items-start gap-3 border border-orange-100">
//                  <Zap size={18} className="text-[#f7a221] fill-[#f7a221] mt-0.5" />
//                  <div>
//                    <p className="text-sm font-semibold text-orange-900">{p.fomo?.bought ?? 5} people bought this recently</p>
//                    <p className="text-xs text-orange-700">{p.fomo?.viewingPercent ?? 50}% of customers are currently looking at this item.</p>
//                  </div>
//                </div> */}
//                                             </div>

//                                             {p.attributes && p.attributes.length > 0 && (
//                                                 <div className="attributes flex flex-wrap gap-1 mb-3">
//                                                     {p.attributes.slice(0, 2).map((attr, idx) => (
//                                                         <span 
//                                                             key={attr._id ?? attr.key}
//                                                             className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full transition-all duration-300 hover:bg-[#f7a221] hover:text-white hover:scale-105"
//                                                             style={{
//                                                                 animation: `fadeInUp 0.5s ease-out ${0.1 + idx * 0.1}s both`
//                                                             }}
//                                                         >
//                                                             {attr.key}: {attr.value}
//                                                         </span>
//                                                     ))}
//                                                     {p.attributes.length > 2 && (
//                                                         <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full transition-all duration-300 hover:bg-[#f7a221] hover:text-white hover:scale-105">
//                                                             +{p.attributes.length - 2}
//                                                         </span>
//                                                     )}
//                                                 </div>
//                                             )}



     
//                                                   {/* FOMO Display */}
//                {/* <div className="bg-orange-50 rounded-md p-3 mb-4 flex items-start gap-3 border border-orange-100"> */}
//                               <div className="rounded-md p-3 mb-4 flex items-start gap-3  ">

//                  <ShoppingCart size={18} className="text-[#f7a221] fill-[#f7a221] mt-0.5" />
//                  <div>
//                    <p className="text-sm font-semibold text-orange-900">{p.fomo?.bought ?? 5} bought this recently</p>
//                    <div className="flex items-center gap-1 mr-12">
//                   <Eye size={18} className="text-orange-700 mt-0.5" /> <p className="text-xs text-orange-700">{p.fomo?.viewingPercent ?? 50} viewing this product</p>
//                  </div></div>
//                </div>




//                                             <button
//                                                 onClick={() => {
//                                                     addToCart(p);
//                                                     notify('1 item added to your cart');
//                                                 }}
//                                                 className="add-cart w-full text-center bg-black hover:bg-[#e6941e] text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:shadow-lg hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group/btn"
//                                             >
//                                                 <ShoppingCart size={16} className="group-hover/btn:animate-bounce" />
//                                                 Add to Cart
//                                             </button>

//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 ) : (
//                     <div className="text-center py-12">
//                         <div className="text-gray-400 text-lg">No Products Found</div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Products
























// // attributes
// : 
// Array(1)
// 0
// : 
// {key: 'color', value: 'balck', _id: '699c2853786aaafe67602231'}
// length
// : 
// 1
// [[Prototype]]
// : 
// Array(0)
// brand
// : 
// "Generic"
// category
// : 
// {_id: '699c2853786aaafe6760222c', name: 'toys', slug: 'toys', description: '', image: {…}, …}
// createdAt
// : 
// "2026-02-23T10:13:39.250Z"
// description
// : 
// "dlfjk sdfbdf sdfjsdfsdfds f"
// fomo
// : 
// {enabled: true, type: 'viewing_now', viewingNow: 28, productLeft: 0, customMessage: ''}
// images
// : 
// []
// inventory
// : 
// {quantity: 0, lowStockThreshold: 5, trackInventory: true}
// isFeatured
// : 
// true
// name
// : 
// "snake and ladder"
// price
// : 
// {base: 90000, sale: 84500, saleStartDate: null, saleEndDate: null}
// shipping
// : 
// {weight: 20, dimensions: {…}}
// sku
// : 
// "SKU-XYAIMK0S9"
// slug
// : 
// "snake-and-ladder"
// soldInfo
// : 
// {enabled: true, count: 89}
// status
// : 
// "active"
// title
// : 
// "best 5g smart phone"
// updatedAt
// : 
// "2026-02-23T10:13:39.250Z"
// __v
// : 
// 0
// _id
// : 
// "699c2853786aaafe67602230"