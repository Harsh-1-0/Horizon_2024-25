const About = () => {
  return (
    <div
      id="about"
      className="relative min-h-screen bg-beige flex items-center justify-center px-8 sm:px-6 lg:px-8"
    >
      <div>
      <div className="absolute w-full top-0 left-0 flex items-center justify-center overflow-hidden z-0 place-content-center h-screen">
        <div className="relative bg-customGreen flex items-center px-2 py-1 sm:px-4 sm:py-2 border-t-2 border-b-2 border-black">
          <div className="text-black text-9xl font-main animate-marquee">
            <span>
            HORIZON&apos;24
            </span>
          <span className= "ml-12">
            HORIZON&apos;24
          </span>
        </div>
      </div>
      </div>
        <div className="text-black p-4 hover:bg-[#F8DBC9] relative bg-opacity-85 backdrop-blur z-5 w-[350 px] md:w-[450px] lg:w-[800px] bg-beige hover:bg-customPink hover:bg-opacity-85 transition-all duration-500 rounded-[30px] shadow-lg border-2 border-black">
          <h2
            style={{ letterSpacing: '1.5px' }}
            className="text-center w-full text-4xl md:text-6xl font-main font-bold rounded-t-[30px] py-12 px-8"
          >
            ABOUT US
          </h2>
          <p
            style={{
              color: '#1E1E1E',
              textAlign: 'justify',
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '32px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
              letterSpacing: '-0.32px',
              
            }}
           
            className="px-8 pt-0 pb-8"
          >
            The Indian Society for Technical Education is a non-profit technical
            student chapter that plays a pivotal role in organizing a diverse
            range of technical events and fostering a strong technical community.
            Through engaging initiatives such as technical workshops, Hackathons,
            and Code-a-thons, we aim to uncover and nurture the hidden talents in
            students, providing them with the platform to excel and make
            meaningful contributions to the technical landscape.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;