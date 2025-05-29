import React from 'react';
import SlideCards from './SlideCards';
import Categories from './Categories';
import ProductSection from './ProductSection';

function MainBody({ searchQuery, addToCart }) {
  return (
    <main className="relative min-h-screen">
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ marginTop: '60px' }}>
          <SlideCards />
        </div>
        <Categories />
        <ProductSection searchQuery={searchQuery} addToCart={addToCart} />
      </div>
    </main>
  );
}

export default MainBody;
