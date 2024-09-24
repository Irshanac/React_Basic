import React from 'react'
import UpdateComp from './Hocfun'
function Heading({name,count,increment}) {
  return (
    <div>
      <h2 onMouseEnter={increment}>Heading hover{count}</h2>
      <h2>{name}</h2>
    </div>
  )
}

export default UpdateComp(Heading)
