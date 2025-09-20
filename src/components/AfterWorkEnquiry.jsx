import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";

const AfterWorkEnquiry = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { title: "Chatbot Coach & Personal Brand", price: "$499" },
    { title: "Web Apps That Work Like You", price: "$2,500" },
    { title: "Mobile Apps Design", price: "$1,800" },
    { title: "Website Landing Page UI UX Design", price: "$1,800" },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-8 font-sans">
      {/* New Section */}

      {/* Services Section */}
      <div className="w-full max-w-4xl mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Services by Jabel | UI/UX & Web Design
          </h2>
          <a
            href="#"
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            View all services
            <BsArrowRight className="ml-2" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Placeholder for the image */}
              <div className="bg-gray-200 h-40 w-full flex items-center justify-center relative">
                <span className="text-gray-500">Image Placeholder</span>

                {/* Hover overlay - only show icons, no text */}
                <div
                  className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex items-center space-x-6">
                    <button className="text-white text-2xl hover:text-red-400 transition-colors duration-200 transform hover:scale-110">
                      <FaRegHeart />
                    </button>
                    <button className="text-white text-2xl hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
                      <FaRegEye />
                    </button>
                  </div>
                </div>
              </div>

              {/* Service details */}
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h4>
                </div>
                <span className="text-gray-600 font-bold">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfterWorkEnquiry;
