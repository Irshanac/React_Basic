import React from "react";
import data from './Record.json'
const Record=()=>{
    return(
        <>
            { data && data.map((obj)=>{
            return(
                <div key={obj.id}>
                    <h1>Name:{obj.name}</h1>
                    <h2>House Name:{obj.house_name}</h2>
                    {obj.qualification.map((qua,index)=>{
                        return(
                            <div key={index}>
                                <h4>{qua.degree}</h4>
                            </div>
                        )
                    })}
                </div>
            )
            })
        }
        </>
    )
}
export default Record