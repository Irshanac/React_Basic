import React, { useContext } from 'react'
import {NoteCollor} from './Create'
import { useNavigate } from 'react-router-dom'
const ShowPage=()=>{
    const navigate=useNavigate()
    const {div,deletediv}=useContext(NoteCollor)
    console.log(div);
    const move=()=>{
        navigate("/create")
    }
    const del=(index)=>
    {
        if(deletediv(index))
            navigate("/")
    }
    const edit=(index)=>{
            navigate(`/edit/${index}`)
    }
    return(
        <div>
            {div.length===0?(
                <div>
                    <h1>it is empty</h1>
                    <button onClick={move}>create new</button>
                </div>
            ):(<div>
                <button onClick={move}>create new</button>
                {div.map((data)=>(
                <div style={{backgroundColor:data.colors}} key={data.id}>
                    <button onClick={()=>(edit(data.id))}>Edit</button>
                    <button onClick={()=>(del(data.id))}>Delete</button>
                    <h1 style={{backgroundColor:data.colors}}>{data.heading}</h1>
                    <p>{data.para}</p>
                </div>
            ))}
            </div>)}
            {/* {div.map((data)=>(
                <div style={s} key={data.id}>
                    <button>create new</button>
                    <button>Delete</button>
                    <h1>{data.heading}</h1>
                    <p>{data.para}</p>
                </div>
            ))} */}
        </div>
    )
}
export default ShowPage