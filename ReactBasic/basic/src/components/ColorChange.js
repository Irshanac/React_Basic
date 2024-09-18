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
        height:"150px"
       
    }
    return(
        <div style={bg} onClick={clrChnage}>
            
        </div>
    )
}
export default ColorChange