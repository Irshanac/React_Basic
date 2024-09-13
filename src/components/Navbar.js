import React, { useState } from "react";
const Navbar=()=>{
const [value,setValue]=useState(true)
const changeV=()=>{
    setValue((p)=>(!p))
}
    return(
       <div>
         {value ? 
         (<div>
             <h1>it is good</h1>
              <p>it your luck</p> 
          </div>):
          (<div>
            <h1>it is bad</h1>
            <h2>take your next time</h2>
          </div>) }
        <button onClick={changeV}>click change</button>
       </div>
      
    )
  
}
export default Navbar