// import React, { useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { CartContext } from '../contexts/CartContext';
// import { Heart } from 'lucide-react';

// const formatPrice = (amount) => {
//   if (amount == null) return '-';
//   const value = amount / 100;
//   return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
// };

// const CheckoutPage = () => {
//   const { slug } = useParams();
//   const { items, remove } = useContext(CartContext);
//   const navigate = useNavigate();

//   // determine checkout items: single product if slug provided, otherwise whole cart
//   let checkoutItems = items;
//   if (slug) {
//     const found = items.find((p) => p.slug === slug);
//     if (!found) {
//       return (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
//           <div className="text-center max-w-md">
//             <Heart size={64} className="text-gray-300 mb-6 mx-auto" />
//             <h2 className="text-3xl font-semiBold text-gray-900 mb-4">Item not found</h2>
//             <p className="text-gray-600 mb-8 text-lg leading-relaxed">
//               The product you were trying to checkout is not in your cart anymore.
//             </p>
//             <button
//               onClick={() => navigate('/cart')}
//               className="inline-block bg-[#f7a221] text-white px-8 py-3 rounded-full font-bold hover:bg-[#e6941e] transition-all duration-300 hover:shadow-lg"
//             >
//               Go to cart
//             </button>
//           </div>
//         </div>
//       );
//     }
//     checkoutItems = [found];
//   }

//   // subtotal calculation
//   const subtotal = checkoutItems.reduce((sum, i) => {
//     const price = i.price?.sale ?? i.price?.base;
//     const qty = i.quantity || 1;
//     return sum + price * qty;
//   }, 0);

//   const [address, setAddress] = React.useState({
//     name: '',
//     pincode: '',
//     house: '',
//     state: '',
//     city: '',
//     landmark: '',
//     email: '',
//     mobile: '',
//   });

//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePlaceOrder = () => {
//     console.log('Order placed', { items: checkoutItems, address, total: subtotal });
//     alert('Order placed! (frontend only)');
//     // in future, call backend payment API
//     // clear cart or navigate away as needed
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4">

//  <button
//         onClick={() => navigate(-1)}

//         className="absolute top-6 left-75 flex items-center gap-2 bg-white border-2 border-[#f7a221] text-[#f7a221] font-bold px-4 py-2 rounded-lg hover:bg-[#f7a221] hover:text-white transition-all duration-300 shadow-md z-10"
//       >
//         <span>←</span> Go back
//       </button>



//       <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="flex flex-col lg:flex-row">
//           {/* left side: summary of items */}
//           <div className="w-full lg:w-2/3 p-6">
//             <h1 className="text-2xl font-bold mb-4">Checkout</h1>
//             {checkoutItems.map((product) => {
//               const price = product.price?.sale ?? product.price?.base;
//               const imgUrl =
//                 product.images && product.images.length > 0
//                   ? product.images[0].url || product.images[0]
//                   : null;
//               return (
//                 <div key={product.slug} className="flex items-center mb-4">
//                   <div className="w-20 h-20 bg-gray-100 flex-shrink-0 mr-4">
//                     {imgUrl ? (
//                       <img
//                         src={imgUrl}
//                         alt={product.title || product.name}
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                         <span className="text-gray-400 text-xs">No image</span>
//                       </div>
//                     )}
//                   </div>
//                   <div className="flex-1">
//                     <div className="font-semibold text-gray-800">
//                       {product.title || product.name}
//                     </div>
//                     <div className="text-sm text-gray-600">
//                       {product.quantity || 1} × {formatPrice(price)}
//                     </div>
//                   </div>
//                   <div className="font-bold">{formatPrice(price * (product.quantity || 1))}</div>
//                 </div>
//               );
//             })}
//             <div className="border-t pt-4 mt-4 flex justify-between font-bold text-lg">
//               <span>Total</span>
//               <span>{formatPrice(subtotal)}</span>
//             </div>
//           </div>

