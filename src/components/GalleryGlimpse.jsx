import React, { useState } from "react";
import photo1 from "../assets/photo1.webp";
import photo2 from "../assets/photo2.webp";
import photo3 from "../assets/photo3.webp";
import photo4 from "../assets/photo4.webp";
import photo5 from "../assets/photo5.webp";
import photo6 from "../assets/photo6.webp";
const imageData = [
  {
    id: 1,
    url: photo1,
    alt: "Screenshot of a landing page design",
  },
  {
    id: 2,
    url: photo2,
    alt: "Screenshot of a dashboard UI",
  },
  {
    id: 3,
    url: photo3,
    alt: "Screenshot of an analytics page",
  },
  {
    id: 4,
    url: photo4,
    alt: "Screenshot of a mobile application",
  },
  {
    id: 5,
    url: photo5,
    alt: "Screenshot of a user profile screen",
  },
  {
    id: 6,
    url: photo6,
    alt: "Screenshot of a settings page",
  },
];

// --- Arrow SVG Icons ---
const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

// --- Main Image Gallery Component ---
const GalleryGlimpse = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeImage = imageData[activeIndex];

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <p className="text-[25px] font-bold text-center my-14">
        Gallery Glimpse✨
      </p>
      {/* Main Image Display */}
      <div className="relative mb-4 shadow-xl">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            key={activeImage.id} // Add key to force re-render for transition
            src={activeImage.url}
            alt={activeImage.alt}
            className="w-full object-contain transition-opacity duration-500 ease-in-out opacity-100"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/60 hover:bg-white/90 p-1 rounded-full shadow-md transition-all duration-300"
          aria-label="Previous image"
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/60 hover:bg-white/90 p-1 rounded-full shadow-md transition-all duration-300"
          aria-label="Next image"
        >
          <ChevronRightIcon />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-2 p-2">
        {imageData.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setActiveIndex(index)}
            className={`w-24 h-16 rounded-md overflow-hidden transition-all duration-300 border-2 ${
              activeIndex === index
                ? "border-pink-500 border-3 shadow-md"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryGlimpse;
