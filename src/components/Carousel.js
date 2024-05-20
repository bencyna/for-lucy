import React, { useState, useEffect } from 'react';
import data from "./data.json"


const images = [
  
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([]);

    useEffect(() => {
      // Dynamically import images based on the paths in data.json
      const importImages = async () => {
          const importedImages = await Promise.all(data.map(async (item) => {
              const image = await import(`../images/${item.image}`);
              return image.default;
          }));
          setImages(importedImages);
      };
      importImages();
  }, []);

    const handleNext = () => {
      console.log(data[currentIndex].image)
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    return (
      <div className="relative w-full h-screen flex flex-col items-center justify-center mt-10">
      <div className="flex items-center justify-center w-full relative">
        <button
          className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={handlePrev}
        >
          Prev
        </button>
        <div className='flex flex-col items-center'>
          <img
            src={images[currentIndex]}
            alt="carousel"
            className="rounded-lg shadow-lg max-w-full max-h-96 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
          />
          <p className="mt-4 text-center">{data[currentIndex].date}</p>
        </div>
        <button
          className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <p className="mt-10 text-center max-w-2xl">
        {data[currentIndex].text}
      </p>
    </div>
  );
};


export default Carousel;
