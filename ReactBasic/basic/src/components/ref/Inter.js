import React, { useEffect, useState ,useRef} from 'react'
const Innter=()=>{
  const [count,SetCount]=useState(0)
  const [st,setSt]=useState(true)
  const vel=useRef(null)
  useEffect(()=>{
    if(st)
    {
      vel.current=setInterval(()=>{
      SetCount((p)=>p+1)
    },1000)
    }else{
      return ()=> {clearInterval(vel.current)
       
      }}
    
   
    return ()=> {clearInterval(vel.current)}
  },[st])
  return(
    <>
      <h2>{count}</h2>
      {st? <button onClick={()=>setSt(!st)}>stop the watch</button>:<button onClick={()=>setSt(!st)}>Restart the watch</button>}
      
    </>
    
  )
}
export default Innter