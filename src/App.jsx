import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import CustomerCare from './pages/CustomerCare';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      </div>
    </Router>
  );
};

export default App;
