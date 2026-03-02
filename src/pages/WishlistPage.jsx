import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { WishlistContext } from '../contexts/WishlistContext';
import { CartContext } from '../contexts/CartContext';
import { NotificationContext } from '../contexts/NotificationContext';
import { Heart } from 'lucide-react';

const formatPrice = (amount) => {
  if (amount == null) return '-';
  const value = amount / 100;
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
};

const WishlistPage = () => {
  const { items, remove } = useContext(WishlistContext);
  const { add: addToCart } = useContext(CartContext);
  const { notify } = useContext(NotificationContext);
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
        <div className="text-center max-w-md">
          <Heart size={64} className="text-gray-300 mb-6 mx-auto" />
          <h2 className="text-3xl font-semiBold text-gray-900 mb-4">Wishlist is empty</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Start adding your favourite items to keep track of what you love and get back to them anytime.
          </p>
          <Link
            to="/products"
            className="inline-block bg-[#f7a221] text-white px-8 py-3 rounded-full font-bold hover:bg-[#e6941e] transition-all duration-300 hover:shadow-lg"
          >
            Shop now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-main text-gray-900 mb-2 text-center">Your Wishlist</h1>
        <p className="text-center text-gray-600 mb-8">
          You have <span className="font-bold text-[#f7a221]">{items.length}</span> item{items.length !== 1 ? 's' : ''} saved
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p) => {
            const title = p.title || p.name || 'Untitled product';
            const price = p.price?.sale ?? p.price?.base;
            const oldPrice = p.price?.base;
            const imgUrl =
              p.images && p.images.length > 0 ? (p.images[0].url || p.images[0]) : null;

            return (
              <div
                key={p.slug}
                className="product-card group bg-white rounded-xl shadow-md transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col transform hover:shadow-2xl hover:scale-105 hover:-translate-y-1 relative"
              >
                {/* Remove from wishlist button */}
                <div
                  className="absolute top-3 right-3 z-10 bg-black text-white px-3 py-1.5 rounded-full text-xs font-bold hover:bg-red-600 shadow-lg cursor-pointer transition-all duration-300 flex items-center gap-1"
                  onClick={() => remove(p.slug)}
                  title="Remove from wishlist"
                >
                  <Heart size={14} className="fill-red-500 text-red-500" />
                  <span className="hidden sm:inline">Remove</span>
                </div>

                {/* Product Image */}
                <Link
                  to={`/products/${p.slug}`}
                  className="product-link relative block overflow-hidden bg-gray-50 h-56"
                >
                  {imgUrl ? (
                    <img
                      src={imgUrl}
                      alt={title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">No image</span>
                    </div>
                  )}
                </Link>

                {/* Product Details */}
                <div className="product-body p-4 flex flex-col flex-grow">
                  <Link to={`/products/${p.slug}`} className="hover:underline">
                    <h3 className="product-title text-sm font-semibold text-gray-800 mb-2 line-clamp-2 h-10 transition-colors duration-300 group-hover:text-[#f7a221]">
                      {title}
                    </h3>
                  </Link>

                  {/* Price Section */}
                  <div className="mt-auto flex flex-col">
                    <div className="flex items-baseline gap-2 mb-3">
                      <div className="product-price text-xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300 origin-left">
                        {formatPrice(price)}
                      </div>
                      {oldPrice && oldPrice > price && (
                        <span className="text-xs text-gray-500 line-through">
                          {formatPrice(oldPrice)}
                        </span>
                      )}
                    </div>

                    {/* Discount Badge */}
                    {oldPrice && oldPrice > price && (
                      <div className="mb-2">
                        <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          {Math.round(((oldPrice - price) / oldPrice) * 100)}% OFF
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Move to cart button */}
                  <button
                    onClick={() => {
                      addToCart(p);
                      notify('1 item added to your cart');
                      remove(p.slug);
                    }}
                    className="w-full mt-3 bg-[#f7a221] text-white py-2 rounded-lg font-semibold text-sm hover:bg-[#e6941e] transition-all duration-300 text-center"
                  >
                    Move to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
