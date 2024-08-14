import "../index.css";

function Home() {
  return (
    <div>
      <div className="hidden lg:block h-screen w-full text-[#1E1E1E]  bg-[#b5ddc2]">
        <div className=" w-full bg-[#fefbec] flex justify-center items-center">
          
          <p className=" font-main text-[13.6vw]"> HORIZON&apos;24</p>
        </div>
        <div className="flex  w-full bg-[#b5ddc2] items-center h-2/3 border-t-black border-b-black border-2">
          <div className="w-2/3 h-full border-black border-r-2  p-12 block text-5xl font-poppins">
            <br /> <br />
            One of the Biggest Technical
            <span className="block  text-5xl font-poppins "></span>
            <br />
            <span className="block text-5xl  font-poppins ">
              Fests in India{" "}
              <span className="font-extrabold ">is back in 2024</span>
            </span>
            <br />
            <span className="block text-3xl mb-[6vh] font-poppins ">
              See you at Horizon!
            </span>
            <br />
            <button
              type="submit"
              className="bg-[#F2C6AB] px-6 py-4 border-black border-2 rounded-full text-2xl"
            >
              Register Now
            </button>
          </div>
          <div className="w-1/3 h-full flex items-center justify-center relative overflow-hidden p-8">
            <img className="" src="/homepage.png" />
          </div>
        </div>
      </div>

      <div className="lg:hidden h-screen w-full overflow-hidden bg-[#b5ddc2]">
        <div className="h-[16vh] md:h-[11vh] w-full bg-[#fefbec] flex justify-center items-center">
          <p className="font-main  text-[14vw] md:text-[11vw]">
            HORIZON&apos;24
          </p>
        </div>
        <div className="w-full items-center h-[84vh] lg:border-t-black lg:border-b-black lg:border-2">
          <div className="w-full h-full border-black flex flex-col justify-evenly">
            <div className="h-[25vh] mt-[5vh] md:mt-[7vh] md:text-center px-20">
              <span
                className="text-xl md:text-4xl font-poppins text-[#1E1E1E];
"
              >
                One of the Biggest Technical
              </span>
              <br />
              <span className="block text-[#1E1E1E] my-2 md:my-1 text-xl md:text-4xl font-poppins">
                Fests in India{" "}
                <span className="font-extrabold">is back in 2024</span>
              </span>
              <br />
              <span className="text-xl md:text-4xl text-technicagreyfont-poppins block">
                Sed vestibulum diam auctor,{" "}
              </span>
              <span className="text-xl md:text-4xl mb-4 text-[#1E1E1E] font-poppins">
                tincidunt <span className="font-extrabold">mi nec</span>
              </span>
              <br />
            </div>
            <div className="flex flex-col justify-evenly items-center ">
              <img src="/homepage.png" alt="img" className="size-64" />
              <button
                type="submit"
                className="bg-[#F2C6AB]  text-[#1E1E1E] mt-4 border-black border-1 rounded-xl text-xl md:mt-16 w-2/5 -py-4"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

<div className="flex flex-col items-center gap-28">
  <img src="/homepage.png" />
  <button
    type="submit"
    className="bg-[#F2C6AB] px-2 py-2 mt-8 border-black border-2 rounded-lg text-3xl md:mt-16"
  >
    Register Now
  </button>
</div>;
