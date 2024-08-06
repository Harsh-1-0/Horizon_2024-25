import Slogan from "./components/slogan"
import Technica from "./components/technica" 
import Navbar from "./component/Navbar"

function App() {
  return (
    <>
    <div >
    <Navbar />
    <div>
    <Technica><div>One of the Biggest Technical Fests in India <span className="bolder">is back in 2024</span></div>
    {<div className="mt-2 sm:mt-5">Sed vestibulum diam auctor, tincidunt <span className="bolder">mi nec</span></div>}
    </Technica>
    <Slogan>INNOVATE | IDEATE | INSPIRE</Slogan>
    </div>
    </div>
    
    </>
  );
}

export default App;
