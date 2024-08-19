/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/no-unknown-property
import React from "react";
import PropTypes  from "prop-types";


const Card = ({room, details,description,time,date,location,title}) => {
  return (
    <div className="w-[98vw] flex justify-center">
      {/*  eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        @media all and (max-width: 980px) {
          .workshops {
            background-color: #b5ddc2;

            height: 91.35px;
            border-top: 1px solid #000000;
            border-bottom: 1px solid black;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .workshops p {
            font-family: ITC Tiffany Std;
            font-size: 66px;
            font-weight: 700;
            line-height: 74.32px;
            text-align: left;
          }

          .card-mine {
            height: 435px;
            width: 610px;
            border: 2px solid #000000;
            border-radius: 35px;
            background-color: #fefbec;
            overflow: hidden;
            position: relative;
          }

          .top {
            height: 185px;
            border-bottom: 1px solid black;
            overflow: hidden;
            display: flex;
          }

          .mid {
            height: 191px;
            border-bottom: 1px solid black;
            border-top: 1px solid black;
            border-collapse: separate;
            overflow: hidden;
            display: flex;
          }

          .bottom {
            height: 60px;
            width: 610px;
            border-top: 1px solid black;
            display: flex;
          }

          .bottom1 {
            height: 60px;
            width: 202px;
          }
          .bottom2 {
            height: 60px;
            width: 202px;
            border-left: 1px solid black;
            border-right: 1px solid black;
          }
          .bottom3 {
            height: 60px;
            width: 202px;
          }

          .circle {
            height: 280.39px;
            width: 280.39px;
            border: 1px solid black;
            border-radius: 50%;
            background-color: #b5ddc2;
            position: relative;
            top: 80.14px;
            left: -130.26px;
          }

          .dusra {
            height: 200.39px;
            width: 200.39px;
            border: 1px solid black;
            background-color: #f2c7ab;
            border-radius: 50%;
            position: relative;
            top: -95.45px;
            left: 65.42px;
            z-index: 3;
          }

          .img-1 {
            position: relative;
            width: 115.97px;
            height: 134.95px;
            top: 27px;
            left: -20px;

            opacity: 0.85px;
          }

          .place {
            position: absolute;
            width: 116px;
            height: 37.16px;
            border: 1px solid black;
            border-radius: 25.58px;
            top: 22px;
            right: 39px;
            z-index: 6;
            background: rgba(254, 251, 236, 1);
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Poppins;
            font-size: 17px;
            font-weight: 300;
            line-height: 30px;
            letter-spacing: 0.025em;
          }

          .circle2 {
            height: 281.39px;
            width: 281.39px;
            border-radius: 50%;
            background-color: #b5ddc2;
            position: relative;
            left: -146.6px;
            top: -117px;
            filter: blur(20px);
            opacity: 30%;
          }

          .circle3 {
            height: 281.39px;
            width: 281.39px;
            border-radius: 50%;
            background-color: #b5ddc2;
            position: relative;
            top: 70px;
            left: 110px;
            filter: blur(20px);
            opacity: 30%;
          }

          .tbox {
            display: flex;
            flex-direction: column;
            margin-left: 37px;
            margin-top: 13px;
            width: 560px;
            position: absolute;
            z-index: 2;
          }

          .heading {
            font-family: Poppins;
            font-size: 35.17px;
            font-weight: 600;
            line-height: 53.26px;
            letter-spacing: 0.025em;
            text-align: left;
          }

          .subhead {
            font-family: Poppins;
            font-size: 23.6px;
            font-weight: 300;
            line-height: 35px;
            letter-spacing: 0.025em;
            text-align: left;
          }

          .para {
            font-family: Poppins;
            font-size: 13px;
            font-weight: 400;
            line-height: 19px;
            letter-spacing: 0.025em;
            text-align: justified;
            margin-top: 5px;
          }

          .bottext {
            height: 60px;
            width: 202px;
            display: flex;
            justify-content: center;
            gap: 12px;
            align-items: center;
            font-family: Poppins;
            font-size: 15px;
            font-weight: 300;
            line-height: 22px;
            letter-spacing: 0.025em;
            text-align: left;
          }

          .bottom1 img {
            width: 18px;
            height: 19px;
          }

          .bottom2 img {
            width: 18px;
            height: 18px;
          }

          .bottom3 img {
            width: 16px;
            height: 21px;
          }

          .carousel-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            z-index: 10;
          }

          .carousel-button.left {
            width: 51px;
            height: 51px;
            left: 25px;
          }

          .carousel-button.right {
            width: 51px;
            height: 51px;
            right: 25px;
          }
        }
        @media all and (max-width: 695px) {
          .workshops {
            background-color: #b5ddc2;
            height: 91.35px;
            border-top: 1px solid #000000;
            border-bottom: 1px solid black;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .workshops p {
            font-family: "ITC Tiffany Std";
            font-size: 57px;
            font-weight: 700;
            line-height: 74.32px;
            text-align: left;
          }

          .card-mine {
            height: 250px;
            width: 375px;
            border: 2px solid #000000;
            border-radius: 18px;
            background-color: #fefbec;
            overflow: hidden;
            position: relative;
          }

          .top {
            height: 106px;
            border-bottom: 1px solid black;
            overflow: hidden;
            display: flex;
          }

          .mid {
            height: 110px;
            border-bottom: 1px solid black;
            border-top: 1px solid black;
            border-collapse: separate;
            overflow: hidden;
            display: flex;
          }

          .bottom {
            height: 34px;
            width: 375px;
            border-top: 1px solid black;
            display: flex;
          }

          .bottom1 {
            height: 34px;
            width: 125px;
          }

          .bottom2 {
            height: 60px;
            width: 125px;
            border-left: 1px solid black;
            border-right: 1px solid black;
          }

          .bottom3 {
            height: 60px;
            width: 125px;
          }

          .circle {
            height: 150.39px;
            width: 150.39px;
            border: 1px solid black;
            border-radius: 50%;
            background-color: #b5ddc2;
            position: relative;
            top: 35px;
            left: -60px;
          }

          .dusra {
            height: 130px;
            width: 130px;
            border: 1px solid black;
            background-color: #f2c7ab;
            border-radius: 50%;
            position: relative;
            top: -65.45px;
            left: 55.42px;
            z-index: 3;
          }

          .img-1 {
            position: relative;
            width: 68.65px;
            height: 80px;
            top: 17px;
            left: 10px;
            opacity: 0.85;
          }

          .place {
            position: absolute;
            width: 80px;
            height: 27.16px;
            border: 1px solid black;
            border-radius: 25.58px;
            top: 18px;
            right: 18px;
            z-index: 6;
            background: rgba(254, 251, 236, 1);
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: "Poppins";
            font-size: 13px;
            font-weight: 300;
            line-height: 30px;
            letter-spacing: 0.025em;
          }

          .circle2 {
            height: 150.39px;
            width: 150.39px;
            border-radius: 50%;
            background-color: #b5ddc2;
            position: relative;
            left: -60px;
            top: -30px;
            filter: blur(20px);
            opacity: 30%;
          }

          .circle3 {
            height: 150.39px;
            width: 150.39px;
            border-radius: 50%;
            background-color: #b5ddc2;
            position: relative;
            top: 30px;
            left: 80px;
            filter: blur(20px);
            opacity: 30%;
          }

          .tbox {
            display: flex;
            flex-direction: column;
            margin-left: 32px;
            margin-top: 8px;
            width: 310px;
            position: absolute;
            z-index: 2;
          }

          .heading {
            font-family: "Poppins";
            font-size: 23.17px;
            font-weight: 600;
            line-height: 20.26px;
            letter-spacing: 0.025em;
            text-align: left;
          }

          .subhead {
            font-family: "Poppins";
            font-size: 14.6px;
            font-weight: 300;
            line-height: 22px;
            letter-spacing: 0.025em;
            text-align: left;
          }

          .para {
            font-family: "Poppins";
            font-size: 10px;
            font-weight: 400;
            line-height: 13px;
            letter-spacing: 0.025em;
            text-align: justified;
            margin-top: 0px;
          }

          .bottext {
            height: 34px;
            width: 125px;
            display: flex;
            justify-content: center;
            gap: 5px;
            align-items: center;
            font-family: "Poppins";
            font-size: 10px;
            font-weight: 300;
            line-height: 22px;
            letter-spacing: 0.025em;
            text-align: left;
          }

          .bottom1 img {
            width: 13px;
            height: 14px;
          }

          .bottom2 img {
            width: 13px;
            height: 13px;
          }

          .bottom3 img {
            width: 13px;
            height: 16px;
          }

          .carousel-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            z-index: 10;
          }

          .carousel-button.left {
            width: 28px;
            height: 28px;
            left: 6px;
          }

          .carousel-button.right {
            width: 28px;
            height: 28px;
            right: 6px;
          }
        }
      `}</style>
      <div className="card-mine h-[590px] w-[825px] border-2 border-black rounded-[48px] bg-[#FEFBEC] overflow-hidden relative">
        <div className="top h-[249px] border-b border-black overflow-hidden flex">
          <div className="circle h-[381.39px] w-[381.39px] border border-black rounded-full bg-[#B5DDC2] relative top-[96.14px] left-[-174.26px]"></div>
          <img
            className="img-1 relative w-[155.97px] h-[182.95px] top-[37px] left-[-36px] opacity-[0.85]"
            src="/Linux_Logo_in_Linux_Libertine_Font 1.png"
            alt="hello"
          />

          <div className="place absolute w-[156px] h-[51.16px] border border-black rounded-[25.58px] top-[37px] right-[44px] z-[20] bg-[#FEFBEC] flex justify-center items-center text-[22px] font-light leading-[30px] tracking-wide">
            {room}
          </div>
          <div className="dusra h-[280.9px] w-[280.9px] border border-black bg-[#F2C7AB] rounded-full relative top-[-140.45px] left-[85.42px] z-10"></div>
        </div>

        <div className="mid h-[259px] border-b border-t border-black overflow-hidden flex">
          <div className="circle2 h-[381.39px] w-[381.39px] rounded-full bg-[#B5DDC2] relative left-[-176.6px] top-[-167px] filter blur-[20px] opacity-30"></div>

          <div className="tbox flex flex-col ml-[37px] mt-[19px] w-[754px] absolute z-[2]">
            <p className="heading text-[48.17px] font-semibold leading-[72.26px] tracking-wide text-left">
              {title}
            </p>
            <p className="subhead text-[32px] font-light leading-[48px] tracking-wide text-left font-poppins">
              {description}
            </p>
            <p className="para text-[18px] font-normal leading-[27px] tracking-wide text-justify font-poppins">
              {details}
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
              <p>{date}</p>
            </div>
          </div>

          <div className="bottom2 h-[81px] w-[275px] border-l border-r border-black">
            <div className="bottext h-[81px] w-[275px] flex justify-center gap-[12px] items-center text-[20px] font-light leading-[30px] tracking-wide text-left font-poppins">
              <img
                src="/carbon_time.png"
                alt=""
                className="w-[25px] h-[25px]"
              />
              <p>{time}</p>
            </div>
          </div>

          <div className="bottom3 h-[81px] w-[275px]">
            <div className="bottext h-[81px] w-[275px] flex justify-center gap-[12px] items-center text-[20px] font-light leading-[30px] tracking-wide text-left font-poppins">
              <img
                src="/system-uicons_location.png"
                alt=""
                className="w-[22.85px] h-[29px]"
              />
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  title:PropTypes.string.isRequired,
  room:PropTypes.string.isRequired,
  date:PropTypes.string.isRequired,
  time:PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details:PropTypes.string.isRequired,
  
};


export default Card;
