
import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { NotificationContext } from '../../contexts/NotificationContext';
import { 
  Star, 
  Share2, 
  Heart, 
  Minus, 
  Plus, 
  ShoppingCart, 
  Zap, 
  ChevronRight, 
  Info,
  CheckCircle2,
  Truck
} from 'lucide-react'
import { WishlistContext } from '../../contexts/WishlistContext'
import { CartContext } from '../../contexts/CartContext';

// static product data fallback
import productsData from '../../data/products.json'

const FIELD_OPTIONS = ['-', '0.1', '0.5', '1', '5', '10', '50', '100'];
const COUNTRY_OPTIONS = ['-', 'India', 'China', 'USA', 'Germany'];
const GST_OPTIONS = ['0', '5', '12', '18', '28'];

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const [showDesc, setShowDesc] = useState(false); // toggle for description dropdown
  const [thumbs, setThumbs] = useState([]); // pick four images for left column
  const [dimensions, setDimensions] = useState({
    volWeight: '-', productWeight: '-', shipWeight: '-', length: '-', breadth: '-', height: '-', country: '-', gst: ''
  });
  
  const { toggle, contains } = useContext(WishlistContext);
  const { add: addToCart } = useContext(CartContext);
  const { notify } = useContext(NotificationContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (slug) {
      const p = productsData.find(item => item.slug === slug);
      if (p) {
        setProduct(p);
        const rand = arr => arr[Math.floor(Math.random() * arr.length)];
        setDimensions({
          volWeight: rand(FIELD_OPTIONS),
          productWeight: rand(FIELD_OPTIONS),
          shipWeight: rand(FIELD_OPTIONS),
          length: rand(FIELD_OPTIONS),
          breadth: rand(FIELD_OPTIONS),
          height: rand(FIELD_OPTIONS),
          country: rand(COUNTRY_OPTIONS),
          gst: rand(GST_OPTIONS),
        });

        // choose four images for the thumbnail column: always keep first image then three others
        const imgs = p.images || [];
        if (imgs.length <= 4) {
          setThumbs(imgs);
        } else {
          // guarantee first image present and pick three more random distinct
          const rest = imgs.slice(1);
          const shuffled = [...rest].sort(() => 0.5 - Math.random());
          setThumbs([imgs[0], ...shuffled.slice(0, 3)]);
        }
        setActiveImage(0);
      } else {
        setError('Product not found');
      }
    }
    setLoading(false);
  }, [slug])

  const formatPrice = (amount) => {
    if (amount == null) return '-';
    const value = amount / 100;
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
  }

  const share = (type) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (type === 'whatsapp') window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, '_blank');
    if (type === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    if (type === 'telegram') window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}`, '_blank');
    if (type === 'instagram') {
      // copy link to clipboard – Instagram does not support direct url sharing
      if (navigator && navigator.clipboard) {
        navigator.clipboard.writeText(url);
        alert('Product URL copied to clipboard. Paste it in Instagram to share.');
      } else {
        prompt('Copy this URL to share on Instagram', url);
      }
    }
    setShareMenuOpen(false);
  }

  if (loading) return <div className="flex items-center justify-center h-screen uppercase tracking-widest text-gray-400">Loading Detail...</div>
  if (error) return <div className="p-10 text-center text-red-500 font-bold">{error}</div>
  if (!product) return <div className="p-10 text-center">Product not found</div>

  const title = product.title || product.name || 'Untitled product';
  const price = product.price?.sale ?? product.price?.base;
  const oldPrice = product.price?.base;
  const discount = oldPrice > price ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;
  
  const ratingValue = product.rating?.value ?? 4.5;
  const ratingCount = product.rating?.count ?? 2;

  const offers = product.offers && product.offers.length > 0 ? product.offers.slice(0, 6) : [
    '10% off on orders above ₹500',
    'Buy 2 get 5% off',
    'Free shipping for orders above ₹799',
    'Bank offer: 5% cashback',
    'Free shipping for orders above ₹799',
    'Free shipping for orders above ₹799',
  ];

  return (
    <div className="bg-white font-sans antialiased text-[#0F1111] cursor-default mt-10">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-3">
        <nav className="text-xs flex items-center gap-1 text-gray-600">
          <Link to="/" className="hover:text-[#f7a221] hover:underline cursor-pointer">Home</Link>
          <ChevronRight size={12} />
          <Link to="/products" className="hover:text-[#f7a221] hover:underline cursor-pointer">Products</Link>
          <ChevronRight size={12} />
          <span className="text-gray-500 truncate max-w-[150px] md:max-w-none">{title}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* 1. IMAGE GALLERY SECTION */}
          <div className="lg:col-span-5">
            <div className="flex flex-col-reverse md:flex-row gap-4 lg:sticky lg:top-6">
              {/* Sidebar Thumbnails */}
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2">
                {thumbs.map((im, i) => (
                  <div 
                    key={i} 
                    onMouseEnter={() => setActiveImage(i)}
                    className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 border rounded cursor-pointer transition-all p-1 bg-white ${activeImage === i ? 'border-[#f7a221] ring-1 ring-[#f7a221]' : 'border-gray-300 hover:border-[#f7a221]'}`}
                  >
                    <img src={im.url || im} alt="" className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
              {/* Main Display Image */}
              <div className="flex-1 bg-white border border-gray-100 rounded flex items-center justify-center p-4 min-h-[350px] md:min-h-[450px]">
                <img 
                  src={
                    thumbs[activeImage]?.url ||
                    thumbs[activeImage] ||
                    product.images?.[activeImage]?.url ||
                    product.images?.[activeImage] ||
                    '/placeholder.png'
                  } 
                  alt={title} 
                  className="max-w-full max-h-[450px] object-contain" 
                />
              </div>
            </div>
          </div>

          {/* 2. PRODUCT INFO SECTION */}
          <div className="lg:col-span-4">
            <div className="mb-2">
              <h1 className="text-xl md:text-2xl font-medium leading-tight tracking-tight mb-1">{title}</h1>
              <Link to="#" className="text-[#007185] text-sm hover:text-[#C7511F] hover:underline cursor-pointer">Visit the Store</Link>
            </div>

            {/* Rating Row */}
            <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-3">
              <div className="flex items-center text-[#f7a221]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i + 0.5 <= ratingValue ? "#f7a221" : "none"} className={i + 0.5 > ratingValue ? "text-gray-300" : ""} />
                ))}
              </div>
              <span className="text-[#007185] text-sm hover:text-[#C7511F] cursor-pointer">{ratingCount} ratings</span>
            </div>

            {/* FOMO Display */}
            {/* <div className="bg-orange-50 rounded-md p-3 mb-4 flex items-start gap-3 border border-orange-100">
              <Zap size={18} className="text-[#f7a221] fill-[#f7a221] mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-orange-900">{product.fomo?.bought ?? 5} people bought this recently</p>
                <p className="text-xs text-orange-700">{product.fomo?.viewingPercent ?? 50} looking at this .</p>
              </div>
            </div> */}

             <div className="md p-3 mb-4 flex items-start gap-3 ">
              <Zap size={18} className="text-[#f7a221] fill-[#f7a221] mt-0.5" />
              <div>
              
                <p className="text-sm font-semibold text-orange-900">{product.fomo?.bought ?? 5} people bought this recently</p>
                <p className="text-xs text-orange-700">{product.fomo?.viewingPercent ?? 50} % of customers are currently looking at this item..</p>
              </div>
            </div>

            {/* Price Area */}
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="text-red-600 text-2xl font-light">-{discount}%</span>
                <div className="flex items-start">
                  <span className="text-sm mt-1">₹</span>
                  <span className="text-3xl font-medium">{(price/100).toLocaleString('en-IN')}</span>
                </div>
              </div>
              <div className="text-gray-500 text-sm">M.R.P.: <span className="line-through">{formatPrice(oldPrice)}</span></div>
              <div className="mt-2 flex items-center gap-2 text-sm">
                <CheckCircle2 size={16} className="text-green-700" />
                <span>Inclusive of all taxes</span>
              </div>
            </div>

            <hr className="mb-6" />

            {/* DESCRIPTION DROPDOWN */}
            <div className="mb-8">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setShowDesc(o => !o)}
              >
                <h3 className="font-bold text-base mb-2">Description</h3>
                {showDesc ? <Minus size={24} /> : <Plus size={24} />}
              </div>
              {showDesc && (
                <div className="text-sm space-y-3 leading-relaxed text-gray-800">
                  {product.description}
                </div>
              )}
            </div>

            {/* Technical Specs Table with individual rows */}
            <div className="mb-8 border rounded-lg overflow-hidden border-gray-200">
              <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 font-bold text-sm">Technical Details</div>
              <table className="w-full text-sm text-left">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-2 bg-gray-50 font-semibold">Volu. Weight (Gm)</td>
                    <td className="px-4 py-2">{dimensions.volWeight}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-2 bg-gray-50 font-semibold">Product Weight (Gm)</td>
                    <td className="px-4 py-2">{dimensions.productWeight}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-2 bg-gray-50 font-semibold">Ship Weight (Gm)</td>
                    <td className="px-4 py-2">{dimensions.shipWeight}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-2 bg-gray-50 font-semibold">Length (Cm)</td>
                    <td className="px-4 py-2">{dimensions.length}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-2 bg-gray-50 font-semibold">Breadth (Cm)</td>
                    <td className="px-4 py-2">{dimensions.breadth}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-2 bg-gray-50 font-semibold">Height (Cm)</td>
                    <td className="px-4 py-2">{dimensions.height}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 bg-gray-50 font-semibold">GST</td>
                    <td className="px-4 py-2">{dimensions.gst}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. BUY BOX SECTION (Sticky) */}
          <div className="lg:col-span-3">
            <div className="border border-gray-300 rounded-lg p-5 lg:sticky lg:top-6 bg-white shadow-sm">
              <div className="text-2xl font-medium mb-1">{formatPrice(price * qty)}</div>
              <div className="text-[#007600] text-sm font-medium mb-4">In stock</div>

              {/* Qty Selector */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-bold">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md shadow-sm overflow-hidden h-8">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-3 bg-gray-100 hover:bg-gray-200 cursor-pointer border-r border-gray-300"><Minus size={14}/></button>
                  <span className="px-4 font-bold text-sm">{qty}</span>
                  <button onClick={() => setQty(q => q + 1)} className="px-3 bg-gray-100 hover:bg-gray-200 cursor-pointer border-l border-gray-300"><Plus size={14}/></button>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-3 mb-6">
                <button 
                  onClick={() => {
                    addToCart(product);
                    notify('1 item added to your cart');
                  }}
                  className="w-full py-2 rounded-full flex items-center justify-center gap-2 font-medium transition-all shadow-sm active:scale-95 cursor-pointer" 
                  style={{ backgroundColor: 'hsla(192, 37%, 62%, 0.57)', border: '' }}
                >
                  <ShoppingCart size={18} /> Add to Cart
                </button>
                <button 
                  className="w-full py-2 rounded-full flex items-center justify-center gap-2 font-medium transition-all shadow-sm text-black active:scale-95 cursor-pointer" 
                  style={{ backgroundColor: '#FFA41C', border: '' }}
                >
                  <Zap size={18} /> Buy Now
                </button>
              </div>

              {/* Delivery Info */}
              <div className="text-xs text-gray-600 space-y-2 mb-6">
                <div className="flex items-center gap-2"><Truck size={14} /> FREE delivery for orders above ₹799</div>
                <div className="flex items-center gap-2"><Info size={14} /> Secure transaction</div>
              </div>

              {/* Wishlist & Share */}
              <div className="pt-4 border-t flex items-center gap-4 justify-center">
                <button 
                  onClick={() => toggle(product)} 
                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-red-500 cursor-pointer group"
                >
                  <Heart size={18} className={contains(product?.slug) ? "fill-red-500 text-red-500" : "group-hover:scale-110 transition-transform"} />
                  {contains(product?.slug) ? 'Saved' : 'Add to Wish List'}
                </button>
                
                <div className="relative">
                  <button 
                    onClick={() => setShareMenuOpen(!shareMenuOpen)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#007185] cursor-pointer"
                  >
                    <Share2 size={18} /> Share
                  </button>
                  {shareMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-gray-200 shadow-xl rounded-lg py-2 z-50">
                      <button
                        onClick={() => share('whatsapp')}
                        className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                      >
                        <i className="fa-brands fa-whatsapp text-green-600 transition-transform duration-150 hover:scale-110" />
                        WhatsApp
                      </button>
                      <button
                        onClick={() => share('facebook')}
                        className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                      >
                        <i className="fa-brands fa-facebook text-blue-600 transition-transform duration-150 hover:scale-110" />
                        Facebook
                      </button>
                      <button
                        onClick={() => share('instagram')}
                        className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                      >
                        <i className="fa-brands fa-instagram text-pink-500 transition-transform duration-150 hover:scale-110" />
                        Instagram
                      </button>
                      <button
                        onClick={() => share('telegram')}
                        className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                      >
                        <i className="fa-brands fa-telegram text-blue-500 transition-transform duration-150 hover:scale-110" />
                        Telegram
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Offers Carousel Section (Standalone) */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-xl font-bold mb-4">Offers for this product</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {offers.map((offer, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="text-[#007185] font-bold text-sm mb-1 uppercase tracking-tighter">Special Offer</div>
                <p className="text-sm text-gray-700">{offer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDetail



