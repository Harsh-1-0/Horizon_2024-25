import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import cut from "./cut.png";

function Footer() {
  const handleScrollToMainWebsite = () => {
    const mainWebsiteElement = document.getElementById("main-website");
    if (mainWebsiteElement) {
      mainWebsiteElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="font-poppins font-[400] w-full md:pt-8 pt-4 px-4 bg-[#B5DDC2] text-black border-t-2 border-black flex flex-col">
      {/* For small screens */}
      <div className="block md:hidden relative">
        <div className="text-sm mb-4">
          <div>VIT University</div>
          <div>Vellore, Tamil Nadu</div>
          <div>India - 632014</div>
        </div>
        <div className="underline mb-2 text-sm">
          <a href="mailto:iste@vit.ac.in">iste@vit.ac.in</a>
        </div>
        <div className="mb-16 text-sm">+91 83289 26213</div>

        <div className="flex justify-between items-center mb-8">
      <span
        className="underline cursor-pointer text-sm"
        onClick={handleScrollToMainWebsite}
      >
        Visit ISTE main website
      </span>
      <div className="flex items-center">
        <span className="text-sm">Made with</span>
        <FaHeart className="text-[#e09088] mx-2 text-sm" />
        <span className="text-sm">by ISTE</span>
      </div>
    </div>

    <div className="absolute top-0 right-0 mt-4 mr-4">
      <div className="flex space-x-4">
        <a
          href="https://x.com/iste_vitvellore"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="text-xl  text-black" />
        </a>
        <a
          href="https://github.com/ISTE-VIT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub className="text-xl  text-black" />
        </a>
        <a
          href="https://www.youtube.com/@ISTEVITVellore"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="text-xl  text-black" />
        </a>
        <a
          href="https://www.linkedin.com/company/indian-society-for-technical-education/mycompany/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-xl  text-black" />
        </a>
        <a
          href="https://www.instagram.com/iste_vit_vellore/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram className="text-xl  text-black" />
        </a>
      </div>
    </div>

    <div className="w-full h-0.5 bg-black mt-8"></div>
  </div>
  <div className="hidden md:flex flex-col w-full px-8">
    <div className="flex flex-col md:flex-row justify-between">
      <div className="text-xl flex-1 mb-4">
        <div className="mb-4">
          <div>VIT University</div>
          <div>Vellore, Tamil Nadu</div>
          <div>India - 632014</div>
        </div>
        <div className="underline mb-2">
          <a href="mailto:iste@vit.ac.in">iste@vit.ac.in</a>
        </div>
        <div className="mb-16">+91 83289 26213</div>
      </div>
      <div className="flex flex-col items-end flex-1 mt-24">
        <div className="flex mb-4">
          <a
            href="https://x.com/iste_vitvellore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="mr-4 text-2xl text-black " />
          </a>
          <a
            href="https://github.com/ISTE-VIT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub className="mr-4 text-2xl text-black" />
          </a>
          <a
            href="https://www.youtube.com/@ISTEVITVellore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="mr-4 text-2xl text-black" />
          </a>
          <a
            href="https://www.linkedin.com/company/indian-society-for-technical-education/mycompany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="mr-4 text-2xl text-black" />
          </a>
          <a
            href="https://www.instagram.com/iste_vit_vellore/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="text-2xl text-black" />
          </a>
        </div>
      </div>
    </div>
    <div className="flex flex-col w-full mt-4">
      <div className="mb-4">
        <span
          className="underline cursor-pointer text-xl"
          onClick={handleScrollToMainWebsite}
        >
          Visit ISTE main website
        </span>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-wrap text-xl">
          <span>Projects &nbsp; Events &nbsp; Webinars &nbsp; Team</span>
        </div>
        <div className="flex items-center text-xl">
          <span>Made with</span>
          <FaHeart className="text-[#e09088] mx-2" />
          <span>by ISTE</span>
        </div>
      </div>
    </div>
    <div className="w-full h-0.5 bg-black mt-4"></div>
  </div>

  {/* Image Section */}
  <div className="relative w-full flex justify-center bg-[#B5DDC2] mt-3">
    <img
      src={cut}
      alt="ISTE Logo"
      className="w-full h-auto object-cover lg:object-contain"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-black h-px"></div>
  </div>
</footer>
  );
}

export default Footer;