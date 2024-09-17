import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Class from "./components/Class"
import "./App.css";
// import Prop from "./components/Prop";
// import KeyList from "./components/KeyList";
// import Even from "./components/Even";
// import Activity2 from "./components/Activity2";
// import Contion from "./components/Contion";
// import ColorChange from "./components/ColorChange";
// import DivColor from "./components/DivColor";
// import Text from "./components/Text"
//import InputFocus from "./components/ref/InputFocus";
// import Prev from "./components/ref/Prev";
 import Inter from './components/ref/Inter'
// import TOdo from "./components/TOdo";
// import Formsv from "./components/Formsv";
// import Colorch from "./components/ref/Colorch";
import DivBackgroundToggle from "./components/ref/DivColor";


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Colorch/>
      <TOdo/> */}
      {/* <Prev/>*/}
      <DivBackgroundToggle/>
      <Inter/> 
      {/* <Formsv/> */}
     {/* // <InputFocus/> */}
      {/* <Even/>
      <Activity2/> */}
      {/* <Class/>
      <Prop name="irshana">
        <p>
          chappanagthil <b>d/0 ismayil</b> house kodakkalu,chullipara p.o{" "}
        </p>
        <button>clickme</button>
        <div>
          <button>in side div</button>
        </div>
      </Prop>
      <KeyList/> */}
      {/* <Contion/>
      <ColorChange/>
      <DivColor></DivColor> 
      <Text/> */}
      <Footer name="irshana" />
    </div>
  );
}

export default App;
