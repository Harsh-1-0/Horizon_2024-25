import PropTypes from "prop-types";
import { useEffect } from "react";
import tech from "../assets/Tech2.png";

const Slider = ({ className = "" }) => {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      @keyframes slideRightToLeft {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      .animate-slide {
        animation: slideRightToLeft 20s linear infinite;
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div id = "technica"
      className={`flex items-center justify-center max-h-screen ${className}`}
    >
      <section
        className={`relative overflow-hidden w-full h-lg lg:h-[32.6vh] md:[30vh] bg-[#000000] border-[#1e1e1e] border-[1.8px] lg:border-[2px] border-solid`}
        style={{ zIndex: -1 }}
      >
        <div  className="flex items-center justify-center h-lg lg:h-[32.6vh] md:h-[25vh] sm:h-[20vh] whitespace-nowrap animate-slide uppercase text-custom text-[76px] lg:text-[140px] md:text-[116px] sm:text-[96px] font-slogan">
          <img src={tech} className="responsive-image"></img>
            TECHNICA  
          <img src={tech} className="responsive-image"></img>
            TECHNICA 
          <img src={tech} className="responsive-image"></img>
            TECHNICA
          <img src={tech} className="responsive-image"></img>
            TECHNICA
        </div>
      </section>
    </div>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
};

export default Slider;