import React, { useState } from "react";
const Even=()=>{
    const [copy,setCopy]=useState("")
  const [move,setMove]=useState("")
    const change=()=>{
        console.log("hi"); 
    }
    const copying=(e)=>{
        setCopy(e.target.value)
    }
    const moving=()=>{
        setMove(copy)
    }
 
    return(
        <div>
            <button onClick={()=>alert("hi")}>click</button>
            <button onClick={change}>click ne show console</button>
            <input type="text" onChange={copying}></input>
            <input value={copy} onClick={moving}></input>
            <textarea value={move}></textarea>
        </div>
    )
}
export default Even