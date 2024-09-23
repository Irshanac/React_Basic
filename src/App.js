import React from "react";
// import LearnContext from "./components/context/LearnContext";
// import BaseComponent from "bootstrap/js/dist/base-component";
//import BasicFile from "./components/Hooks.js/BasicFile";
import Count1 from "./components/Hooks.js/Count1";
const Asd=React.lazy(()=>import('./components/Hooks.js/Counter2'))
function App() {
  return (
    <div >
      {/* //<LearnContext></LearnContext> */}
      <React.Suspense fallback={<div>Loading</div>}>
        <Asd/>
      </React.Suspense>
      <Count1/>
    </div>
  );
}

export default App;
