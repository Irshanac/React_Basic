import React, { useReducer } from "react";
function reducer(prev,action){
    switch(action.key)
    {
        case "addition":
            let x=prev.value+1
            let a=x%2===0?"green":"black"
            return {value:x,color:a}
        default :
            return prev

    }
}
const EvenColor=()=>{
    const [value,dispatch]=useReducer(reducer,{value:0,color:"pink"})
    return(
        <>
        <h1 style={{color:value.color}}>{value.value}</h1>
        <button onClick={()=>dispatch({key:"addition"})}>+</button>
        </>
    )
}
export default EvenColor