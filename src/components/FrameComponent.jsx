import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <>
      <style>
        {`
          @media (min-width: 1024px) {
            .laptop-size {
              width: 849px;
              height: 664px;
            }
          }
        `}
      </style>
      <div
        className={`fixed inset-0 flex items-center justify-center ${className}`}
      >
        <div
          className={`[backdrop-filter:blur(50px)] rounded-[48px] bg-[rgba(254,251,236,0.8)] border-[#1e1e1e] border-[2px] border-solid box-border w-[85.3vw] laptop-size overflow-hidden flex flex-col items-start justify-start py-[64px] px-[62px] gap-[24px] max-w-full z-[1] text-center text-[60px] text-[#1e1e1e] font-['ITC_Tiffany_Std'] hover:bg-[#F2C6AB]`}
        >
          <div className="self-stretch flex flex-row items-start justify-start py-[0px] px-[16px] lg:pl-[8px] lg:pr-[10px] box-border max-w-full">
            <h2 className="lg:m-[0px] lg:h-[7.2vh] w-[22.6vw] flex-1 relative text-inherit tracking-[0.03em] uppercase font-normal font-[inherit] flex items-center justify-center max-w-full mq450:text-[36px] mq767:text-[48px]">
              ABOUT US
            </h2>
          </div>
          <div className="self-stretch h-[70.4vh] lg:h-[44vh] relative text-[32px] tracking-[-0.01em] font-['Open_Sans'] text-justify flex items-center mq450:text-[19px] mq767:text-[26px]">
            The Indian Society for Technical Education is a non-profit technical
            student chapter that plays a pivotal role in organizing a diverse
            range of technical events and fostering a strong technical community.
            Through engaging initiatives such as technical workshops, Hackathons,
            and Code-a-thons, we aim to uncover and nurture the hidden talents in
            students, providing them with the platform to excel and make
            meaningful contributions to the technical landscape.
          </div>
        </div>
      </div>
    </>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
