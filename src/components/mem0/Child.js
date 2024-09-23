import React from 'react'
const Child=(props)=>{
    console.log("child re-render");
    
    return(
        <>
            <h1>Child component</h1>
            <h2>{props.name}</h2>
        </>
    )
}
export default React.memo(Child)