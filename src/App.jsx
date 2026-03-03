// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Homepage from './pages/Homepage';
// import CustomerCare from './pages/CustomerCare';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import WhatsAppFloat from './components/WHATSAPP_FLOAT/WhatsAppFloat';
// import LogRegister from './components/USER_LOGIN_SEGMENT/LogRegister';
// import GiftPopup from './components/USER_LOGIN_SEGMENT/GiftPopup';

// const App = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//   // Check sessionStorage for login status
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     return sessionStorage.getItem('isUserLoggedIn') === 'true';
//   });

//   // State to control the Login/Register Popup
//   const [isAuthOpen, setIsAuthOpen] = useState(false);

//   useEffect(() => {
//     const hasVisited = sessionStorage.getItem('hasVisitedBABA');

//     // Show popup only if user hasn't visited AND is not logged in
//     if (!hasVisited && !isLoggedIn) {
//       const timer = setTimeout(() => {
//         setIsAuthOpen(true);
//         sessionStorage.setItem('hasVisitedBABA', 'true');
//       }, 2000);

//       return () => clearTimeout(timer);
//     }
//   }, [isLoggedIn]);

//   // Simple login function - sets sessionStorage
//   const handleLogin = () => {
//     sessionStorage.setItem('isUserLoggedIn', 'true');
//     setIsLoggedIn(true);
//     setIsAuthOpen(false);
//   };

//   // Simple logout function
//   const handleLogout = () => {
//     sessionStorage.removeItem('isUserLoggedIn');
//     setIsLoggedIn(false);
//   };

//   return (
//     <Router>
//       <div className="min-h-screen">
//         <Navbar
//           searchQuery={searchQuery}
//           setSearchQuery={setSearchQuery}
//           isMenuOpen={isMenuOpen}
//           setIsMenuOpen={setIsMenuOpen}
//           isLoggedIn={isLoggedIn}
//           onLogout={handleLogout}
//         />
        
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/customer-care" element={<CustomerCare />} />
//           <Route path="/gift" element={<GiftPopup />} />
//         </Routes>
        
//         <Footer />

//         {/* Auth Popup */}
//         <LogRegister 
//           isOpen={isAuthOpen} 
//           onClose={() => setIsAuthOpen(false)}
//           onLoginSuccess={handleLogin}
//         />
        
//         <WhatsAppFloat />
//       </div>
//     </Router>
//   );
// };

// export default App;





// import React, { useState, useEffect } from 'react';
// import GiftPopup from './components/USER_LOGIN_SEGMENT/GiftPopup';

// const App = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   // Auto-show popup after 3 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsPopupOpen(true);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   // Or show on exit intent (when mouse leaves the window)
//   useEffect(() => {
//     const handleMouseLeave = (e) => {
//       if (e.clientY <= 0) {
//         setIsPopupOpen(true);
//       }
//     };

//     document.addEventListener('mouseleave', handleMouseLeave);
//     return () => document.removeEventListener('mouseleave', handleMouseLeave);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900">
//       {/* Your website content */}
//       <div className="text-white p-8">
//         <h1 className="text-3xl">Welcome to BrandStore</h1>
//         <p className="mt-4">Shop our latest collection...</p>
//       </div>

//       <GiftPopup 
//         isOpen={isPopupOpen} 
//         onClose={() => setIsPopupOpen(false)} 
//       />
//     </div>
//   );
// };

// export default App;







// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Homepage from './pages/Homepage';
// import CustomerCare from './pages/CustomerCare';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import WhatsAppFloat from './components/WHATSAPP_FLOAT/WhatsAppFloat';
// import LogRegister from './components/USER_LOGIN_SEGMENT/LogRegister';
// import GiftPopup from './components/USER_LOGIN_SEGMENT/GiftPopup';

// const App = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//   // Check sessionStorage for login status
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     return sessionStorage.getItem('isUserLoggedIn') === 'true';
//   });

