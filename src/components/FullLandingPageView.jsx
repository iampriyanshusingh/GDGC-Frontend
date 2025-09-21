import fullimage from "../assets/fullimage.webp";

const FullLandingPageView = () => {
  return (
    <>
      <h1 className="flex items-center justify-center text-2xl font-bold my-20">
        Full Landing Page View ↯
      </h1>
      <img src={fullimage} className="w-full max-w-5xl mx-auto rounded-lg " />
    </>
  );
};

export default FullLandingPageView;
