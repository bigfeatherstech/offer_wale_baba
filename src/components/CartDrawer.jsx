import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { Heart } from 'lucide-react';

const formatPrice = (amount) => {
  if (amount == null) return '-';
  const value = amount / 100;
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
};

const CartDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { items, remove, updateQty } = React.useContext(CartContext);

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

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAddress = () => {
    console.log('Address saved', address);
    alert('Address saved!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
      <div className="w-full max-w-md bg-white h-full shadow-xl overflow-auto">
        <div className="p-4 border-b flex items-center justify-between">
          <button onClick={() => { onClose(); navigate(-1); }} className="text-lg font-bold">
            ← Back
          </button>
          <span className="font-semibold">My Cart</span>
        </div>
        <div className="p-4">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              Your cart is empty
            </div>
          ) : (
            <>
              <button
                onClick={() => {
                  onClose();
                  navigate('/cart');
                }}
                className="w-full mb-4 bg-[#f7a221] text-white py-2 rounded-lg font-semibold text-sm hover:bg-[#e6941e] transition-all"
              >
                View Full Cart
              </button>
              <div className="space-y-4">
                {items.map((p) => (
                  <div key={p.slug} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 flex-shrink-0">
                      <img
                        src={p.images?.[0]?.url || p.images?.[0] || '/placeholder.png'}
                        alt={p.title || p.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm line-clamp-2">
                        {p.title || p.name}
                      </div>
                      <div className="text-sm text-gray-700 flex items-center gap-2">
                        <span>{formatPrice((p.price?.sale ?? p.price?.base) * (p.quantity || 1))}</span>
                        <span className="text-xs text-gray-500">({p.quantity || 1} × {formatPrice(p.price?.sale ?? p.price?.base)})</span>
                        <div className="flex items-center border border-gray-300 rounded overflow-hidden h-6">
                          <button
                            onClick={() => updateQty(p.slug, Math.max(1, (p.quantity||1) - 1))}
                            className="px-2 bg-gray-100 hover:bg-gray-200"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs">{p.quantity || 1}</span>
                          <button
                            onClick={() => updateQty(p.slug, (p.quantity||1) + 1)}
                            className="px-2 bg-gray-100 hover:bg-gray-200"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => remove(p.slug)}
                      className="text-red-500 hover:text-red-700"
                      title="Remove"
                    >
                      <Heart size={18} className="fill-red-500" />
                    </button>
                  </div>
                ))}
              </div>

              {/* address / checkout section */}
              <div className="mt-6 border-t pt-4">
                <h2 className="text-lg font-bold mb-3">Delivery address</h2>
                <div className="space-y-2 text-sm">
                  <input
                    name="name"
                    value={address.name}
                    onChange={handleAddressChange}
                    placeholder="Recipient name"
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
                    className="w-full mt-2 bg-[#f7a221] text-white py-2 rounded-lg font-semibold"
                  >
                    Save address and deliver here
                  </button>
                </div>
                <div className="flex justify-between font-bold mt-4">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    navigate('/checkout');
                  }}
                  className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg font-semibold text-sm hover:bg-green-700 transition-all"
                >
                  Pay Now
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
