import {useState} from 'react'

function useCounter() {
    const [counter2,setCounter2]=useState(0)
    const increment =()=>{
        setCounter2((p)=>(p+1))
    }
    const decr =()=>{
        if(counter2===0)
            return 0
        else
             setCounter2((p)=>(p-1))
    }
    const rest=()=>{
        setCounter2(0)
    }
    return [counter2,increment,decr,rest]
}

export default useCounter
