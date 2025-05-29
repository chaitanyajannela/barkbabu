import React from 'react';
import pawImage from '../assets/paw.png';

function getRandomPosition(minX, maxX, minY, maxY) {
  const x = Math.floor(Math.random() * (maxX - minX) + minX);
  const y = Math.floor(Math.random() * (maxY - minY) + minY);
  return { x, y };
}

function distance(pos1, pos2) {
  return Math.sqrt((pos1.x - pos2.x) ** 2 + (pos1.y - pos2.y) ** 2);
}

function generateNonOverlappingPositions(count, minX, maxX, minY, maxY, minDistance) {
  const positions = [];

  while (positions.length < count) {
    const pos = getRandomPosition(minX, maxX, minY, maxY);
    if (positions.every(existingPos => distance(existingPos, pos) >= minDistance)) {
      positions.push(pos);
    }
  }

  return positions;
}

function PawDecorations({ minX = 0, maxX = window.innerWidth || 1200, minY = 0, maxY = window.innerHeight || 900, pawCount = 10 }) {
  const pawPositions = generateNonOverlappingPositions(pawCount, minX, maxX, minY, maxY, 150);

  return (
    <>
      {pawPositions.map((pos, index) => (
        <img
          key={index}
          src={pawImage}
          alt="Decorative dog paw"
          className="pointer-events-none absolute w-24 opacity-20 select-none animate-float"
          style={{ top: pos.y + 'px', left: pos.x + 'px', zIndex: 0, animationDelay: `${index * 0.3}s` }}
        />
      ))}
    </>
  );
}

export default PawDecorations;
