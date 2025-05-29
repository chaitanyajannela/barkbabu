import React, { useState, useEffect } from 'react';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const cardsData = [
  { id: 1, title: 'Card 1', imageUrl: image1 },
  { id: 2, title: 'Card 2', imageUrl: image2 },
  { id: 3, title: 'Card 3', imageUrl: image3 },
  { id: 4, title: 'Card 4', imageUrl: image4 },
  { id: 5, title: 'Card 5', imageUrl: image5 },
];

function SlideCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto">
      <div className="overflow-hidden rounded-lg" style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 10px 15px -3px rgba(0,0,0,0.1), 0 0 10px -5px rgba(0,0,0,0.1)' }}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-full"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full object-contain rounded-lg max-h-[510px]"
                style={{ display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevCard}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-4xl text-teal-700 bg-white bg-opacity-75 rounded-full p-1 shadow hover:bg-opacity-100 transition"
        aria-label="Previous"
      >
        <FaRegArrowAltCircleLeft />
      </button>
      <button
        onClick={nextCard}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-4xl text-teal-700 bg-white bg-opacity-75 rounded-full p-1 shadow hover:bg-opacity-100 transition"
        aria-label="Next"
      >
        <FaRegArrowAltCircleRight />
      </button>
    </div>
  );
}

export default SlideCards;
