import "../index.css";

function Home() {
  return (
    <div>
      <div className="hidden lg:block w-full h-full text-[#1E1E1E]  bg-[#b5ddc2]">
        <div className=" w-full bg-[#fefbec] flex justify-center items-center">
          <p className=" font-main text-[13.6vw]"> HORIZON&apos;24</p>
        </div>
        <div className="flex  w-full bg-[#b5ddc2] items-center h-1/4 border-t-black border-b-black border-2 ">
        <div className="w-3/5 px-12 block text-5xl font-poppins -mt-16 max-h-500px-mt-4">
            <span className="-pt-8 text-5xl font-poppins ">One of the Biggest Technical</span>
            <span className="block text-5xl  font-poppins pt-8">
              Fests in India
              <span className="font-extrabold "> is back in 2024</span>
            </span>
            <br />
            <span className="block text-3xl pb-[8vh] font-poppins ">
              See you at Horizon!
            </span>
            
            <button
              type="submit"
              className="bg-[#F2C6AB] p-4 border-black border-2 rounded-full text-2xl font-normal"
            >
              Register Now
            </button>
          </div>
          <div className="w-2/5  flex items-center justify-center relative overflow-hidden p-8 border-black border-l-2">
            <img className="size-[65vh]" src="/homepage.png" />
          </div>
        </div>
      </div>

      <div className="lg:hidden  w-full overflow-hidden bg-[#b5ddc2]">
        <div className="h-[11vh] md:h-[11vh] w-full bg-[#fefbec] flex justify-center items-center">
          <p className="font-main  text-[14vw] md:text-[11vw]">
            HORIZON&apos;24
          </p>
        </div>
        <div className="w-full items-center h-[80vh] border-t-black border-b-black border-2">
          <div className="w-full h-full border-black flex flex-col justify-evenly">
            <div className="h-[25vh] md:mt-[7vh] md:text-center px-4 -mt-16">
              <span
                className="text-2xl md:text-4xl font-poppins text-[#1E1E1E];
"
              >
                One of the Biggest Technical
              </span>
              <br />
              <span className="block text-[#1E1E1E] my-2 md:my-1 text-2xl md:text-4xl font-poppins">
                Fests in India{" "}
                <span className="font-extrabold">is back in 2024</span>
              </span>
              <br />
              <span className="text-2xl md:text-4xl text-technicagreyfont-poppins block">
                Sed vestibulum diam auctor,{" "}
              </span>
              <span className="text-2xl md:text-4xl mb-2 text-[#1E1E1E] font-poppins">
                tincidunt <span className="font-extrabold">mi nec</span>
              </span>
              <br />
            </div>
            <div className="flex flex-col justify-evenly items-center -mt-24 md:-mt-2">
              <img src="/homepage.png" alt="img" className="h-64 w-80" />
              <button
                type="submit"
                className="bg-[#F2C6AB]  text-[#1E1E1E] mt-12 border-black border-2 rounded-xl font-normal md:mt-8 w-3/10 p-2"
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


