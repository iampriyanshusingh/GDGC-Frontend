import React from "react";
import img from "../assets/img.webp";

const AfterProfileHeader = () => {
  return (
    <div className="sticky">
      {/* Main image */}
      <img src={img} alt="my photo" className="w-full h-auto" />

      {/* Three circular icons in top right corner */}
      <div className="absolute top-4 right-4 flex flex-col space-y-3">
        {/* User/Profile Icon */}
        <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        {/* Up Arrow Icon */}
        <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>

        {/* Info/Question Icon */}
        <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>

      {/* Text content after the photo */}
      <div className="px-6 py-8 space-y-8">
        {/* Description Section */}
        <div className="space-y-4">
          {/* Lightbulb icon and title */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                AI SaaS Website Design
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Clean, modern, and conversion-focused design for an automation
                SaaS platform. Focused on{" "}
                <span className="font-semibold">predictive analytics</span>,{" "}
                <span className="font-semibold">workflow automation</span>, and{" "}
                <span className="font-semibold">smart dashboards</span> to help
                businesses scale faster.
              </p>
              <p className="text-gray-700 mt-2">
                What's your take – more startup vibe or enterprise-ready? 🚀
              </p>
            </div>
          </div>
        </div>

        {/* Work Inquiries Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <h3 className="text-xl font-bold text-gray-900">Work Inquiries</h3>
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Feel free to drop a{" "}
            <span className="font-semibold">message via my Dribbble inbox</span>{" "}
            - I'd love to learn more about your project and explore ways we can{" "}
            <span className="font-semibold">collaborate</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AfterProfileHeader;
