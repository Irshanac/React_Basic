import React, { useState } from "react";
import Child from "./Child";
const Parent=()=>{
    const [count,setCount]=useState(0)
    const [name,setName]=useState("irshana")
    console.log("parent rerender");
    
return(
    <>
        <h1>it is parent</h1>
        <button onClick={()=>setCount(count+1)}>count={count}</button>
        <button onClick={()=>setName("irshana ismail")}>change name</button>
        <Child name={name}/>
    </>
)
}
export default Parent