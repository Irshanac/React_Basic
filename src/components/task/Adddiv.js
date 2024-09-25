import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {NoteCollor} from './Create' 
const Adddiv=()=>
{
    const {adddiv}=useContext(NoteCollor)
    const navigate = useNavigate();
    const [head,setHead]=useState('')
    const [para,setPara]=useState("")
    const [color,setColor]=useState('')
    const heading=(e)=>{
        setHead(e.target.value)
    } 
    const paragraph=(e)=>{
        setPara(e.target.value)
    }
    const colorChnage=(e)=>{
        setColor(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        adddiv(head,para,color);
        navigate('/');
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>Heading</label>
            <input type="text" onChange={heading} value={head}></input>
            <br></br>
            <label>Para</label>
            <textarea rows={10} cols={20} onChange={paragraph} value={para}></textarea>
            <br></br>
            <label>enter color</label>
            <input type="color" onChange={colorChnage} value={color}></input>
            <br></br>
            <button type="submit"> submit</button>
            </form>
        </div>
    )
}
export default Adddiv