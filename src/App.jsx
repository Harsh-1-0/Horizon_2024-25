import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Carousel from "./Components/Carousel.jsx";
import Mainwebsite from "./Components/Mainwebsite.jsx";
import Footer from "./Components/footer.jsx";
import Faq from "./Components/Faq.jsx";
import Navbar from "./Components/Navbar.jsx";
import Slogan from "./Components/Slogan.jsx";
import Technica from "./Components/Technica.jsx";
import Slider from "./Components/Slider.jsx";
import Teamsection from "./Components/TeamSection.jsx";

const cardData = [
  { title: "build.apk", description: "By Ashwani Kumar Moudgil", image: "url1" ,room:"SJT 614",date:"08/08/2024",time:"10:00AM - 6:00 PM" ,location :"Sarojini Naidu Gallery" },
  { title: "create.fig", description: "By Gagan N Bangaragiri", image: "url1", room:"SJT 614",date:"19/08/2024",time:"10:00AM - 1:00 PM" ,location :"Sarojini Naidu Gallery" },
  { title: "calibrate.ai", description: "By Jahnavi Majumder", image: "url2" ,room:"TBA ",date:"TBA",time:"1TBA" ,location :"TBA "},
  { title: "config.pcb", description: "By Anaghhashree Perumal and Hema Harini", image: "url3" ,room:"TBA",date:"TBA",time:"TBA" ,location :"TBA" },
  {title: "web.rtc", description: "Harsh Kumar Sinha", image: "url3" ,room:"TBA",date:"TBA",time:"TBA" ,location :"TBA" }
];

function App() {
  return (
    <div className="w-[98.9vw]">
      <div className="flex flex-col ">
        <div className="w-full">
          <Navbar />
        </div>
        <div>
          <Home />
          <About />
          <div className="  bg-[#FEFBEC]">
            <div className="workshops bg-[#B5DDC2] h-[177px] border-t-2 border-b-2 border-black flex justify-center items-center">
              <p className="text-[120px] font-bold leading-[144px] text-left font-itc-tiffany">
                WORKSHOPS
              </p>
            </div>

            <div>
              {/* her we will use map function to get multiple cards and make a */}
              <Carousel cardData={cardData} />
            </div>
          </div>
          <Slider />
          <Technica>
            <div>
              Come together with the {" "}
              <span className="bolder">nations's brightest minds for </span>
            </div>
            {
              <div className="mt-2 sm:mt-5">
                <span className="bolder">48 hours</span>
                {" of relentless innovation and creativity"}
              </div>
            }
          </Technica>
          <Slogan>INNOVATE <span className="text-2xl lg:text-5xl md:text-5xl mr-4 ml-4 mb-1 sm:mb-2 lg:mb-2">|</span> IDEATE <span className="text-2xl lg:text-5xl md:text-5xl mr-4 ml-4 mb-1 sm:mb-2 lg:mb-2">|</span> INSPIRE</Slogan>
          <Faq />
          <Teamsection />
          <Mainwebsite />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
