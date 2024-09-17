import React, { useState } from 'react';

const DivBackgroundToggle = () => {
 const [active,setActive]=useState(null)
 const clicking=(index)=>{
    setActive(index)
 }
 const back=(index)=>{
    return active===index?"pink":"blue"
 }
  return (
    <div>
        <div onClick={()=>clicking(1)} style={{color:"green",backgroundColor:back(1),width:"100px",height:"200px",margin:"5px"}}></div>
        <div onClick={()=>clicking(2)} style={{color:"green",backgroundColor:back(2),width:"100px",height:"200px",margin:"5px"}}></div>
        <div onClick={()=>clicking(3)} style={{color:"green",backgroundColor:back(3),width:"100px",height:"200px",margin:"5px"}}></div>
    </div>
  )
};

export default DivBackgroundToggle;
