import React from 'react'
const Buttons=({handleClick,children})=>{
    console.log("button page",children);
    
    return(
            <button onClick={handleClick}>
                {children}
            </button>
    )
}
export default React.memo(Buttons)