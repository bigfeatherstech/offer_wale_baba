import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, Eye, Star } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Helpers (Logic preserved)
// ─────────────────────────────────────────────────────────────────────────────
const formatPrice = (amount) => {
  if (amount == null) return "—";
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0
  }).format(amount);
};

const logError = (context, error, info = {}) => {
  console.group(`🔴 [ProductCard] ERROR in ${context}`);
  console.error("Error:", error);
  console.log("Info:", info);
  console.groupEnd();
};

// ─────────────────────────────────────────────────────────────────────────────
// Product Card Component
// ─────────────────────────────────────────────────────────────────────────────
const ProductCard = ({ product, index }) => {
  const navigate = useNavigate();

  // Functional Logic preserved
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const variant     = product.variants?.[0] ?? {};
  const title       = product.title || product.name || "Untitled product";
  const salePrice   = variant.price?.sale ?? variant.price?.base ?? null;
  const basePrice   = variant.price?.base ?? null;
  const hasDiscount = basePrice != null && salePrice != null && basePrice > salePrice;
  const discountPct = variant.discountPercentage ?? (hasDiscount ? Math.round(((basePrice - salePrice) / basePrice) * 100) : null);
  const imgUrl      = variant.images?.[0]?.url || null;
  const inStock     = variant.inventory?.quantity > 0 ?? product.inStock ?? true;
  const rating      = product.rating?.value ?? 0;

  const handleCardClick = () => navigate(`/products/${product.slug}`);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    setWishlisted((prev) => !prev);
  };

  return (
    <div
      className="group flex flex-col cursor-pointer font-sans"
      style={{ animationDelay: `${index * 50}ms` }}
      onClick={handleCardClick}
    >
      {/* ── IMAGE AREA (UI from Image) ── */}
      <div className="relative aspect-[1/1] overflow-hidden bg-zinc-50 rounded-sm mb-4">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = "none";
              logError("img load", new Error("Image failed"), { slug: product.slug, url: imgUrl });
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-300 text-[10px] uppercase bg-zinc-100">
            No Image
          </div>
        )}

        {/* Wishlist & View Buttons (UI from Image) */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={handleWishlist}
            className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
              wishlisted ? "bg-red-500 border-red-500 text-white" : "bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            <Heart size={14} className={wishlisted ? "fill-current" : ""} />
          </button>
          <button className="w-8 h-8 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 hover:bg-zinc-900 hover:text-white transition-all">
            <Eye size={14} />
          </button>
        </div>
      </div>

      {/* ── TEXT INFO (UI from Image) ── */}
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold uppercase  text-zinc-400">
            {/* Fix: Accessing .name property to prevent Object error */}
            {typeof product.category === 'object' ? product.category?.name : (product.category || "Apparel")}
          </span>
          {discountPct && (
            <span className="text-[8px] font-bold text-yellow-600 uppercase"></span>
          )}
        </div>

        <h3 className="text-[11px] md:text-xs font-lato uppercase tracking-wider text-zinc-900 group-hover:text-yellow-600 transition-colors truncate">
          {title}
        </h3>

        <div className="flex items-center gap-2 pt-0.5 pb-2">
          <span className="text-sm md:text-base font-bold text-zinc-900">
            ₹{formatPrice(salePrice)}
          </span>
          {hasDiscount && (
            <span className="text-[10px] text-zinc-300 line-through font-bold">
              ₹{formatPrice(basePrice)}
            </span>
          )}
        </div>
      </div>

      {/* ── ADD TO BAG BUTTON (UI from Image) ── */}
      <div className="mt-auto">
        <button
          onClick={handleAddToCart}
          disabled={!inStock}
          className={`w-full py-3 text-[9px] font-black uppercase tracking-[0.2em] transition-all ${
            addedToCart 
              ? "bg-green-600 text-white" 
              : inStock 
                ? "bg-zinc-900 text-white hover:bg-yellow-600" 
                : "bg-zinc-200 text-zinc-400 cursor-not-allowed"
          }`}
        >
          {addedToCart ? "Added ✓" : inStock ? "Add To Bag" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ShoppingCart, Heart, Eye, Star } from "lucide-react";

// // ─────────────────────────────────────────────────────────────────────────────
// // Helpers (copied from original)
// // ─────────────────────────────────────────────────────────────────────────────
// const formatPrice = (amount) => {
//   if (amount == null) return "—";
//   return new Intl.NumberFormat("en-IN", {
//     maximumFractionDigits: 0
//   }).format(amount);
// };

// const logError = (context, error, info = {}) => {
//   console.group(`🔴 [ProductCard] ERROR in ${context}`);
//   console.error("Error:", error);
//   console.log("Info:", info);
//   console.groupEnd();
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // Product Card Component
// // ─────────────────────────────────────────────────────────────────────────────
// const ProductCard = ({ product, index }) => {
//   const navigate = useNavigate();

//   // Local UI state — replace with Redux cart/wishlist dispatch when ready
//   const [wishlisted, setWishlisted] = useState(false);
//   const [addedToCart, setAddedToCart] = useState(false);

//   // ── Data lives in variants[0] — this is the actual API shape ──────────────
//   const variant     = product.variants?.[0] ?? {};
//   const title       = product.title || product.name || "Untitled product";

//   // Price — from variant, backend already computes finalPrice
//   const salePrice   = variant.price?.sale ?? variant.price?.base ?? null;
//   const basePrice   = variant.price?.base ?? null;
//   const hasDiscount = basePrice != null && salePrice != null && basePrice > salePrice;
//   const discountPct = variant.discountPercentage    // backend sends this pre-computed
//     ?? (hasDiscount ? Math.round(((basePrice - salePrice) / basePrice) * 100) : null);

//   // Images — inside variant.images[]
//   const imgUrl = variant.images?.[0]?.url || null;

//   // Stock — inside variant.inventory
//   const inStock = variant.inventory?.quantity > 0 ?? product.inStock ?? true;

//   // Rating — top level (not in variants)
//   const rating      = product.rating?.value ?? 0;
//   const ratingCount = product.rating?.count ?? 0;

//   const handleCardClick = () => navigate(`/products/${product.slug}`);

//   const handleAddToCart = (e) => {
//     e.stopPropagation();
//     // 🔌 Replace with: dispatch(addItemToCart(product)) when cart Redux is ready
//     setAddedToCart(true);
//     setTimeout(() => setAddedToCart(false), 1500);
//   };

//   const handleWishlist = (e) => {
//     e.stopPropagation();
//     // 🔌 Replace with: dispatch(toggleWishlistItem(product)) when wishlist Redux is ready
//     setWishlisted((prev) => !prev);
//   };

//   return (
//     <div
//       className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer relative flex flex-col"
//       style={{ animationDelay: `${index * 50}ms` }}
//       onClick={handleCardClick}
//     >
//       {/* ── Wishlist button ── */}
//       <button
//         aria-label="Toggle wishlist"
//         onClick={handleWishlist}
//         className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
//       >
//         <Heart
//           size={16}
//           className={wishlisted ? "text-red-500 fill-red-500" : "text-gray-400"}
//         />
//       </button>

//       {/* ── Discount badge ── */}
//       {discountPct && (
//         <div className="absolute top-3 left-3 z-10 bg-[#f7a221] text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
//           {discountPct}%
//         </div>
//       )}

//       {/* ── Image ── */}
//       <div className="relative h-52 sm:h-56 bg-gray-50 overflow-hidden flex-shrink-0">
//         {imgUrl ? (
//           <img
//             src={imgUrl}
//             alt={title}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//             loading="lazy"
//             onError={(e) => {
//               e.target.style.display = "none";
//               logError("img load", new Error("Image failed"), {
//                 slug: product.slug,
//                 url: imgUrl,
//               });
//             }}
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm select-none bg-gray-100">
//             No Image
//           </div>
//         )}

//         {/* Hover overlay */}
//         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 pointer-events-none">
//           <span className="text-white text-xs font-semibold bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1.5">
//             <Eye size={12} /> View Details
//           </span>
//         </div>
//       </div>

//       {/* ── Body ── */}
//       <div className="p-4 flex flex-col flex-grow">
//         <h3 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2 mb-1 group-hover:text-[#f7a221] transition-colors duration-200 leading-snug min-h-[2.5rem]">
//           {title}
//         </h3>

//         {/* Rating */}
//         {rating > 0 && (
//           <div className="flex items-center gap-1 text-xs mb-2">
//             <Star size={11} className="fill-yellow-400 text-yellow-400" />
//             <span className="font-semibold text-gray-700">{rating}</span>
//             {ratingCount > 0 && (
//               <span className="text-gray-400">({ratingCount})</span>
//             )}
//           </div>
//         )}

//         {/* Price */}
//         <div className="mt-auto flex items-baseline gap-2 mb-3 flex-wrap">
//           <span className="text-base sm:text-lg font-bold text-gray-900">
//             {formatPrice(salePrice)}
//           </span>
//           {hasDiscount && (
//             <span className="text-xs text-gray-400 line-through">
//               {formatPrice(basePrice)}
//             </span>
//           )}
//         </div>

//         {/* Attributes */}
//         {product.attributes?.length > 0 && (
//           <div className="flex flex-wrap gap-1 mb-3">
//             {product.attributes.slice(0, 2).map((attr) => (
//               <span
//                 key={attr._id ?? attr.key}
//                 className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
//               >
//                 {attr.key}: {attr.value}
//               </span>
//             ))}
//             {product.attributes.length > 2 && (
//               <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
//                 +{product.attributes.length - 2}
//               </span>
//             )}
//           </div>
//         )}
//       </div>

//       {/* ── Add to Cart ── */}
//       <div className="px-4 pb-4">
//         <button
//           onClick={handleAddToCart}
//           disabled={!inStock}
//           className={`w-full text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 ${
//             addedToCart
//               ? "bg-green-500"
//               : inStock
//               ? "bg-black hover:bg-[#f7a221]"
//               : "bg-gray-300 cursor-not-allowed"
//           }`}
//         >
//           <ShoppingCart size={15} />
//           {addedToCart ? "Added ✓" : inStock ? "Add to Cart" : "Out of Stock"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;