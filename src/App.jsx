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
import React, { useState, useRef } from 'react';
import Intro from './Components/Intro.jsx';


const cardData = [
  { title: "Card 1", description: "This is card 1", image: "url1" },
  { title: "Card 2", description: "This is card 1", image: "url1" },
  { title: "Card 3", description: "This is card 2", image: "url2" },
  { title: "Card 4", description: "This is card 3", image: "url3" },
  { title: "Card 5", description: "This is card 3", image: "url3" },
];

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);
  const audioRef = useRef(null);

  const handleFinish = () => {
    setIntroFinished(true);
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'auto';
  };

  const handlePlayAudio = (shouldPlay) => {
    setPlayAudio(shouldPlay);
    if (shouldPlay && audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="w-[98.9vw]">
    <audio ref={audioRef} loop preload="auto" src="/loading intro.mp3"></audio>
    {!introFinished ? (
        <Intro onFinish={handleFinish} onPlayAudio={handlePlayAudio} />
      ) : (
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
              One of the Biggest Technical Fests in India{" "}
              <span className="bolder">is back in 2024</span>
            </div>
            {
              <div className="mt-2 sm:mt-5">
                Sed vestibulum diam auctor, tincidunt{" "}
                <span className="bolder">mi nec</span>
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

      )}
    </div>
  );
}

export default App;
