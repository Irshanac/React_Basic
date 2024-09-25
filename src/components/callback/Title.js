import React from'react'
const Title=(props)=>{
    console.log("Title page");
    
    return(
        <>
        <h1>Call back Title</h1>
        <button onClick={props.change}>CLICK</button>
        </>
    
    )
}
export default React.memo(Title)