//   // State to control the Login/Register Popup
//   const [isAuthOpen, setIsAuthOpen] = useState(false);
  
//   // State to control the Gift Popup (exit intent)
//   const [isGiftPopupOpen, setIsGiftPopupOpen] = useState(false);
//   const [hasShownGiftPopup, setHasShownGiftPopup] = useState(false);

//   useEffect(() => {
//     const hasVisited = sessionStorage.getItem('hasVisitedBABA');

//     // Show auth popup only if user hasn't visited AND is not logged in
//     if (!hasVisited && !isLoggedIn) {
//       const timer = setTimeout(() => {
//         setIsAuthOpen(true);
//         sessionStorage.setItem('hasVisitedBABA', 'true');
//       }, 2000);

//       return () => clearTimeout(timer);
//     }
//   }, [isLoggedIn]);

//   // Exit Intent Effect - Show Gift Popup when user tries to leave
//   useEffect(() => {
//     // Check if gift popup has been shown before
//     const giftPopupShown = sessionStorage.getItem('giftPopupShown');
//     if (giftPopupShown === 'true') {
//       setHasShownGiftPopup(true);
//     }

//     let timeoutRef = null;

//     const handleMouseLeave = (e) => {
//       // Only trigger if mouse leaves towards top and popup hasn't been shown
//       if (e.clientY <= 0 && !hasShownGiftPopup && !isGiftPopupOpen && !isAuthOpen) {
//         timeoutRef = setTimeout(() => {
//           setIsGiftPopupOpen(true);
//           setHasShownGiftPopup(true);
//           sessionStorage.setItem('giftPopupShown', 'true');
//         }, 100);
//       }
//     };

//     // Detect if user switches tab (might be leaving)
//     const handleVisibilityChange = () => {
//       if (document.visibilityState === 'hidden' && !hasShownGiftPopup && !isGiftPopupOpen && !isAuthOpen) {
//         timeoutRef = setTimeout(() => {
//           setIsGiftPopupOpen(true);
//           setHasShownGiftPopup(true);
//           sessionStorage.setItem('giftPopupShown', 'true');
//         }, 500);
//       } else {
//         if (timeoutRef) {
//           clearTimeout(timeoutRef);
//         }
//       }
//     };

//     document.addEventListener('mouseleave', handleMouseLeave);
//     document.addEventListener('visibilitychange', handleVisibilityChange);

//     return () => {
//       document.removeEventListener('mouseleave', handleMouseLeave);
//       document.removeEventListener('visibilitychange', handleVisibilityChange);
//       if (timeoutRef) {
//         clearTimeout(timeoutRef);
//       }
//     };
//   }, [hasShownGiftPopup, isGiftPopupOpen, isAuthOpen]);

//   // Reset gift popup after 24 hours (optional)
//   useEffect(() => {
//     const lastShown = sessionStorage.getItem('giftPopupLastShown');
//     const now = Date.now();
    
//     if (lastShown && now - parseInt(lastShown) > 24 * 60 * 60 * 1000) {
//       // Reset after 24 hours
//       sessionStorage.removeItem('giftPopupShown');
//       setHasShownGiftPopup(false);
//     }
    
//     if (!lastShown && hasShownGiftPopup) {
//       sessionStorage.setItem('giftPopupLastShown', now.toString());
//     }
//   }, [hasShownGiftPopup]);

//   // Simple login function - sets sessionStorage
//   const handleLogin = () => {
//     sessionStorage.setItem('isUserLoggedIn', 'true');
//     setIsLoggedIn(true);
//     setIsAuthOpen(false);
//   };

//   // Simple logout function
//   const handleLogout = () => {
//     sessionStorage.removeItem('isUserLoggedIn');
//     setIsLoggedIn(false);
//   };

