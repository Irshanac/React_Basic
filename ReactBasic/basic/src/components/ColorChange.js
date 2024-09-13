import React,{useState} from 'react'
const ColorChange=()=>{
    const[bgColor,setbgColor]=useState("yellow")
    const clrChnage=()=>{
        setbgColor((p)=>(p==="yellow"?"green":"yellow"))
    }
    const bg={
        backgroundColor:bgColor,
        padding:"10px",
        margin:"20px",
       
    }
    return(
        <div style={bg}>
            <button onClick={clrChnage}>change bg colour</button>
        </div>
    )
}
export default ColorChange