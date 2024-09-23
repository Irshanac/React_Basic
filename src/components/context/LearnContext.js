import React, { createContext, useState } from "react";
import Comb1 from "./Comb1";
//export const MyContext=createContext()
export const MyNewContext = createContext(500);
export const MyContext = createContext();
const LearnContext =()=>{
    const [check,setchecck]=useState("false")
    return(
        <React.Fragment>
                 <input checked={check} type="checkbox" onChange={()=>(setchecck(!check))}></input>
                 <MyContext.Provider value={check}>
                    <MyNewContext.Provider value={100}>
                         <Comb1/> 
                    </MyNewContext.Provider>
                 </MyContext.Provider>
        </React.Fragment>
    )
}
export default LearnContext
