import { useState } from "react";
import star from "../assets/star.png";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "What is Horizon?",
      answer: "Horizon, hosted annually by ISTE-VIT, is a national technical summit featuring the flagship hackathon Technica, along with curated events and workshops in Web Development, Machine Learning, IoT, and Competitive Coding.",
    },
    {
      question: "What is Technica?",
      answer:
        "Technica is a 48 hour long hackathon that concludes Horizon. More than just a coding competition, Technica fosters collaboration, converging minds to address real-world challenges.",
    },
    {
      question: "Do i need to pay to attend Horizon Workshops?",
      answer:
        "⁠Horizon Workshops are free of cost.",
    },
    {
      question: "Where should I register?",
      answer:
        "Register for them on VTOP -> SW Events -> Event Registration.",
    },
    {
      question: "Are these workshops beginner friendly? ",
      answer:
        "The workshops are extremely beginner friendly and will start from the basics.",
    },
  ];
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-beige flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute w-full top-0 left-0 flex items-center justify-center overflow-hidden whitespace-nowrap z-0 place-content-center h-screen ">
        <div className="relative gap-5 bg-customColor flex items-center px-2 py-1 sm:px-4 sm:py-2 border-t-2 border-b-2 border-black">
          <div className="text-black text-9xl font-main flex items-center animate-marquee">
            <img src={star} className="w-[70x] h-[70px] mx-10"></img>
            <span>HORIZON&apos;24</span>
            <img src={star} className="w-[70x] h-[70px] mx-10"></img>
            <span>HORIZON&apos;24</span>
            <img src={star} className="w-[70x] h-[70px] mx-10"></img>
            <span>HORIZON&apos;24</span>
            <img src={star} className="w-[70x] h-[70px] mx-10"></img>
            <span>HORIZON&apos;24</span>
            <img src={star} className="w-[70x] h-[70px] mx-10"></img>
            <span>HORIZON&apos;24</span>
            <img src={star} className="w-[70x] h-[70px] mx-10"></img>
          </div>
        </div>
      </div>
      <div className="relative z-10 w-[350px] md:w-[650px] lg:w-[800px] bg-beige rounded-[30px] shadow-lg border-2 border-black">
        <h2 className="bg-customGreen w-full text-4xl md:text-5xl font-poppins font-bold rounded-t-[30px] py-6 px-8 border-b border-black text-black">
          FAQs{" "}
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-4 font-poppins  ${
              index !== faqs.length - 1 ? "border-b border-black" : ""
            }`}
          >
            <button
              onClick={() => handleToggle(index)}
              className=" w-full text-left flex bg-beige justify-between items-center focus:outline-none"
            >
              <span className="text-sm  md:text-base lg:text-lg text-black">
                {faq.question}
              </span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-700 ease-in-out  ${
                  activeIndex === index ? "rotate-90" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="text-slate-700 mt-2 text-sm md:text-base lg:text-lg px-5 ">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
