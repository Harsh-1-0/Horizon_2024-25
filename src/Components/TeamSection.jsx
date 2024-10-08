import akm from "../images/akm.png";
import ali from "../images/ali.png";
import anaghha from "../images/anaghha.png";
import anant from "../images/anant.png";
import aradhye from "../images/aradhye.png";
import faculty from "../images/faculty.png";
import facultys from "../images/facultys.png";
import harsh from "../images/harsh.png";
import hema from "../images/hema.png";
import jahnavi from "../images/jahnavi.png";
import keshav from "../images/keshav.png";
import khushiboard from "../images/khushiboard.png";
import kk from "../images/kk.png";
import sameer from "../images/sameer.png";
import tanisha from "../images/tanisha.png";
import urza from "../images/urza.png";
import ved from "../images/ved.png";

const Teamsection = () => {
  const facultyCoordinators = [
    {
      name: "DR. S SASIKUMAR",
      role: "DIRECTOR OF POST-GRADUATE ADMISSIONS",
      image: facultys,
      size: { height: "300px", width: "350px" },
    },
    {
      name: "DR. AMIT B MAHINDRAKAR",
      role: "EX-DIRECTOR OF STUDENT WELFARE",
      image: faculty,
      size: { height: "300px", width: "300px" },
    },
  ];

  const organizers1 = [
    {
      name: "ANANT AGRAWAL",
      role: "CHAIRPERSON",
      image: anant,
      size: { height: "250px", width: "auto" },
    },
    {
      name: "VED KULKARNI",
      role: "VICE-CHAIRPERSON",
      image: ved,
      size: { height: "250px", width: "auto" },
    },
    {
      name: "JAHNAVI MAJUMDER",
      role: "SECRETARY",
      image: jahnavi,
      size: { height: "250px", width: "auto" },
    },
  ];

  const organizers2 = [
    {
      name: "KESHAV SHARMA",
      role: "CO-SECRETARY",
      image: keshav,
      size: { height: "250px", width: "auto" },
    },
    {
      name: "KHUSHI SIKARIA",
      role: "EVENTS HEAD",
      image: khushiboard,
      size: { height: "250px", width: "auto" },
    },
    {
      name: "TANISHA PAHWA",
      role: "LOGISTICS HEAD",
      image: tanisha,
      size: { height: "250px", width: "auto" },
    },
    {
      name: "SAMEER PALKAR",
      role: "PUBLICITY HEAD",
      image: sameer,
      size: { height: "250px", width: "auto" },
    },
    {
      name: "URZA RAI",
      role: "OPERATIONS HEAD",
      image: urza,
      size: { height: "250px", width: "auto" },
    },
    {
      name: "GAGAN N BANGARAGIRI",
      role: "DESIGN HEAD",
      image: kk,
      size: { height: "250px", width: "auto" },
    },
    {
      name: "ARADHYE SWARUP",
      role: "MOTION GRAPHICS HEAD",
      image: aradhye,
      size: { height: "250px", width: "auto" },
    },
    {
      name: "ALI RASHID",
      role: "TECHNICAL HEAD",
      image: ali,
      size: { height: "250px", width: "auto" },
    },
    {
      name: "ASHWANI KUMAR MOUDGIL",
      role: "PROJECTS HEAD",
      image: akm,
      size: { height: "250px", width: "auto" },
    },
    {
      name: "HARSH KUMAR SINHA",
      role: "INNOVATIONS HEAD",
      image: harsh,
      size: { height: "250px", width: "auto" },
    },
    {
      name: "ANAGHHASHREE PERUMAL",
      role: "R&D HEAD",
      image: anaghha,
      size: { height: "250px", width: "auto" },
    },
    {
      name: "HEMA HARINI G",
      role: "IOT HEAD",
      image: hema,
      size: { height: "250px", width: "auto" },
    },
  ];

  const defaultImageStyle = { height: "271px", width: "219px" };

  return (
    <div
      className="text-center  text-black py-10"
      style={{ backgroundColor: "#FEFBEC" }}
    >
      <div
        className=""
        style={{
          backgroundColor: "#b5ddc2",
          padding: "20px",
          marginBottom: "40px",
          textAlign: "center",
          borderTop: "2px solid black",
          borderBottom: "2px solid black",
          height: "162px", 
        }}
      >
        <h2 className="text-[120px] md:text-[100px] max-md:text-5xl max-md:leading-tight font-bold p-0 font-main max-md:flex max-md:justify-center max-md:items-center max-md:h-full">
          OUR TEAM
        </h2>
      </div>

      <div className="mb-10 ">
        <h3 className="text-6xl max-md:text-2xl font-semibold mb-6 font-main">
          FACULTY COORDINATORS
        </h3>
        <div className="flex max-md:flex-col justify-center gap-8">
          {facultyCoordinators.map((organizer, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center "
            >
              <div className="text-center">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  style={organizer.size} // Apply custom size if defined
                />
              </div>
              <h4 className="text-xl font-semibold">{organizer.name}</h4>
              <p className="text-xl max-md:text-lg text-gray-600 font-extralight">
                {organizer.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
      <h3 className="text-6xl max-md:text-2xl font-semibold mb-6 font-main">
          ORGANIZERS
        </h3>
        <div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 justify-items-center">
            {organizers1.map((organizer, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center"
              >
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="mb-2"
                  style={organizer.size || defaultImageStyle} // Apply custom size if defined
                />
                <h4 className="text-xl font-semibold">{organizer.name}</h4>
                <p className="text-xl text-gray-600 font-extralight">
                  {organizer.role}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-6 justify-items-center"
            style={{ marginBottom: "150px" }} // Added margin to increase space
            >
            {organizers2.map((organizer, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center "
              >
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="mb-2"
                  style={organizer.size || defaultImageStyle} 
                />
                <h4 className="text-xl font-semibold">{organizer.name}</h4>
                <p className="text-xl text-gray-600 font-extralight">
                  {organizer.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teamsection;
