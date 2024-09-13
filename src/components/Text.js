import React, { useState } from 'react'
const Text=()=>{
    const [txets,setText]=useState("")
    const textChnage=()=>{
        setText(e.textarea.value)
    }
    return(
        <div>
            <input type='text' onChange={textChnage}></input>
            <textarea value={txets}></textarea>
        </div>
    )
}
export default Text