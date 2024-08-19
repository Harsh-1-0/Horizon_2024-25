import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Carousel from "./Components/Carousel.jsx";
// import Mainwebsite from "./Components/Mainwebsite.jsx";
import Footer from "./Components/footer.jsx";
import Faq from "./Components/Faq.jsx";
import Navbar from "./Components/Navbar.jsx";
import Slogan from "./Components/Slogan.jsx";
import Technica from "./Components/Technica.jsx";
import Slider from "./Components/Slider.jsx";
import Teamsection from "./Components/TeamSection.jsx";
import { useState, useRef } from "react";
import Intro from "./Components/Intro.jsx";
import muteIcon from "./images/mute.png";
import unmuteIcon from "./images/unmute.png";
import figma from "./images/figma.png";
import kit from "./images/kit.png";
import WebRTC from "./images/webrtc.png";
import tensor from "./images/tensorflow.png";
import kotline from "./images/kotline.png";

import "./App.css";

const cardData = [
  {
    title: "build.apk",
    description: "By Ashwani Kumar Moudgil",
    image: kotline,
    room: "SJT 614",
    date: "08/08/2024",
    time: "10:00AM - 6:00 PM",
    location: "Sarojini Naidu Gallery",
    details:
      "Participants will engage in an immersive Kotlin and Android app development workshop, learning to build powerful mobile apps from scratch.",
  },
  {
    title: "create.fig",
    description: "By Gagan N Bangaragiri",
    image: figma,
    room: "SJT 614",
    date: "19/08/2024",
    time: "10:00AM - 1:00 PM",
    location: "Sarojini Naidu Gallery",
    details:
      "In this hands-on Figma workshop, participants will explore UI/UX design, mastering key principles and creating user-friendly, visually stunning interfaces with efficient prototyping.",
  },
  {
    title: "calibrate.ai",
    description: "By Jahnavi Majumder",
    image: tensor,
    room: "TBA ",
    date: "TBA",
    time: "TBA",
    location: "TBA ",
    details:
      "Participants will gain practical experience in a hands-on machine learning workshop, equipping them with tools and techniques to solve real-world problems using ML.",
  },
  {
    title: "config.pcb",
    description: "By Anaghhashree P and Hema Harini G",
    image: kit,
    room: "TBA",
    date: "TBA",
    time: "TBA",
    location: "TBA",
    details:
      "Participants will master PCB design in this workshop, learning to create efficient and reliable circuit boards from scratch. They'll gain practical experience with essential design tools and techniques for their electronic projects.",
  },
  {
    title: "web.rtc",
    description: "By Harsh Kumar Sinha",
    image: WebRTC,
    room: "TBA",
    date: "TBA",
    time: "TBA",
    location: "TBA",
    details:
      "This WebRTC workshop will guide participants in building real-time communication apps, with hands-on practice in video, voice, and peer-to-peer connectivity.",
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
    <div className="w-[98.9vw]">
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
                  <span className="bolder">Nation&apos;s brightest minds </span>
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
              {/* <Mainwebsite /> */}

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
