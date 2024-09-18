import React, { useEffect, useRef, useState } from "react";
const InputFocus=()=>{
    const [v,setV]=useState("")
    const inp=useRef()
    useEffect(()=>{
        inp.current.focus()
        //inputRef.current.focus();
    },[])
    const change=(e)=>{
        setV(e.target.value)
    }
    return(
        <>
          <h1>input focusing</h1>
          <input ref={inp} onChange={change} placeholder="enter input"></input>
          <textarea value={v}></textarea>
        </>
      
    )
}
export default InputFocus