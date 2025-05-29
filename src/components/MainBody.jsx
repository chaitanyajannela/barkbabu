import React from 'react';
import SlideCards from './SlideCards';
import Categories from './Categories';
import ProductSection from './ProductSection';
import pawImage from '../assets/paw.png';

function getRandomPosition(maxWidth, minY, maxHeight) {
  const x = Math.floor(Math.random() * maxWidth);
  const y = Math.floor(Math.random() * (maxHeight - minY) + minY);
  return { x, y };
}

function distance(pos1, pos2) {
  return Math.sqrt((pos1.x - pos2.x) ** 2 + (pos1.y - pos2.y) ** 2);
}

function generateNonOverlappingPositions(count, maxWidth, minY, maxHeight, minDistance) {
  const positions = [];

  while (positions.length < count) {
    const pos = getRandomPosition(maxWidth, minY, maxHeight);
    if (positions.every(existingPos => distance(existingPos, pos) >= minDistance)) {
      positions.push(pos);
    }
  }

  return positions;
}

function MainBody({ searchQuery, addToCart }) {
  const pawCount = 20; // Number of paw images to display
  const minY = 300; // Start vertical position below SlideCards
  const maxHeight = 900;
  const pawPositions = generateNonOverlappingPositions(pawCount, 1200, minY, maxHeight, 150);

  return (
    <main className="relative min-h-screen">
      {pawPositions.map((pos, index) => (
        <img
          key={index}
          src={pawImage}
          alt="Decorative dog paw"
          className="pointer-events-none absolute w-24 opacity-20 select-none animate-float"
          style={{ top: pos.y + 'px', left: pos.x + 'px', zIndex: 0, animationDelay: `${index * 0.3}s` }}
        />
      ))}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <SlideCards />
        <Categories />
        <ProductSection searchQuery={searchQuery} addToCart={addToCart} />
      </div>
    </main>
  );
}

export default MainBody;
