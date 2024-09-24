// import React, { useState } from "react";
// const UpdateComp=(OriginalComp)=>{
//    function newcomp(props){
//     const [count,setCount]=useState(0)
//     const increment=()=>{
//         setCount(count+1)
//     }
//     return <OriginalComp  {...props} name="irshana" count={count} increment={increment}/>
//    }
//    return newcomp
// }
// export default UpdateComp

import React, { useState } from "react";

const UpdateComp = (OriginalComp) => {
  function NewComp(props) {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    // Pass new props `count` and `increment`, along with all original props
    return (
      <OriginalComp
        {...props}
        name="irshana"
        count={count}
        increment={increment}
      />
    );
  }

  return NewComp;
};

export default UpdateComp;

