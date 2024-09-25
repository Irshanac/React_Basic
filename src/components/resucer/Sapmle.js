import React, { useReducer } from 'react'
function reducer(prev,action)
{
    if(action==="inc")
       return  {...prev,value:prev.value+1}
    else if(action==="dec")
        return {...prev,value:prev.value-1}
    else if(action==="pink")
        return {...prev,value:"pink"}
    else if(action==="green")
        return {...prev,value:"green"}
    else
        return prev

}
const Sample=()=>{
    const [state,dispatch]=useReducer(reducer({value:0,color:"pink"}))
    return(
        <div>
            <p style={{width:"30px",backgroundColor:state.color}}>{state.value}</p>
            <button onClick={dispatch("inc")}>+</button>
            <button onClick={dispatch("dec")}>-</button>
            <button onClick={dispatch("pink")}>change to pink</button>
            <button onClick={dispatch("green")}>change to green</button>
        </div>
    )
}