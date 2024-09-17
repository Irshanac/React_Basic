import React, { useRef } from 'react'

function Colorch() {
    //const [color,SetColor]=useState("blue")
    const c=useRef(null)
    const s={
       backgroundColor:"pink",
        width:"100px",
        height:"200px"
    }
    const change=()=>{
       // SetColor((P)=>(P==="pink"?"blue":"pink"))
       if(c.current)
        {
            c.current.style.backgroundColor=c.current.style.backgroundColor==="pink"?"blue":"pink"
        }
    }
    
  return (
    <div>
      <div ref={c} style={s} onClick={change}>
      </div>
    </div>
  )
}

export default Colorch
