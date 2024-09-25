import React from 'react'
import { useNavigate } from 'react-router-dom'

function Reg() {
    const nav=useNavigate()
    const moveLogin=(e)=>{
        e.preventDefault();
        nav("/login")
    }
  return (
    <div>
      <div>
      <form >
        <label>username</label>
        <input type='text' placeholder='enter usename'></input>
        <label>password</label>
        <input type='password' placeholder='emter password'></input>
        <button type='submit' onClick={moveLogin}>submit</button>
      </form>
    </div>
    </div>
  )
}

export default Reg
