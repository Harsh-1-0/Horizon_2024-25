import star from "../assets/star.png";

const About = () => {
  return (
    <div id="about" className="relative min-h-screen bg-beige flex items-center justify-center px-8 sm:px-6 lg:px-8">
      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="absolute w-full top-0 left-0 flex items-center justify-center overflow-hidden z-0 place-content-center h-screen">
          <div className="relative bg-customGreen flex items-center px-2 py-1 sm:px-4 sm:py-2 border-t-2 border-b-2 border-black">
            <div className="text-black text-9xl font-main flex items-center animate-marquee">
              <img src={star} className="w-[70px] h-[70px] mx-10" alt="star" />
              <span>HORIZON&apos;24</span>
              <img src={star} className="w-[70px] h-[70px] mx-10" alt="star" />
              <span>HORIZON&apos;24</span>
              <img src={star} className="w-[70px] h-[70px] mx-10" alt="star" />
              <span>HORIZON&apos;24</span>
              <img src={star} className="w-[70px] h-[70px] mx-10" alt="star" />
              <span>HORIZON&apos;24</span>
            </div>
          </div>
        </div>
        <div className="text-black p-4 hover:bg-[#F8DBC9] relative bg-opacity-85 backdrop-blur z-5 w-[350px] md:w-[450px] lg:w-[800px] bg-beige hover:bg-customPink hover:bg-opacity-85 transition-all duration-500 rounded-[30px] shadow-lg border-2 border-black">
          <h2 style={{ letterSpacing: "1.5px" }} className="text-center w-full text-4xl md:text-6xl font-main font-bold rounded-t-[30px] py-12 px-8">
            ABOUT US
          </h2>
          <p style={{ color: "#1E1E1E", textAlign: "justify", fontFamily: "'Open Sans', sans-serif", fontSize: "32px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", letterSpacing: "-0.32px" }} className="px-8 pt-0 pb-8 md:text-2xl lg:text-4xl">
            The Indian Society for Technical Education is a non-profit technical student chapter that plays a pivotal role in organizing a diverse range of technical events and fostering a strong technical community. Through engaging initiatives such as technical workshops, Hackathons, and Code-a-thons, we aim to uncover and nurture the hidden talents in students, providing them with the platform to excel and make meaningful contributions to the technical landscape.
          </p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden">
        <div className="absolute w-full top-0 left-0 flex items-center justify-center overflow-hidden z-0 place-content-center h-screen">
          <div className="relative bg-customGreen flex items-center px-2 py-1 sm:px-4 sm:py-2 border-t-2 border-b-2 border-black">
            <div className="text-black text-9xl font-main flex items-center animate-marquee">
              <img src={star} className="w-[70px] h-[70px] mx-10" alt="star" />
              <span>HORIZON&apos;24</span>
              <img src={star} className="w-[70px] h-[70px] mx-10" alt="star" />
              <span>HORIZON&apos;24</span>
            </div>
          </div>
        </div>
        <div className="text-black p-4 hover:bg-[#F8DBC9] relative bg-opacity-85 backdrop-blur z-5 w-[95%] mx-auto bg-beige hover:bg-customPink hover:bg-opacity-85 transition-all duration-500 rounded-[30px] shadow-lg border-2 border-black">
          <h2 style={{ letterSpacing: "1.5px" }} className="text-center w-full text-3xl font-main font-bold rounded-t-[30px] py-8 px-4">
            ABOUT US
          </h2>
          <p style={{ color: "#1E1E1E", textAlign: "justify", fontFamily: "'Open Sans', sans-serif", fontSize: "24px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", letterSpacing: "-0.32px" }} className="px-4 pt-0 pb-8">
            The Indian Society for Technical Education is a non-profit technical student chapter that plays a pivotal role in organizing a diverse range of technical events and fostering a strong technical community. Through engaging initiatives such as technical workshops, Hackathons, and Code-a-thons, we aim to uncover and nurture the hidden talents in students, providing them with the platform to excel and make meaningful contributions to the technical landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
