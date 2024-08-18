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
import React, { useState, useRef } from "react";
import Intro from "./Components/Intro.jsx";
import muteIcon from "./images/mute.png";
import unmuteIcon from "./images/unmute.png";
import "./App.css";

const cardData = [
  {
    title: "build.apk",
    description: "By Ashwani Kumar Moudgil",
    image: "url1",
    room: "SJT 614",
    date: "08/08/2024",
    time: "10:00AM - 6:00 PM",
    location: "Sarojini Naidu Gallery",
  },
  {
    title: "create.fig",
    description: "By Gagan N Bangaragiri",
    image: "url1",
    room: "SJT 614",
    date: "19/08/2024",
    time: "10:00AM - 1:00 PM",
    location: "Sarojini Naidu Gallery",
  },
  {
    title: "calibrate.ai",
    description: "By Jahnavi Majumder",
    image: "url2",
    room: "TBA ",
    date: "TBA",
    time: "1TBA",
    location: "TBA ",
  },
  {
    title: "config.pcb",
    description: "By Anaghhashree Perumal and Hema Harini",
    image: "url3",
    room: "TBA",
    date: "TBA",
    time: "TBA",
    location: "TBA",
  },
  {
    title: "web.rtc",
    description: "Harsh Kumar Sinha",
    image: "url3",
    room: "TBA",
    date: "TBA",
    time: "TBA",
    location: "TBA",
  },
];

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const handleFinish = () => {
    setIntroFinished(true);
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
  };

  const handlePlayAudio = (shouldPlay) => {
    setPlayAudio(shouldPlay);
    if (shouldPlay && audioRef.current) {
      audioRef.current.play();
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="w-screen">
      {/* style={{ cursor: 'url("./images/cursor.png"), auto' }} */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/loading intro.mp3"
      ></audio>
      {!introFinished ? (
        <Intro onFinish={handleFinish} onPlayAudio={handlePlayAudio} />
      ) : (
        <div className="">
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
                  Come together with the{" "}
                  <span className="bolder">Nation's brightest minds </span>
                  for <span className="bolder">48 hours </span>of
                </div>
                {
                  <div className="mt-2 sm:mt-5">
                    Relentless innovation and boundless creativity{" "}
                  </div>
                }
              </Technica>
              <Slogan>
                INNOVATE{" "}
                <span className="text-2xl lg:text-5xl md:text-5xl mr-2 sm:mr-2 lg:mr-4 ml-2 sm:ml-2 lg:ml-4 mb-1 sm:mb-2 lg:mb-2">
                  |
                </span>{" "}
                IDEATE{" "}
                <span className="text-2xl lg:text-5xl md:text-5xl mr-2 sm:mr-2 lg:mr-4 ml-2 sm:ml-2 lg:ml-4 mb-1 sm:mb-2 lg:mb-2">
                  |
                </span>{" "}
                INSPIRE
              </Slogan>
              <Faq />
              <Teamsection />
              <Mainwebsite />

              <Footer />
            </div>
          </div>

          {playAudio && (
            <button
              onClick={toggleMute}
              style={{
                position: "fixed",
                right: "40px",
                bottom: "40px",
                border: "none",
                backgroundColor: "#F2C6AB",
                boxShadow: "3.5px 3.5px black",
                borderRadius: "10px",
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0",
                zIndex: "1000",
              }}
            >
              <img
                src={isMuted ? unmuteIcon : muteIcon}
                alt="Mute/Unmute"
                style={{ objectFit: "contain", height: "30px", width: "30px" }}
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
