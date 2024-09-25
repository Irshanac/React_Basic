// import React, { useState, useMemo } from 'react';

// function ExpensiveComputationComponent({ numbers }) {
//   const [count, setCount] = useState(0);

//   // Memoize the expensive computation
//   const totalSum = useMemo(() => {
//     console.log('Computing total sum...');
//     return numbers.reduce((acc, num) => acc + num, 0);
//   }, [numbers]);  // Only recalculates if `numbers` changes

//   return (
//     <div>
//       <h2>Counter: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>

//       <h2>Sum of Numbers: {totalSum}</h2>
//     </div>
//   );
// }

// export default ExpensiveComputationComponent;


import React, { useMemo, useState } from "react";
const Sample=(n)=>{
    const [s,setS]=useState()
   const sum= useMemo(()=>{
    return n.reduce((acc,cur)=>acc+cur,0)
   },[n])
   return(
    <div>
        <h1>{s}</h1>
        <button onClick={setS((s)=>s+1)}>+</button>
        <h3>sum={sum}</h3>
    </div>
   )
}
export default Sample