import React, { useState,useMemo } from 'react'
const Counter=()=>{
    const [counter1,setCounter1]=useState(0)
    const [counter2,setCounter2]=useState(0)
    const incrementOne=()=>{
        
        setCounter1(counter1+1)
    }
    const incrementTwo=()=>{
        setCounter2(counter2+1)
    }
    const evenOrOdd = useMemo(() => {
        let i=0;
        while(i<3000000)
            i++
        return (counter1 % 2 === 0) ? "even" : "odd";
      },[counter1])
    console.log(evenOrOdd);
    
    return(
        <>
        <button onClick={incrementOne}>counter one:{counter1}</button>
        <p>{evenOrOdd}</p>
        <button onClick={incrementTwo}>counter Two:{counter2}</button>
        </>
    )
}
export default Counter