import React from 'react'
const Counter =(props)=>{
    console.log("counter page");
    
    return(
        <h1>{props.text}:{props.count}</h1>
    )
}
export default React.memo(Counter)