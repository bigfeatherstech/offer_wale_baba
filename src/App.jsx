import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import CustomerCare from './pages/CustomerCare';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatsAppFloat from './components/WHATSAPP_FLOAT/WhatsAppFloat';
import LoginPopup from './components/LOGIN_POPUP/loginPopup'; // Fixed: Capitalized component name

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  // In the future, this 'false' will come from your Auth API/Context
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedBABA');

    // PRACTICAL CHECK: Only trigger if NO session exists AND user is NOT logged in
    if (!hasVisited && !isLoggedIn) {
      const timer = setTimeout(() => {
        setIsLoginOpen(true);
        sessionStorage.setItem('hasVisitedBABA', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]); // Added isLoggedIn here so if it changes, the effect re-evaluates

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/customer-care" element={<CustomerCare />} />
        </Routes>
        
        <Footer />

        {/* Fixed: Capitalized component name and added proper props */}
        <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        
        <WhatsAppFloat />
      </div>
    </Router>
  );
};

export default App;

// import React, { useState,useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Homepage from './pages/Homepage';
// import CustomerCare from './pages/CustomerCare';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import WhatsAppFloat from './components/WHATSAPP_FLOAT/WhatsAppFloat';
// import loginPopup from './components/LOGIN_POPUP/loginPopup';
// const App = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   // In the future, this 'false' will come from your Auth API/Context
//   const [isLoggedIn, setIsLoggedIn] = useState(false); 

//   useEffect(() => {
//     const hasVisited = sessionStorage.getItem('hasVisitedBABA');

//     // PRACTICAL CHECK: Only trigger if NO session exists AND user is NOT logged in
//     if (!hasVisited && !isLoggedIn) {
//       const timer = setTimeout(() => {
//         setIsLoginOpen(true);
//         sessionStorage.setItem('hasVisitedBABA', 'true');
//       }, 2000);

//       return () => clearTimeout(timer);
//     }
//   }, [isLoggedIn]); // Added isLoggedIn here so if it changes, the effect re-evaluates

//   return (
//     <Router>
//       <div className="min-h-screen">
//         <Navbar
//           searchQuery={searchQuery}
//           setSearchQuery={setSearchQuery}
//           isMenuOpen={isMenuOpen}
//           setIsMenuOpen={setIsMenuOpen}
//         />
        
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/customer-care" element={<CustomerCare />} />
//         </Routes>
        
//         <Footer />

    
//         <loginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
//       <WhatsAppFloat />
//       </div>
//     </Router>
//   );
// };

// export default App;
