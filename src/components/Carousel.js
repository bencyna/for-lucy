import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/500x250',
  'https://via.placeholder.com/500x250',
  'https://via.placeholder.com/500x250',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <img src={images[currentIndex]} alt="carousel" className="rounded-lg shadow-lg" />
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
