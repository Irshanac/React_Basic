import React from "react";
import Count2 from "./Counter2";
import useCounter from "./useCounter";
const Count1=()=>{
    const [counter,increment,decr,rest]=useCounter()
    return(
        <>
            <h1>in parent</h1>
            <h1>Counter ={counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decr}>-</button>
            <button onClick={rest}>reset</button>
            <Count2/>
        </>
    )
}
export default Count1