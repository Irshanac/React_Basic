import React, { useState } from "react";
import {useText} from './Reuse'
import BasicFile2 from "./BasicFile2";
const BasicFile=()=>{
    const [count,setCount]=useState(0)
    useText(count)

    return(
        <>
        <h1>In parent Component</h1>
        <h1>{count}</h1>
        <button  onClick={()=>setCount(count+1)}>+</button>
        <BasicFile2/>
        </>
    )
}
export default BasicFile