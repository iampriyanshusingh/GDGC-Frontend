import work from "../assets/work.webp";
import logo1 from "../assets/logo1.webp";

const WorkEnquiry = () => {
  return (
    <div className="bg-white flex flex-col items-center font-sans">
      <div className="bg-white w-full">
        <div className=" mt-14">
          <div className="flex-col items-center space-x-3 ml-96">
            <h2 className="text-[25px] font-bold">
              <strong>Work Inquiries</strong>
            </h2>
            <h2 className="text-[25px] font-extrabold">
              <strong>↓</strong>
            </h2>
            <p className="text-[20px]">
              Feel free to drop a <strong>message</strong> via my{" "}
              <strong>Dribbble inbox</strong> - I'd love to learn more about{" "}
              <br />
              your <strong>project</strong> and explore ways we can{" "}
              <strong>collaborate</strong>.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 ml-96 mt-10">
            My Services - View
            <span className="text-orange-500 ml-2 animate-pulse">⚡️</span>
          </h2>
        </div>
        <img
          src={work}
          className="mt-20 ml-96 h-[376px] w-[752px] rounded-lg"
        />
        <div className="bg-white p-10 w-full text-center">
          <div className="flex items-center w-full my-8 mt-28">
            <div className="flex-grow h-px bg-gray-300"></div>

            <div className="flex justify-center items-center mx-4">
              <div className="h-20 w-20 bg-yellow-400 rounded-full flex items-center justify-center">
                <img src={logo1} className="rounded-full" />
              </div>
            </div>

            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Trexa Lab Agency
          </h3>
          <p className="text-gray-600 flex items-center justify-center space-x-2 text-sm">
            <span>🧰 We’re open to new projects — Let’s discuss!</span>
          </p>
          <button className="mt-5 px-5 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkEnquiry;
