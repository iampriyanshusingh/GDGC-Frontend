import React from "react";
import logo from "../assets/logo.webp";

// --- SVG Icons ---
// Using inline SVGs is a common practice in React to avoid extra dependencies or file loading.

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-gray-700"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const BookmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-gray-700"
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
);

// --- Main Component ---
const UserProfileHeader = () => {
  return (
    <div className="bg-white font-sans sticky top-18 z-40">
      <div className="container mx-auto p-2 sm:p-6">
        <div className="flex flex-col sm:flex-row ml-48">
          {/* Left Side: User Info */}
          <div className="flex items-center space-x-4">
            <img
              // You can replace this placeholder with the actual user photo
              src={logo}
              alt="Jahed"
              className="h-14 w-14 rounded-full object-cover border-2 border-gray-200"
            />
            <div>
              <div className="flex items-center space-x-3 text-sm text-gray-500 ">
                <h3 className="text-[15px] font-semibold text-gray-900">
                  Jabel | UIUX & Web Design for Trexa Lab Agency
                </h3>
                <div className="flex items-center space-x-1">
                  <span className="text-green-600 font-xs text-[11px]">
                    Available for work
                  </span>
                </div>
                <button className="text-gray-500 font-medium text-[11px] hover:text-gray-900 transition-colors">
                  Follow
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Action Buttons */}
          <div className="flex items-center space-x-3 mt-4 sm:mt-0 ml-64">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-red-400 transition-colors">
              <span className="sr-only">Like</span>
              <HeartIcon />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-blue-400 transition-colors">
              <span className="sr-only">Bookmark</span>
              <BookmarkIcon />
            </button>
            <button className="px-5 py-2 bg-gray-900 text-white font-base rounded-full hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Default export for use in other parts of a React application
export default UserProfileHeader;
