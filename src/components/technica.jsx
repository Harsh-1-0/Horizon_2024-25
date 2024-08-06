import PropTypes from "prop-types";
import Button from "./button";
const Technica=({children})=>{
    return (
        <>
            {/* <div className="marquee-container relative top-0 left-0 flex items-center justify-center px-2 py-1 sm:px-4 sm:py-2 place-content-center">
                <div className="marquee-content whitespace-nowrap font-itc text-6xl md:text-7xl lg:text-9xl py-8 inline-flex">
                    <img className="place-content-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[120px] lg:h-[130px] mx-5 md:mx-9 lg:mx-16"src="src/assets/Tech2.png" />
                    TECHNICA
                    <img className="place-content-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[120px] lg:h-[130px] mx-5 md:mx-9 lg:mx-16"src="src/assets/Tech2.png" />
                    TECHNICA
                    <img className="place-content-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[120px] lg:h-[130px] mx-5 md:mx-9 lg:mx-16"src="src/assets/Tech2.png" />
                    TECHNICA
                    <img className="place-content-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[120px] lg:h-[130px] mx-5 md:mx-9 lg:mx-16"src="src/assets/Tech2.png" />
                    TECHNICA
                    <img className="place-content-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[120px] lg:h-[130px] mx-5 md:mx-9 lg:mx-16"src="src/assets/Tech2.png" />
                    TECHNICA
                    <img className="place-content-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[120px] lg:h-[130px] mx-5 md:mx-9 lg:mx-16"src="src/assets/Tech2.png" />
                </div>
            </div> */}
            
        <div className="hidden custom:flex shrink-1 h-[89vh] bg-technica border-t-2 border-black">
            <div className="flex w-[38vw] border-r-2 border-black justify-center items-center">
                <div className="flex flex-shrink-0 w-clamp-24vw-24vw-30vw h-clamp-24vw-25vw-40vw background-image"></div>
            </div>
            <div className="flex flex-grow shrink-1 justify-center items-center">
                <div className="flex flex-col items-start justify-center font-about font-normal text-md md:text-4xl lg:text-5xl w-[53vw] h-[55vh] color-about leading-loose sm:leading-relaxed md:leading-snug lg:leading-normal">
                    {children}
                    <div><Button>Register Now</Button></div>
                </div>
            </div>
        </div>
 
        <div className="custom:hidden flex flex-col p-11 items-center justify-evenly shrink-1 h-[100vh] bg-technica border-t-2 border-black">
            <div className="flex flex-col items-start font-about font-normal text-2xl md:text-3xl sm:2xl space-y-12">
            {children}
            </div>
            <div className="custom:hidden flex flex-shrink-0 background-image mt-5 w-clamp-85vw-85vw-85vw h-clamp-40vw-55vw-60vw border-2 border-black"></div>
            <div>
                <Button>Register Now</Button>
            </div>
        </div>
        </>
        
    );
}
Technica.propTypes={
    children: PropTypes.node.isRequired,
}

export default Technica;