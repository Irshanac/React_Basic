import React, {useState, createContext } from 'react'

export const NoteCollor=createContext()
export const BackContext=({children})=>{
    const [div,setDiv]=useState([])
    const adddiv=(heading,para,colors)=>{
        const newOne={id:div.length,heading,para,colors}
        setDiv(prevs=>[...prevs,newOne])
    }
    console.log(div+"it is a");
    
    const deletediv=(index)=>
    {
        const change=div.filter(p=>p.id!==index)
        setDiv(change)
        return true
    }
    const editdiv=(id,hd,bdy,clr)=>{
       console.log(id);
       console.log(hd);
       console.log(bdy);
       console.log(clr);
       div[id]={id:id,heading:hd,para:bdy,colors:clr}
    }
    return(
        <NoteCollor.Provider value={{div,adddiv,deletediv,editdiv}}>
            {children}
        </NoteCollor.Provider>
    )
}
