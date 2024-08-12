const About = () => {
  return (
    <div className="relative min-h-screen bg-beige flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute w-full top-0 left-0 flex items-center justify-center overflow-hidden z-0 place-content-center h-screen">
        <div className="relative bg-customGreen flex items-center px-2 py-1 sm:px-4 sm:py-2 border-t-2 border-b-2 border-black">
          <div className="text-black text-6xl md:text-7xl lg:text-9xl font-main animate-marquee">
            HORIZON'24
          </div>
          <div className="text-black text-6xl md:text-7xl lg:text-9xl font-main animate-marquee ml-10 delay-1000">
            HORIZON'24
          </div>
        </div>
      </div>
      <div className=" text-slate-600 relative bg-opacity-90 backdrop-blur z-10 w-[250px] md:w-[450px] lg:w-[800px] bg-beige  hover:bg-customPink hover:bg-opacity-80 transition-all duration-500 rounded-[30px] shadow-lg border-2 border-black">
        <h2 className=" text-center  w-full text-xl md:text-3xl lg:text-5xl font-main font-bold rounded-t-[30px] py-12 px-8">
          ABOUT US
        </h2>
        <p className=" relative font-semibold place-content-center text-center font-poppins px-6 pt-4 pb-5 ">
          The Indian Society for Technical Education is a non-profit technical
          student chapter that plays a pivotal Vole in organizing a diverse
          range of technical events and fostering a strong technical community.
          Through engaging initiatives such as technical workshops, Hackathons,
          and Code-a- thons, we aim to uncover and nurture the hidden talents in
          students, providing them with the platform to excel and make
          meaningful contributions to the technical landscape.
        </p>
        {/* Rest of your FAQ component content goes here */}
      </div>
    </div>
  );
};
export default About;
