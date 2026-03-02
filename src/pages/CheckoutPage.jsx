import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { Heart } from 'lucide-react';

const formatPrice = (amount) => {
  if (amount == null) return '-';
  const value = amount / 100;
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
};

const CheckoutPage = () => {
  const { slug } = useParams();
  const { items, remove } = useContext(CartContext);
  const navigate = useNavigate();

  const product = items.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
        <div className="text-center max-w-md">
          <Heart size={64} className="text-gray-300 mb-6 mx-auto" />
          <h2 className="text-3xl font-semiBold text-gray-900 mb-4">Item not found</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            The product you were trying to checkout is not in your cart anymore.
          </p>
          <button
            onClick={() => navigate('/cart')}
            className="inline-block bg-[#f7a221] text-white px-8 py-3 rounded-full font-bold hover:bg-[#e6941e] transition-all duration-300 hover:shadow-lg"
          >
            Go to cart
          </button>
        </div>
      </div>
    );
  }

  const price = product.price?.sale ?? product.price?.base;
  const oldPrice = product.price?.base;
  const imgUrl =
    product.images && product.images.length > 0 ? (product.images[0].url || product.images[0]) : null;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-gray-100 p-6 flex items-center justify-center">
            {imgUrl ? (
              <img
                src={imgUrl}
                alt={product.title || product.name}
                className="w-full h-auto object-contain"
              />
            ) : (
              <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">No image</span>
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2 p-6 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {product.title || product.name || 'Untitled product'}
            </h2>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-xl font-bold text-gray-900">
                {formatPrice(price)}
              </span>
              {oldPrice && oldPrice > price && (
                <span className="text-xs text-gray-500 line-through">
                  {formatPrice(oldPrice)}
                </span>
              )}
            </div>

            <button
              className="w-full mt-auto bg-[#f7a221] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#e6941e] transition-all duration-300"
              onClick={() => alert('Proceeding to payment (not implemented)')}
            >
              Proceed to Pay
            </button>

            <button
              className="w-full mt-2 text-center text-red-600 underline"
              onClick={() => {
                remove(product.slug);
                navigate('/cart');
              }}
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;