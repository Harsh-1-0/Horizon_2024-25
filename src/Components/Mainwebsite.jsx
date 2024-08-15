function Mainwebsite() {
  return (
    <div
      id="main-website"
      className="relative bg-[#B5DDC2] min-h-screen flex justify-center items-center"
    >
        <iframe
          src="https://istevit.in/"
          width="60%"
          height="600px"
          className="border-[4px] w-[400px] md:w-[450px]  lg:w-[1024px] border-white p-4 md:p-10 rounded-lg shadow-lg shadow-white hover:shadow-[#B5DDC2] hover:border-[#B5DDC2] transition-all duration-150"
          title="ISTE VIT Website"
        ></iframe>
    </div>
  );
}

export default Mainwebsite;
