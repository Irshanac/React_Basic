import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Class from "./components/Class"
import "./App.css";
import Prop from "./components/Prop";
import KeyList from "./components/KeyList";
// import Contion from "./components/Contion";
// import ColorChange from "./components/ColorChange";
// import DivColor from "./components/DivColor";
// import Text from "./components/Text"

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
      <KeyList/>
      {/* <Contion/>
      <ColorChange/>
      <DivColor></DivColor> 
      <Text/> */}
      <Footer name="irshana" />
    </div>
  );
}

export default App;
