import React from "react";

function Mainwebsite() {
  return (
    <div
      id="main-website"
      className="relative bg-[#B5DDC2] min-h-screen flex justify-center items-center"
    >
      {/* Iframe Container */}
      <iframe
        src="https://istevit.in/"
        frameBorder="0"
        width="60%"
        height="600px"
        className="border-[4px] border-white p-4 md:p-10 rounded-lg shadow-lg shadow-white hover:shadow-[#27A5EF] hover:border-[#27A5EF] transition-all duration-150"
        title="ISTE VIT Website"
      ></iframe>
    </div>
  );
}

export default Mainwebsite;
