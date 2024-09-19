import React, { useReducer } from "react";
function reducerfun(state, action) {
  if (action === "increment") return state + 1;
  else return state - 1;
}
const Counter = () => {
  //const [count,setCount]=useState(0)
  const [value, dispatch] = useReducer(reducerfun, 0);
  return (
    <div>
      <button onClick={() => dispatch("increment")}>+</button>
      <h2
        style={{
          color: "yellow",
          backgroundColor: "pink",
          height: "100px",
          width: "50px",
        }}
      >
        {value}
      </h2>
      <button onClick={() => dispatch("dicrement")}>-</button>
    </div>
  );
};
export default Counter;
