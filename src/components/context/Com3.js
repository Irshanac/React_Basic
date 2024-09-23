import React, { useContext } from 'react'
import {MyContext,MyNewContext} from './LearnContext'
function Com3() {
    const val=useContext(MyContext)
    const v=useContext(MyNewContext)
  return (
    <div>
     {val && <h1>component3 </h1>}
     {v ? <h1>it is good</h1>:<h2>iuytrertyu xcvbn sdfg ertyu</h2>}
    </div>
  )
}

export default Com3
