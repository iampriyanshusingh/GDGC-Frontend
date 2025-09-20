import React from "react";
import { FiArrowDown } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import work from "../assets/work.webp";

const WorkEnquiry = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-8 font-sans">
      <div className="bg-white p-10 max-w-xl w-full text-center">
        {/* Work Inquiries Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex justify-center items-center">
            Work Inquiries
            <FiArrowDown className="ml-2 text-purple-700" />
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Feel free to drop a <span className="font-semibold">message</span>{" "}
            via my{" "}
            <span className="font-bold text-purple-700">Dribbble inbox</span> -
            I'd love to learn more about your{" "}
            <span className="font-semibold">project</span> and explore ways we
            can <span className="font-semibold">collaborate</span>.
          </p>
        </div>

        {/* My Services Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex justify-center items-center">
            My Services - View
            <span className="text-orange-500 ml-2 animate-pulse">⚡️</span>
          </h2>
        </div>
        <img src={work} className="mt-10" />
        <div className="bg-white p-10 max-w-xl w-full text-center mt-8">
          <div className="flex items-center w-full my-8">
            <div className="flex-grow h-px bg-gray-300"></div>
            <div className="flex justify-center items-center mx-4">
              <div className="h-16 w-16 bg-yellow-400 rounded-full flex items-center justify-center">
                {/* Your logo will go here */}
              </div>
            </div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Trexa Lab Agency
          </h3>
          <p className="text-gray-600 flex items-center justify-center space-x-2">
            <span className="text-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4zm4 4h-2v-2h2v2zm0-4h-2V8h2v4z" />
              </svg>
            </span>
            <span>We're open to new projects – Let's discuss!</span>
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkEnquiry;
