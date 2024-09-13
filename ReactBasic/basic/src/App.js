import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Class from "./components/Class"
import "./App.css";
import Prop from "./components/Prop";
import Contion from "./components/Contion";
import ColorChange from "./components/ColorChange";
import DivColor from "./components/DivColor";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Class/> */}
      <Prop name="irshana">
        <p>
          chappanagthil <b>d/0 ismayil</b> house kodakkalu,chullipara p.o{" "}
        </p>
        <button>clickme</button>
        <div>
          <button>in side div</button>
        </div>
      </Prop>
      <Contion/>
      <ColorChange/>
      <DivColor></DivColor> 
      <Footer name="irshana" />
    </div>
  );
}

export default App;
