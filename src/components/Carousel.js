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
        <div className="relative w-full h-96 flex mt-10 items-center justify-center">
          <button
            className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            onClick={handlePrev}
          >
            Prev
          </button>
          <div className='h-full'>
          <p>{data[currentIndex].date}</p>
          <img
            src={images[currentIndex]}
            alt="carousel"ßß
            className="rounded-lg shadow-lg max-w-full max-h-full transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
          />
          </div>
          <button
            className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            onClick={handleNext}
          >
            Next
          </button>
          <p className=' w-1/2'>
            {data[currentIndex].text}
          </p>
        </div>
      );
    };

export default Carousel;