//           {/* right side: address/payment form */}
//           <div className="w-full lg:w-1/3 bg-gray-50 p-6">
//             <h2 className="text-xl font-semibold mb-3">Delivery details</h2>
//             <div className="space-y-3 text-sm">
//               <input
//                 name="name"
//                 value={address.name}
//                 onChange={handleAddressChange}
//                 placeholder="Recipient name"
//                 className="w-full border px-3 py-2 rounded"
//               />
//               <input
//                 name="pincode"
//                 value={address.pincode}
//                 onChange={handleAddressChange}
//                 placeholder="Pincode"
//                 className="w-full border px-3 py-2 rounded"
//               />
//               <input
//                 name="house"
//                 value={address.house}
//                 onChange={handleAddressChange}
//                 placeholder="House / flat no"
//                 className="w-full border px-3 py-2 rounded"
//               />
//               <input
//                 name="state"
//                 value={address.state}
//                 onChange={handleAddressChange}
//                 placeholder="State"
//                 className="w-full border px-3 py-2 rounded"
//               />
//               <input
//                 name="city"
//                 value={address.city}
//                 onChange={handleAddressChange}
//                 placeholder="City"
//                 className="w-full border px-3 py-2 rounded"
//               />
//               <input
//                 name="landmark"
//                 value={address.landmark}
//                 onChange={handleAddressChange}
//                 placeholder="Landmark"
//                 className="w-full border px-3 py-2 rounded"
//               />
//               <input
//                 name="email"
//                 value={address.email}
//                 onChange={handleAddressChange}
//                 placeholder="Email"
//                 className="w-full border px-3 py-2 rounded"
//               />
//               <input
//                 name="mobile"
//                 value={address.mobile}
//                 onChange={handleAddressChange}
//                 placeholder="Mobile number"
//                 className="w-full border px-3 py-2 rounded"
//               />
//             </div>

//             <h2 className="text-xl font-semibold mt-6 mb-3">Payment info</h2>
//             <div className="space-y-3 text-sm">
//               <input
//                 name="cardNumber"
//                 placeholder="Card number"
//                 className="w-full border px-3 py-2 rounded"
//               />
//               <div className="flex gap-2">
//                 <input
//                   name="expiry"
//                   placeholder="MM/YY"
//                   className="w-1/2 border px-3 py-2 rounded"
//                 />
//                 <input
//                   name="cvc"
//                   placeholder="CVC"
//                   className="w-1/2 border px-3 py-2 rounded"
//                 />
//               </div>
//             </div>

//             <button
//               onClick={handlePlaceOrder}
//               className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
//             >
//               Place order
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;








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

  // determine checkout items: single product if slug provided, otherwise whole cart
  let checkoutItems = items;
  if (slug) {
    const found = items.find((p) => p.slug === slug);
    if (!found) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8 relative">
          {/* Back button for item not found view */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-15 left-10 flex items-center gap-2 bg-white border-2 border-[#f7a221] text-[#f7a221] font-bold px-4 py-2 rounded-lg hover:bg-[#f7a221] hover:text-white transition-all duration-300 shadow-md z-10"
          >
            <span>←</span> Go back
          </button>
          
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
    checkoutItems = [found];
  }

  // subtotal calculation
  const subtotal = checkoutItems.reduce((sum, i) => {
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
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    console.log('Order placed', { items: checkoutItems, address, total: subtotal });
    alert('Order placed! (frontend only)');
    // in future, call backend payment API
    // clear cart or navigate away as needed
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 relative ">
      {/* Back button - FIXED: Added proper positioning */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-110 flex items-center gap-2 bg-white border-2 border-[#f7a221] text-[#f7a221] font-bold px-4 py-2 rounded-lg hover:bg-[#f7a221] hover:text-white transition-all duration-300 shadow-md z-20"
         
      >
        <span>←</span> Go back
      </button>

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border mt-20">
        <div className="flex flex-col lg:flex-row">
          {/* left side: summary of items */}
          <div className="w-full lg:w-2/3 p-6">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            {checkoutItems.map((product) => {
              const price = product.price?.sale ?? product.price?.base;
              const imgUrl =
                product.images && product.images.length > 0
                  ? product.images[0].url || product.images[0]
                  : null;
              return (
                <div key={product.slug} className="flex items-center mb-4 border-b pb-4">
                  <div className="w-20 h-20 bg-gray-100 flex-shrink-0 mr-4">
                    
                    {imgUrl ? (
                      <img
                        src={imgUrl}
                        alt={product.title || product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 text-xs">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">
                      {product.title || product.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {product.quantity || 1} × {formatPrice(price)}
                    </div>
                  </div>
                  <div className="font-bold">{formatPrice(price * (product.quantity || 1))}</div>
                </div>
              );
            })}
            <div className="border-t pt-4 mt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
          </div>

          {/* right side: address/payment form */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-6">
            <h2 className="text-xl font-semibold mb-3">Delivery details</h2>
            <div className="space-y-3 text-sm">
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
                placeholder="House / flat no"
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
                placeholder="Email"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                name="mobile"
                value={address.mobile}
                onChange={handleAddressChange}
                placeholder="Mobile number"
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <h2 className="text-xl font-semibold mt-6 mb-3">Payment info</h2>
            <div className="space-y-3 text-sm">
              <input
                name="cardNumber"
                placeholder="Card number"
                className="w-full border px-3 py-2 rounded"
              />
              <div className="flex gap-2">
                <input
                  name="expiry"
                  placeholder="MM/YY"
                  className="w-1/2 border px-3 py-2 rounded"
                />
                <input
                  name="cvc"
                  placeholder="CVC"
                  className="w-1/2 border px-3 py-2 rounded"
                />
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;