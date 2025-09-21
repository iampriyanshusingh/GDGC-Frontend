import Mobile from "../assets/Mobile.webp";
import WebDesign from "../assets/WebDesign.webp";
import Branding from "../assets/Branding.webp";
import Illustration from "../assets/Illustration.webp";
import Print from "../assets/Print.webp";
import Typography from "../assets/Typography.webp";
import Animation from "../assets/Animation.webp";
import ProductDesign from "../assets/ProductDesign.webp";

const testimonials = [
  { name: "Mobile", avatar: Mobile },
  { name: "Web Design", avatar: WebDesign },
  { name: "Branding", avatar: Branding },
  { name: "Illustration", avatar: Illustration },
  { name: "Print", avatar: Print },
  { name: "Typography", avatar: Typography },
  { name: "Animation", avatar: Animation },
  { name: "Product Design", avatar: ProductDesign },
];

const Testimonial = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-36 overflow-hidden mb-12    ">
      <div className="flex animate-scroll gap-6 items-center">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-52  p-2 flex flex-col items-center rounded-lg hover:-rotate-3 transition-transform duration-300"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-full object-cover rounded-lg mb-2"
            />
            <span className="text-black font-medium text-sm md:text-base text-center">
              {testimonial.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 15s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
