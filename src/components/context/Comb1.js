import React, { useContext } from 'react'
import Comb2 from './Comb2'
import { MyBContect } from './Sample'
function Comb1() {
  const value=useContext(MyBContect)
  return (
    <div>
      <h1>"it is a first part"</h1>
      <Comb2/>
    </div>
  )
}

export default Comb1
