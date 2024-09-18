import React, { useState } from "react";
import File2 from "./File2";
const Files=()=>{
    const [count,setCount]=useState(0)
    const adding=()=>{
        setCount((p)=>p+1)
    }
    const sub=()=>{
        setCount((p)=>(p===0?0:p-1))
    }
   return(
   <div>
  <button onClick={adding}>+</button>
  {count===10?<h1>the count is 10</h1>:""}
  <button onClick={sub}>-</button>
     <File2 value={count}/>
   </div>


   ) 
}
export default Files