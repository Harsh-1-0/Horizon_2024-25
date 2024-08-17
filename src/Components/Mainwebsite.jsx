import React from "react";

function MainWebsite() {
  return (
    <div
      id="main-website"
      className="relative bg-[#B5DDC2] min-h-screen flex justify-center items-center"
    >
      {/* Iframe Container */}
      <iframe
        src="https://istevit.in/"
        width="60%"
        height="600px"
        className="border-[4px] w-[350px] md:w-[650px] lg:w-[800px] border-transparent p-4 md:p-10 rounded-lg shadow-lg hover:shadow-white hover:border-[#b5ddc2]  transition-all duration-150"
        title="ISTE VIT Website"
      ></iframe>
    </div>
  );
}

export default MainWebsite;
