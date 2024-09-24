import React ,{useState,useCallback}from 'react'
import Title from './Title'
import Counter from './Counter'
import Buttons from './Buttons'
const First=()=>{
    const [count,setCount]=useState(18)
    const [salary,setSalary]=useState(10000)
    console.log("parent component");
    const incrementage=useCallback(()=>{
        setCount((p)=>p+1)
    },[])
    const incrementSalary=useCallback(()=>{
        setSalary((p)=>p-1)
    },[])
    return(
        <React.Fragment>
            <Title/>
            <Counter text="Age" count={count}/>
            <Buttons handleClick={incrementage}>Increment Age</Buttons>
            <Counter text="Age" count={salary}/>
            <Buttons handleClick={incrementSalary}>Increment Salary</Buttons>

        </React.Fragment>
    )
}
export default First