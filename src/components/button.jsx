import { useState } from "react";
import PropTypes from "prop-types";
const Button = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <button
        className={`hidden custom:inline-flex h-lg md:h-[10vh] lg:[12vh] ${
          isClicked ? "bg-button-click" : "bg-button"
        } rounded-[5vh] items-center justify-center py-[1vh] px-[1.5vw] font-about font-normal leading text-lg md:text-2xl lg:text-3xl mt-lg lg:mt-8 md:mt-6 border-2 border-about`}
        onClick={handleClick}
      >
        {children}
      </button>
      <button className="custom:hidden inline-flex h-sm sm:h-[7vh] bg-button rounded-[1vh] items-center justify-center py-[1vh] px-[1vw] font-about font-normal leading text-xl sm:text-2xl md:text-5xl mt-12 md:mt-12 sm:mt-10 border-2 border-about">
        {children}
      </button>
    </>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
