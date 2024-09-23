import React, { useState } from "react";
import { useText } from "./Reuse";
const BasicFile2=()=>{
    const [count,setCount]=useState(0)
    useText(count)

    return(
        <>
        <h1>In child File</h1>
        <h1>{count}</h1>
        <button  onClick={()=>setCount(count+1)}>+</button>
      
        </>
    )
}
export default BasicFile2