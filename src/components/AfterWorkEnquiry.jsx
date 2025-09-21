import { useState } from "react";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.webp";
import img7 from "../assets/7.webp";
import img8 from "../assets/8.webp";

const AfterWorkEnquiry = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndex1, setHoveredIndex1] = useState(null);

  const services = [
    { title: "Chatbot Coach & Personal Brand", price: "$499", url: img1 },
    { title: "Web Apps That Work Like You", price: "$2,500", url: img2 },
    { title: "Mobile Apps Design", price: "$1,800", url: img3 },
    { title: "Website Landing Page UI UX Design", price: "$1,800", url: img4 },
  ];

  const services2 = [
    { title: "Website Landing Page UI UX Design", price: "$1,800", url: img5 },
    { title: "Website Landing Page UI UX Design", price: "$1,800", url: img6 },
    { title: "Website Landing Page UI UX Design", price: "$1,800", url: img7 },
    { title: "Website Landing Page UI UX Design", price: "$1,800", url: img8 },
  ];
  return (
    <div className="flex flex-col items-center p-8 font-sans">
      <div className="w-full max-w-7xl mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-bold text-gray-800">
            More by Trexa Lab Agency
          </h2>
          <a
            href="#"
            className="flex items-center text-black hover:text-blue-700 mr-8 text-sm"
          >
            View profile
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-48 w-72 rounded-lg shadow-md overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full w-72 flex items-center justify-center relative rounded-lg bg-cover">
                <img src={service.url} />

                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
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
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-7xl mt-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-bold text-gray-800">
            Services by Jabel | UIUX & Web Design
          </h2>
          <a
            href="#"
            className="flex items-center text-black hover:text-blue-700 mr-8 text-sm"
          >
            View All Services
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {services2.map((services2, index) => (
            <div
              key={index}
              className="relative h-48 w-72 rounded-lg shadow-md overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex1(index)}
              onMouseLeave={() => setHoveredIndex1(null)}
            >
              <div className="h-full w-72 flex items-center justify-center relative rounded-lg bg-cover">
                <img src={services2.url} />
              </div>

              <div className="text-black bg-amber-900">hello</div>
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  hoveredIndex1 === index ? "opacity-100" : "opacity-0"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfterWorkEnquiry;
