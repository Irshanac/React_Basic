import React, { useState ,useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {NoteCollor} from './Create'
const Edit=()=>{
    const {id}=useParams()
    console.log(id+"id");
    const navigate=useNavigate()
    const {div,editdiv}=useContext(NoteCollor)
    const data = div.find((p) => p.id ===Number(id));
    const [newhead,setNewhead]=useState(data.heading)
    const [newbody,setNewbody]=useState(data.para)
    const [color,setColor]=useState(data.colors)
    const handleSubmit=(e)=>{
        e.preventDefault();
        editdiv(id,newhead,newbody,color);
        navigate('/');
    }
    const newheading=(e)=>{
        setNewhead(e.target.value)
    }
    const changebody=(e)=>{
        setNewbody(e.target.value)
    }
    const changeColor=(e)=>{
        setColor(e.target.value)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
            <label>heading</label>
            <input value={newhead} type='text' onChange={newheading}></input>
            <br/>
            <label>Paragph</label>
            <textarea rows={10} cols={20} value={newbody} type='text' onChange={changebody}></textarea>
            <br/>
            <label>Color</label>
            <input type='color' value={color} onChange={changeColor}/>
            <br/>
            <button type='submit'>submit</button>
            </form>
        </>
    )
}
export default Edit