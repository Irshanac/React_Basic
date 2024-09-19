import React, { useReducer } from "react";
function colorCount(prev,action){
 switch(action)
 {
    case "inc":
         return  {...prev,value:prev.value+1}
    case "decc":
            return  {...prev,value:prev.value-1}
    case "blue":
            return  {...prev,color:"blue"}
    case "green":
            return  {...prev,color:"green"}
    default:
        return prev
 }
}
const CounterColor=()=>{
    const [state,dispatch]=useReducer(colorCount,{value:0,color:"pink"})
    return(
        <React.Fragment>
            <button onClick={()=>dispatch("inc")}>+</button>
            <p style={{width:"30px",backgroundColor:state.color}}>{state.value}</p>
            <button onClick={()=>dispatch("decc")}>-</button>
            <button onClick={()=>dispatch("blue")}>blue</button>
            <button onClick={()=>dispatch("green")}>green</button>
        </React.Fragment>
    )
}
export default CounterColor