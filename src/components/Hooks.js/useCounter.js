// import {useState} from 'react'

// function useCounter() {
//     const [counter2,setCounter2]=useState(0)
//     const increment =()=>{
//         setCounter2((p)=>(p+1))
//     }
//     const decr =()=>{
//         if(counter2===0)
//             return 0
//         else
//              setCounter2((p)=>(p-1))
//     }
//     const rest=()=>{
//         setCounter2(0)
//     }
//     return [counter2,increment,decr,rest]
// }

// export default useCounter
import React, { useState } from 'react'

function useTask(){
    const [c1,setc1]=useState(0)
    // [c2,setc2]=useState(0)
    const adding=()=>{
        setc1(c1+1)
    }
    const dec=()=>{
        setc1(c1-1)
    }
    const reset=()=>{
        setc1(0)
    }
    return [c1,adding,dec,reset]
  
}
export default useTask