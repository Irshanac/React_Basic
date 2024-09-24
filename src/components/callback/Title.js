import React from'react'
const Title=()=>{
    console.log("Title page");
    
    return(
        <h1>Call back Title</h1>
    )
}
export default React.memo(Title)