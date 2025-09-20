import React from "react";
import fullimage from "../assets/fullimage.webp";

const FullLandingPageView = () => {
  return (
    <div>
      <h1 className="flex items-center justify-center text-3xl font-bold mt-10">
        Full Landing Page View
      </h1>
      <img src={fullimage} />
    </div>
  );
};

export default FullLandingPageView;
