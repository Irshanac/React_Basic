// import React, { useState } from 'react'
// const DivColor=()=>{
//     const [color,setColor]=useState("pink")
//     const [index,setIndex]=useState(1)
//     // const divs=(in)=>{
//     //     width:"100px",
//     //     height:"200px",
//     //     backgroundColor:index === clickedIndex ? color : (color === "pink" ? "red" : "pink"),,
//     //     margin:"5px"

//     // }
//     const divs = (index) => ({
//         width: "100px",
//         height: "200px",
//         backgroundColor: index === setIndex ? color : (color === "pink" ? "red" : "pink"),
//         margin: "5px"
//       })
//     const change=(index)=>{
//         setColor((p)=>(p==="pink"?"red":"pink"))
//         setIndex(index)

//     }
//     const ps={
//         display:"flex",
        
//     }
// return(
//     <div style={ps}>
//         <div style={divs(1)} onClick={change(1)}> div 1
//         </div>
//         <div style={divs(2)} onClick={change(2)}> div 2
//         </div>
//         <div style={divs(3)} onClick={change(3)}> div 3
//         </div>
//         <div style={divs(4)} onClick={change(4)}> div 4
//         </div>
//     </div>
// )
// }
// export default DivColor


import React, { useState } from 'react';

const DivColor = () => {
  const [color, setColor] = useState("pink");
  const [clickedIndex, setClickedIndex] = useState(null);

  const divStyle = (index) => ({
    width: "100px",
    height: "200px",
    backgroundColor: index === clickedIndex ? color : (color === "pink" ? "red" : "pink"),
    margin: "5px"
  });

  const change = (index) => {
    setColor((prevColor) => (prevColor === "pink" ? "red" : "pink"));
    setClickedIndex(index);
  };

  const containerStyle = {
    display: "flex",
  };

  return (
    <div style={containerStyle}>
      <div style={divStyle(1)} onClick={() => change(1)}>div 1</div>
      <div style={divStyle(2)} onClick={() => change(2)}>div 2</div>
      <div style={divStyle(3)} onClick={() => change(3)}>div 3</div>
      <div style={divStyle(4)} onClick={() => change(4)}>div 4</div>
    </div>
  );
};

export default DivColor;
