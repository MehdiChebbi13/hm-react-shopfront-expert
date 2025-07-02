
import React from 'react';
import { ProductProvider } from '@/context/ProductContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PromotionBanner from '@/components/PromotionBanner';
import ProductFilters from '@/components/ProductFilters';
import ProductGrid from '@/components/ProductGrid';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ProductProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <PromotionBanner />
          <ProductFilters />
          <ProductGrid />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </ProductProvider>
  );
};

export default Index;
