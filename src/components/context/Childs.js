import React, { createContext, useState } from 'react'
export const Child=createContext()
export const ASD =()=>{
    const [s,setS]=useState(0)
    const adding=()=>{
        setS((p)=>p+1)
    }
    return(
        <>
    
            <Child.Provider value={{s,adding}}>
                {children}
            </Child.Provider>
        </>
    )
}
