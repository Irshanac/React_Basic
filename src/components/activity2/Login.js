import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const nav=useNavigate()
    const moveHome=(e)=>{
        e.preventDefault();
        nav("/home")
    }
  return (
    <div>
      <form >
        <label>username</label>
        <input type='text' placeholder='enter usename'></input>
        <label>password</label>
        <input type='password' placeholder='emter password'></input>
        <button type='submit' onClick={moveHome}>submit</button>
      </form>
    </div>
  )
}

export default Login
