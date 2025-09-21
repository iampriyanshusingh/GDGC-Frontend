import img from "../assets/img.webp";

const AfterProfileHeader = () => {
  return (
    <div className="sticky mt-5">
      <img src={img} alt="my photo" className="h-auto ml-64 rounded-xl" />

      <div className="absolute top-4 right-4 flex flex-col space-y-3">
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

      <div className="px-6 py-8 ml-96 mt-7">
        <p className="text-[20px]">
          💡 <strong>AI SaaS Website Design</strong> Clean, modern, and
          conversion-focused design for <br /> an{" "}
          <strong>automation SaaS platform</strong>. Focused on{" "}
          <strong>
            predictive analytics, workflow <br />
            automation, and smart dashboards
          </strong>{" "}
          to help businesses scale faster.
        </p>
        <p className="text-[21px]">
          What’s your take —{" "}
          <strong>more startup vibe or enterprise-ready</strong>? 🚀
        </p>

        <div className="space-y-4 mt-14">
          <div className="flex-col items-center space-x-3">
            <h2 className="text-[25px] font-bold">
              <strong>Work Inquiries</strong>
            </h2>
            <h2 className="text-[25px] font-extrabold">
              <strong>↓</strong>
            </h2>
            <p className="text-[19px]">
              Feel free to drop a <strong>message</strong> via my{" "}
              <strong>Dribbble inbox</strong> - I'd love to learn more about{" "}
              <br />
              your <strong>project</strong> and explore ways we can{" "}
              <strong>collaborate</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterProfileHeader;
