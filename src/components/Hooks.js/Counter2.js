import React from "react";
import useCounter from "./useCounter";
const Count2=()=>{
    const [counter2,increment,decr,rest]=useCounter()
    return(
        <>
            <h1>in child</h1>
            <h1>Counter ={counter2}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decr}>-</button>
            <button onClick={rest}>reset</button>
        </>
    )
}
export default Count2