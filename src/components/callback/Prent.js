import React, { useCallback, useState } from 'react'
import Title from './Title'

function Prent() {
    const [value,setValue]=useState(0)
    const[text,setText]=useState("")
    const increment=useCallback(()=>{
      setValue((p)=>p+1)
      console.log("inside the value increment");
      
  },[]
    )
    const changeValue=(e)=>{
        setText(e.target.value)
        console.log("inside the text change");
        
    }
  return (
    <div>
        <h1>count:{value}</h1>
        <button onClick={increment}>increment </button>
        <input type='text' onChange={changeValue} value={text}></input>
        <Title change={increment}/>
    </div>
  )
}

export default Prent
