import React, { useEffect, useRef, useState } from 'react'
const Prev=()=>{
    const [count,setCount]=useState(0)
     const privous=useRef()
   
    useEffect(()=>{
        privous.current=count
    },[count])
    return(
        <>
            <h1>counter:{count}</h1>
            <h1>privious:{privous.current}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
        </>
    )
}
export default Prev