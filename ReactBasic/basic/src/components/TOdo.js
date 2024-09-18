import React,{useState} from 'react'

function TOdo() {
    const [newTask,setNewTask]=useState("")
    const [listTask,setListTask]=useState([])
    const settask=(e)=>{
        setNewTask(e.target.value)
    }
    const newTaskadd=(e)=>{
        e.preventDefault(); 
        setListTask([...listTask,newTask])
        setNewTask("")
    }

    const deletes=(index)=>{
        const updates=listTask.filter((_,i)=>i!==index)
        setListTask(updates)
    }
    const updatesList=(index)=>{
      setNewTask(listTask[index]);
    }
  return (
    <div>
      <form>
        <input value={newTask}onChange={settask}></input>
        <button onClick={newTaskadd}>Add Task</button>
        </form>
        {listTask.map((list,index)=>(
           <div key={index}>
                <h3>{list}</h3>
                <button onClick={()=>deletes(index)}>delete task</button>
                <button onClick={()=>updatesList(index)}>update task</button>
           </div> 
        ))}
    
    </div>
  
  )
}

export default TOdo
