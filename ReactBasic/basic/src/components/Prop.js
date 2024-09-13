import React from 'react'
const Prop=(props)=>{
    return(
        <div>
            <h1>HI {props.name}</h1>
            {props.children}
        </div>
    )
}
export default Prop