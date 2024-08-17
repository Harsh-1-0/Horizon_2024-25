import {useState} from 'react';
import PropTypes from "prop-types";
const Button=({children})=>{
    const [isClicked,setIsClicked]=useState(false);
    const handleClick=()=>{
        setIsClicked(!isClicked);
    }
    return (
        <>
        <button className={`hidden custom:inline-flex h-[4vh] sm:h-[6vh] md:h-[8.1vh] lg:[12vh] ${isClicked?'bg-button-click':'bg-button'} rounded-[5vh] items-center justify-center py-[1vh] px-[1.5vw] font-about font-normal leading text-lg md:text-xl lg:text-2xl mt-lg lg:mt-8 md:mt-6 border-2 border-about`} onClick={handleClick}>{children}</button>
        <button className="custom:hidden inline-flex h-sm sm:h-[7vh] bg-button rounded-[1.5vh] items-center justify-center py-[1vh] px-[2vw] font-about font-normal leading text-xl sm:text-2xl md:text-5xl mt-5 md:mt-12 sm:mt-10 border-1 border-about">{children}</button>
        </>
        
    );  
}
Button.propTypes={
    children: PropTypes.node.isRequired,
}

export default Button;