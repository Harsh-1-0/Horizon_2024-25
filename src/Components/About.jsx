const About = () => {
  return (
    <div
      id="about"
      className="relative min-h-screen  bg-beige flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute w-full top-0 left-0 flex items-center justify-center overflow-hidden z-0 place-content-center h-screen">
        <div className="relative bg-customGreen flex items-center px-2 py-1 sm:px-4 sm:py-2 border-t-2 border-b-2 border-black">
          <div className="text-black text-6xl md:text-7xl lg:text-9xl font-main animate-marquee">
            HORIZON&apos;24{" "}
          </div>
          <div className="text-black text-6xl md:text-7xl lg:text-9xl font-main animate-marquee ml-10 delay-1000">
            HORIZON&apos;24{" "}
          </div>
        </div>
      </div>
      <div className=" text-black p-4 hover:bg-[#F8DBC9] hover:lg:w-[850px]   relative bg-opacity-90 backdrop-blur z-10 w-[400px] md:w-[450px]  lg:w-[800px] bg-beige  hover:bg-customPink hover:bg-opacity-80 transition-all duration-500 rounded-[30px] shadow-lg border-2 border-black">
        <h2 className=" text-center   w-full text-3xl  md:text-6xl font-main font-bold rounded-t-[30px] py-12 px-8">
          ABOUT US
        </h2>
        <p className="text-[#1E1E1E] md:text-3xl text-xl relative  place-content-center font-poppins px-6 pt-4 pb-5 ">
          The Indian Society for Technical Education is a non-profit technical
          student chapter that plays a pivotal Vole in organizing a diverse
          range of technical events and fostering a strong technical community.
          Through engaging initiatives such as technical workshops, Hackathons,
          and Code-a- thons, we aim to uncover and nurture the hidden talents in
          students, providing them with the platform to excel and make
          meaningful contributions to the technical landscape.
        </p>
      </div>
    </div>
  );
};
export default About;
