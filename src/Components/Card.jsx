/* eslint-disable no-unused-vars */
import React from "react";
import "./cards.css"
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

const Card = () => {
  return (
    <div className="w-[98vw] flex justify-center">
      <div className="card-mine h-[590px] w-[825px] border-2 border-black rounded-[48px] bg-[#FEFBEC] overflow-hidden relative">
        <div className="top h-[249px] border-b border-black overflow-hidden flex">
          <div className="circle h-[381.39px] w-[381.39px] border border-black rounded-full bg-[#B5DDC2] relative top-[96.14px] left-[-174.26px]"></div>
          <img
            className="img-1 relative w-[155.97px] h-[182.95px] top-[37px] left-[-36px] opacity-[0.85]"
            src="/Linux_Logo_in_Linux_Libertine_Font 1.png"
            alt="hello"
          />

          <div className="place absolute w-[156px] h-[51.16px] border border-black rounded-[25.58px] top-[37px] right-[44px] z-[20] bg-[#FEFBEC] flex justify-center items-center text-[22px] font-light leading-[30px] tracking-wide">
            room
          </div>
          <div className="dusra h-[280.9px] w-[280.9px] border border-black bg-[#F2C7AB] rounded-full relative top-[-140.45px] left-[85.42px] z-10"></div>
        </div>

        <div className="mid h-[259px] border-b border-t border-black overflow-hidden flex">
          <div className="circle2 h-[381.39px] w-[381.39px] rounded-full bg-[#B5DDC2] relative left-[-176.6px] top-[-167px] filter blur-[20px] opacity-30"></div>

          <div className="tbox flex flex-col ml-[37px] mt-[19px] w-[754px] absolute z-[2]">
            <p className="heading text-[48.17px] font-semibold leading-[72.26px] tracking-wide text-left">
              title
            </p>
            <p className="subhead text-[32px] font-light leading-[48px] tracking-wide text-left font-poppins">
              description
            </p>
            <p className="para text-[18px] font-normal leading-[27px] tracking-wide text-justify font-poppins">
              Lorem ipsum dolor sit amet consec tetur adipisim labo riosam accus
              amus esse neque quas est ipsum doloremque quo tempo ribus maiores
              sunt minima quidem? Impedit, repudi?
            </p>
          </div>

          <div className="circle3 h-[381.39px] w-[381.39px] rounded-full bg-[#B5DDC2] relative top-[110px] left-[210px] filter blur-[20px] opacity-30"></div>
        </div>

        <div className="bottom h-[81px] border-t border-black flex">
          <div className="bottom1 h-[81px] w-[275px]">
            <div className="bottext h-[81px] w-[275px] flex justify-center gap-[12px] items-center text-[20px] font-light leading-[30px] tracking-wide text-left font-poppins">
              <img
                src="/formkit_date.png"
                alt=""
                className="w-[25.1px] h-[26px]"
              />
              <p>date</p>
            </div>
          </div>

          <div className="bottom2 h-[81px] w-[275px] border-l border-r border-black">
            <div className="bottext h-[81px] w-[275px] flex justify-center gap-[12px] items-center text-[20px] font-light leading-[30px] tracking-wide text-left font-poppins">
              <img
                src="/carbon_time.png"
                alt=""
                className="w-[25px] h-[25px]"
              />
              <p>time</p>
            </div>
          </div>

          <div className="bottom3 h-[81px] w-[275px]">
            <div className="bottext h-[81px] w-[275px] flex justify-center gap-[12px] items-center text-[20px] font-light leading-[30px] tracking-wide text-left font-poppins">
              <img
                src="/system-uicons_location.png"
                alt=""
                className="w-[22.85px] h-[29px]"
              />
              <p>location</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
