import React, { useState } from "react";
const Contion = () => {
  const [isChange, setIsChange] = useState("login");
  const chnageDiv=()=>{
   // setIsChange(p=>p==="login"?"register":"login")
   setIsChange((p)=>(p==="login"?"register":"login"))
  }
  return (
    <div>{isChange==="login" ?
         (<div>
            <h1>Login</h1>
            <button onClick={chnageDiv}>registaer</button>
         </div> )
         : 
         (<div>
            <h1>Register</h1>
            <button onClick={chnageDiv}>Login</button>
         </div>)
        }
         </div>
  );
};
export default Contion;
