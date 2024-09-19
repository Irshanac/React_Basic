import React, { useReducer } from "react";
function colorCount(prev,action){
 switch(action.type)
 {
    case "changeValue":
         return  {...prev,value:prev.value+action.payload}
    case "changeColor":
            return  {...prev,color:action.payload}
    default:
        return prev
 }
}
const Actiontype=()=>{
    const [state,dispatch]=useReducer(colorCount,{value:0,color:"pink"})
    return(
        <React.Fragment>
            <button onClick={()=>dispatch({type:"changeValue",payload:1})}>+</button>
            <p style={{width:"30px",backgroundColor:state.color}}>{state.value}</p>
            <button onClick={()=>dispatch({type:"changeValue",payload:-1})}>-</button>
            <button onClick={()=>dispatch({type:"changeColor",payload:"blue"})}>blue</button>
            <button onClick={()=>dispatch({type:"changeColor",payload:"green"})}>green</button>
        </React.Fragment>
    )
}
export default Actiontype