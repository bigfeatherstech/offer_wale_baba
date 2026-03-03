import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { Heart, Minus, Plus } from 'lucide-react';

const formatPrice = (amount) => {
  if (amount == null) return '-';
  const value = amount / 100;
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
};

const CartPage = () => {
  const { items, remove, updateQty } = useContext(CartContext);
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
        <div className="text-center max-w-md">
          <Heart size={64} className="text-gray-300 mb-6 mx-auto" />
          <h2 className="text-3xl font-semiBold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Add items to your cart and they'll appear here. When you're ready to buy, click on an item to checkout.
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

  // compute subtotal and manage address form
  const subtotal = items.reduce((sum, i) => {
    const price = i.price?.sale ?? i.price?.base;
    const qty = i.quantity || 1;
    return sum + price * qty;
  }, 0);

  const [address, setAddress] = React.useState({
    name: '',
    pincode: '',
    house: '',
    state: '',
    city: '',
    landmark: '',
    email: '',
    mobile: '',
    age: '',
    gender: '',
  });
  const [addressSaved, setAddressSaved] = React.useState(false);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAddress = () => {
    console.log('Address saved', address);
    alert('Address saved!');
    setAddressSaved(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 relative">

      <button
        onClick={() => navigate(-1)}

        className="absolute top-6 left-75 flex items-center gap-2 bg-white border-2 border-[#f7a221] text-[#f7a221] font-bold px-4 py-2 rounded-lg hover:bg-[#f7a221] hover:text-white transition-all duration-300 shadow-md z-10"
      >
        <span>←</span> Go back
      </button>


      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-main text-gray-900 mb-2 text-center">Your Cart</h1>
        <p className="text-center text-gray-600 mb-8">
          You have <span className="font-bold text-[#f7a221]">{items.length}</span> item{items.length !== 1 ? 's' : ''} in your cart
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* offers + address sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow" >
              <h2 className="text-xl font-semibold mb-4">Available offers</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span>150MHM Save ₹150</span>
                  <button className="text-blue-600 underline">Apply</button>
                </li>
                <li className="flex justify-between">
                  <span>100MHM Save ₹100</span>
                  <button className="text-blue-600 underline">Apply</button>
                </li>
                <li className="flex justify-between">
                  <span>50MHM Save ₹50</span>
                  <button className="text-blue-600 underline">Apply</button>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Delivery address</h2>
              <div className="space-y-3 text-sm">
                {!addressSaved ? (
                  <>
                    <input
                      name="name"
                      value={address.name}
                      placeholder="Recipient name"
                      onChange={handleAddressChange}
                      className="w-full border px-3 py-2 rounded"
                    />
                    <input
                      name="pincode"
                      value={address.pincode}
                      onChange={handleAddressChange}
                      placeholder="Pincode"
                      className="w-full border px-3 py-2 rounded"
                    />
                    <input
                      name="house"
                      value={address.house}
                      onChange={handleAddressChange}
                      placeholder="House / Flat no"
                      className="w-full border px-3 py-2 rounded"
                    />
                    <input
                      name="state"
                      value={address.state}
                      onChange={handleAddressChange}
                      placeholder="State"
                      className="w-full border px-3 py-2 rounded"
                    />
                    <input
                      name="city"
                      value={address.city}
                      onChange={handleAddressChange}
                      placeholder="City"
                      className="w-full border px-3 py-2 rounded"
                    />
                    <input
                      name="landmark"
                      value={address.landmark}
                      onChange={handleAddressChange}
                      placeholder="Landmark"
                      className="w-full border px-3 py-2 rounded"
                    />
                    <input
                      name="email"
                      value={address.email}
                      onChange={handleAddressChange}
                      placeholder="Email id"
                      className="w-full border px-3 py-2 rounded"
                    />
                    <input
                      name="mobile"
                      value={address.mobile}
                      onChange={handleAddressChange}
                      placeholder="Mobile number"
                      className="w-full border px-3 py-2 rounded"
                    />
                    <input
                      name="age"
                      value={address.age}
                      onChange={handleAddressChange}
                      placeholder="Age"
                      className="w-full border px-3 py-2 rounded"
                    />
                    <select
                      name="gender"
                      value={address.gender}
                      onChange={handleAddressChange}
                      className="w-full border px-3 py-2 rounded"
                    >
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <button
                      onClick={handleSaveAddress}
                      className="w-full mt-4 bg-[#f7a221] text-white py-2 rounded-lg font-semibold"
                    >
                      Save address and deliver here
                    </button>
                  </>
                ) : (
                  <div className="space-y-2">
                    <div>{address.name}, {address.house}, {address.city} ({address.pincode}), {address.state}</div>
                    <div>Landmark: {address.landmark}</div>
                    <div>Email: {address.email}, Mobile: {address.mobile}</div>
                    <button
                      onClick={() => setAddressSaved(false)}
                      className="mt-2 text-blue-600 underline"
                    >
                      Change address
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* products + summary */}
          <div className="lg:col-span-2">
            {/* product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  <div
                    className="absolute top-3 right-3 z-10 bg-black text-white px-3 py-1.5 rounded-full text-xs font-bold hover:bg-red-600 shadow-lg cursor-pointer transition-all duration-300 flex items-center gap-1"
                    onClick={() => remove(p.slug)}
                    title="Remove from cart"
                  >
                    <Heart size={14} className="fill-red-500 text-red-500" />
                    <span className="hidden sm:inline">Remove</span>
                  </div>

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

                  <div className="product-body p-4 flex flex-col flex-grow">
                    <Link to={`/products/${p.slug}`} className="hover:underline">
                      <h3 className="product-title text-sm font-semibold text-gray-800 mb-2 line-clamp-2 h-10 transition-colors duration-300 group-hover:text-[#f7a221]">
                        {title}
                      </h3>
                    </Link>

                    <div className="mt-auto flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="product-price text-xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300 origin-left">
                          {formatPrice(price * (p.quantity || 1))}
                        </div>
                        <span className="text-xs text-gray-600">({p.quantity || 1} × {formatPrice(price)})</span>
                        {oldPrice && oldPrice > price && (
                          <span className="text-xs text-gray-500 line-through ml-2">
                            {formatPrice(oldPrice)}
                          </span>
                        )}
                        <div className="flex items-center border border-gray-300 rounded overflow-hidden h-8 ml-auto">
                          <button onClick={() => updateQty(p.slug, Math.max(1, (p.quantity || 1) - 1))} className="px-3 bg-gray-100 hover:bg-gray-200 cursor-pointer border-r border-gray-300"><Minus size={14} /></button>
                          <span className="px-4 font-bold text-sm">{p.quantity || 1}</span>
                          <button onClick={() => updateQty(p.slug, (p.quantity || 1) + 1)} className="px-3 bg-gray-100 hover:bg-gray-200 cursor-pointer border-l border-gray-300"><Plus size={14} /></button>
                        </div>
                      </div>

                      {oldPrice && oldPrice > price && (
                        <div className="mb-2">
                          <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            {Math.round(((oldPrice - price) / oldPrice) * 100)}% OFF
                          </span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => navigate(`/checkout/${p.slug}`)}
                      className="w-full mt-3 bg-[#f7a221] text-white py-2 rounded-lg font-semibold text-sm hover:bg-[#e6941e] transition-all duration-300 text-center"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              );
            })}

            {/* summary section */}
            <div className="mt-8 bg-white p-8 rounded-xl shadow-xl border border-gray-200 space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Delivery fees</span>
                <span className="font-medium">Free</span>
                <span></span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Grand Total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <button className="w-full mt-2 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">
                Pay Now
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default CartPage;