//   return (
//     <Router>
//       <div className="min-h-screen">
//         <Navbar
//           searchQuery={searchQuery}
//           setSearchQuery={setSearchQuery}
//           isMenuOpen={isMenuOpen}
//           setIsMenuOpen={setIsMenuOpen}
//           isLoggedIn={isLoggedIn}
//           onLogout={handleLogout}
//         />
        
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/customer-care" element={<CustomerCare />} />
//           {/* Removed the gift route since it's now a popup */}
//         </Routes>
        
//         <Footer />

//         {/* Auth Popup - shows on first visit */}
//         <LogRegister 
//           isOpen={isAuthOpen} 
//           onClose={() => setIsAuthOpen(false)}
//           onLoginSuccess={handleLogin}
//         />
        
//         {/* Gift Popup - shows on exit intent */}
//         <GiftPopup 
//           isOpen={isGiftPopupOpen} 
//           onClose={() => setIsGiftPopupOpen(false)} 
//         />
        
//         <WhatsAppFloat />
//       </div>
//     </Router>
//   );
// };

// export default App;








import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import CustomerCare from './pages/CustomerCare';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Products from './components/PRODUCTS/Products';
import ProductDetail from './components/PRODUCTS/ProductDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatsAppFloat from './components/WHATSAPP_FLOAT/WhatsAppFloat';
import LogRegister from './components/USER_LOGIN_SEGMENT/LogRegister';
import GiftPopup from './components/USER_LOGIN_SEGMENT/GiftPopup';
import { WishlistProvider } from './contexts/WishlistContext';
import { CartProvider } from './contexts/CartContext';
import { NotificationProvider } from './contexts/NotificationContext';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem('isUserLoggedIn') === 'true';
  });

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isGiftPopupOpen, setIsGiftPopupOpen] = useState(false);
  const [hasShownGiftPopup, setHasShownGiftPopup] = useState(false);

  // track if user attempted to exit (used by GiftPopup)
  const [exitAttempt, setExitAttempt] = useState(false);
  // track whether auth popup has been closed at least once
  const [authPopupClosed, setAuthPopupClosed] = useState(false);
  const exitIntentShownRef = useRef(false);
  const timerRef = useRef(null);

  /* ---------------- AUTH POPUP ---------------- */
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedBABA');

    if (!hasVisited && !isLoggedIn) {
      const timer = setTimeout(() => {
        setIsAuthOpen(true);
        sessionStorage.setItem('hasVisitedBABA', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  useEffect(() => {
  if (isAuthOpen) return;

  const alreadyShown = sessionStorage.getItem("giftPopupShown");
  if (alreadyShown === "true") return;

  const timer = setTimeout(() => {
    setIsGiftPopupOpen(true);
    setHasShownGiftPopup(true);
    sessionStorage.setItem("giftPopupShown", "true");
    sessionStorage.setItem("giftPopupLastShown", Date.now().toString());
  }, 30000); // 30 seconds

  return () => clearTimeout(timer);
}, [isAuthOpen]);

  /* ---------------- GIFT POPUP EVERY 30 SECONDS ---------------- */
  // useEffect(() => {
  //   // Don't show if auth popup is open
  //   if (isAuthOpen) return;

  //   // Show gift popup every 30 seconds
  //   const interval = setInterval(() => {
  //     setIsGiftPopupOpen(true);
  //   }, 50000); // 50 seconds

  //   return () => clearInterval(interval);
  // }, [isAuthOpen]);

  /* ---------------- CHECK IF ALREADY SHOWN ---------------- */
  // useEffect(() => {
  //   const shown = sessionStorage.getItem('giftPopupShown');
  //   if (shown === 'true') {
  //     setHasShownGiftPopup(true);
  //   }
  // }, []);

  // const triggerGiftPopup = () => {
  //   if (!hasShownGiftPopup && !isAuthOpen) {
  //     setIsGiftPopupOpen(true);
  //     setHasShownGiftPopup(true);
  //     sessionStorage.setItem('giftPopupShown', 'true');
  //     sessionStorage.setItem('giftPopupLastShown', Date.now().toString());
  //   }
  // };

  /* ---------------- 1️⃣ AFTER 20 SECONDS ---------------- */
  // useEffect(() => {
  //   if (hasShownGiftPopup || isAuthOpen) return;

  //   const timer = setTimeout(() => {
  //     triggerGiftPopup();
  //   }, 20000);

  //   return () => clearTimeout(timer);
  // }, [hasShownGiftPopup, isAuthOpen]);

  /* ---------------- 2️⃣ SCROLL 60% ---------------- */
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (hasShownGiftPopup || isAuthOpen) return;

  //     const scrollTop = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const fullHeight = document.documentElement.scrollHeight;

  //     const scrollPercent = (scrollTop + windowHeight) / fullHeight;

  //     if (scrollPercent >= 0.6) {
  //       triggerGiftPopup();
  //       window.removeEventListener('scroll', handleScroll);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [hasShownGiftPopup, isAuthOpen]);

  /* ---------------- 3️⃣ EXIT INTENT (MOUSE TOP) ---------------- */
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        triggerGiftPopup();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShownGiftPopup, isAuthOpen]);

  /* ---------------- RESET AFTER 24 HOURS ---------------- */
  useEffect(() => {
    const lastShown = sessionStorage.getItem('giftPopupLastShown');
    const now = Date.now();

    if (lastShown && now - parseInt(lastShown) > 24 * 60 * 60 * 1000) {
      sessionStorage.removeItem('giftPopupShown');
      sessionStorage.removeItem('giftPopupLastShown');
      setHasShownGiftPopup(false);
    }
  }, []);

  /* ---------------- EXIT INTENT HANDLER ---------------- */
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !exitIntentShownRef.current) {
        exitIntentShownRef.current = true;
        setExitAttempt(true);
        setIsGiftPopupOpen(true);
        setTimeout(() => {
          exitIntentShownRef.current = false;
        }, 1000);
      }
    };

    const handleMouseMove = (ev) => {
      if (ev.clientY <= 6 && !exitIntentShownRef.current) {
        exitIntentShownRef.current = true;
        setExitAttempt(true);
        setIsGiftPopupOpen(true);
        setTimeout(() => {
          exitIntentShownRef.current = false;
        }, 1000);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  /* ---------------- LOGIN / LOGOUT ---------------- */

  const handleAuthClose = () => {
    setIsAuthOpen(false);
    setAuthPopupClosed(true);
  };

  const handleGiftPopupClose = () => {
    setIsGiftPopupOpen(false);
    setExitAttempt(false);
  };

  const handleConfirmClose = () => {
    setIsGiftPopupOpen(false);
    try {
      window.open('', '_self');
      window.close();
      setTimeout(() => {
        window.location.href = 'about:blank';
      }, 200);
    } catch (err) {
      window.location.href = 'about:blank';
    }
    setExitAttempt(false);
  };
  const handleLogin = () => {
    sessionStorage.setItem('isUserLoggedIn', 'true');
    setIsLoggedIn(true);
    setIsAuthOpen(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isUserLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <NotificationProvider>
      <Router>
        <WishlistProvider>
          <CartProvider>
            <div className="min-h-screen">
              <Navbar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                isLoggedIn={isLoggedIn}
                onLogout={handleLogout}
              />

              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/customer-care" element={<CustomerCare />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:slug" element={<ProductDetail />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/checkout/:slug" element={<CheckoutPage />} />
              </Routes>

              <Footer />

              <LogRegister
                isOpen={isAuthOpen}
                onClose={() => setIsAuthOpen(false)}
                onLoginSuccess={handleLogin}
              />

              <GiftPopup
                isOpen={isGiftPopupOpen}
                onClose={handleGiftPopupClose}
                exitAttempt={exitAttempt}
                onConfirmClose={handleConfirmClose}
              />

              <WhatsAppFloat />
            </div>
          </CartProvider>
        </WishlistProvider>
      </Router>
    </NotificationProvider>
  );
};

export default App;

