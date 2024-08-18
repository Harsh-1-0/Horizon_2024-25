import React from "react";

function MainWebsite() {
  return (
    <div
      id="main-website"
      className="relative border-b-2 border-t-2 border-black bg-[#B5DDC2] min-h-screen flex justify-center items-center p-4"
      style={{ height: '100vh', width: '100vw' }}
    >
      {/* Iframe Container */}
      <iframe
        src="https://istevit.in/"
        className="w-full h-full p-4 md:p-10 rounded-lg shadow-lg transition-all duration-150 hover:border-[4px] hover:border-[#b5ddc2] hover:shadow-white"
        title="ISTE VIT Website"
        style={{ aspectRatio: '16 / 9', width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
}

export default MainWebsite;