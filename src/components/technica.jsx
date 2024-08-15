import PropTypes from "prop-types";
import Button from "./button";
const Technica=({children})=>{
    return (
        <>
            
        <div className="hidden custom:flex shrink-1 h-[70vh] bg-technica border-t-2 border-black">
            <div className="flex w-[34vw] border-r-2 border-black justify-center items-center">
                <div className="flex flex-shrink-0 w-clamp-30vw-30vw-32vw h-clamp-30vw-30vw-32vw background-image"></div>
            </div>
            <div className="flex flex-grow shrink-1 justify-center items-center">
                <div className="flex flex-col items-start justify-center font-about font-normal text-md md:text-4xl lg:text-5xl w-[53vw] h-[55vh] color-about leading-loose sm:leading-relaxed md:leading-snug lg:leading-normal">
                    {children}
                    <div><Button>Register Now</Button></div>
                </div>
            </div>
        </div>
 
        <div className="custom:hidden flex flex-col p-11 items-center justify-evenly shrink-1 h-[75vh] bg-technica border-t-2 border-black">
            <div className="flex flex-col items-start font-about font-normal text-2xl md:text-3xl sm:2xl space-y-4">
            {children}
            </div>
            <div className="custom:hidden flex flex-shrink-0 background-image mt-4 w-clamp-85vw-85vw-85vw h-clamp-40vw-55vw-60vw border-2 border-black"></div>
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