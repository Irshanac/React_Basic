import React, { useState } from 'react'
import UpdateComp from './Hocfun'
const First =()=>{
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    return(
        <>
            <h1>HOC</h1>
            <button onClick={increment}>click {count} time :</button>
        </>
    )
}
export default UpdateComp(First)