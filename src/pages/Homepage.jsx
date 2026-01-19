import React from 'react';
import HeroSection from '../components/Homecompo/HeroSection';
import Categories from '../components/Homecompo/Categories';
import PriceBanners from '../components/Homecompo/PriceBanners';
import TrustIndicators from '../components/Homecompo/TrustIndicators';
import BestSellers from '../components/Homecompo/BestSellers';
import PromoSection from '../components/Homecompo/PromoSection';

const Homepage = () => {
    return (
        <>
            <div className="px-4 md:px-8 pt-6">
                <HeroSection />
            </div>

            <main className="container mx-auto px-4 pt-12 pb-20 space-y-12">
                <Categories />
                <PriceBanners />
                <TrustIndicators />
                <BestSellers />
                <PromoSection />
            </main>
        </>
    );
};

export default Homepage;
